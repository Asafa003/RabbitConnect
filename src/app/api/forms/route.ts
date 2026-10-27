import { NextResponse } from "next/server";
import {
  validateForm,
  type ContactPayload,
  type FeedbackPayload,
  type FormKind,
  type FormPayload,
  type WaitlistPayload,
} from "@/lib/forms";

export const runtime = "nodejs";

type Body = {
  kind?: FormKind;
  data?: Record<string, unknown>;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asBool(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "Yes";
}

function parsePayload(body: Body): FormPayload | null {
  if (!body.kind || !body.data) return null;
  const d = body.data;

  if (body.kind === "waitlist") {
    const data: WaitlistPayload = {
      name: asString(d.name),
      email: asString(d.email),
      type: asString(d.type),
      location: asString(d.location),
      interest: asString(d.interest),
    };
    return { kind: "waitlist", data };
  }

  if (body.kind === "feedback") {
    const data: FeedbackPayload = {
      userType: asString(d.userType),
      challenge: asString(d.challenge),
      details: asString(d.details),
      desiredFeature: asString(d.desiredFeature),
      preLaunchTester: asBool(d.preLaunchTester),
    };
    return { kind: "feedback", data };
  }

  if (body.kind === "contact") {
    const data: ContactPayload = {
      name: asString(d.name),
      email: asString(d.email),
      subject: asString(d.subject),
      message: asString(d.message),
    };
    return { kind: "contact", data };
  }

  return null;
}

export async function POST(request: Request) {
  const webAppUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;
  if (!webAppUrl) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Forms are not connected yet. Set GOOGLE_SHEETS_WEBAPP_URL in .env.local.",
      },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Unknown or incomplete form." },
      { status: 400 },
    );
  }

  const validationError = validateForm(payload);
  if (validationError) {
    return NextResponse.json(
      { ok: false, error: validationError },
      { status: 400 },
    );
  }

  const outbound =
    payload.kind === "contact"
      ? { kind: payload.kind, data: { ...payload.data, status: "New" } }
      : payload;

  try {
    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...outbound,
        secret: process.env.GOOGLE_SHEETS_SECRET || undefined,
      }),
      redirect: "follow",
    });

    const text = await response.text();
    let result: { ok?: boolean; error?: string } = {};
    try {
      result = JSON.parse(text) as { ok?: boolean; error?: string };
    } catch {
      // Apps Script sometimes returns HTML on misconfigured deployments.
    }

    if (!response.ok || result.ok === false) {
      return NextResponse.json(
        {
          ok: false,
          error: result.error || "Could not save your response. Try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach the form service. Try again." },
      { status: 502 },
    );
  }
}
