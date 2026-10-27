"use client";

import { useState, type FormEvent } from "react";
import { useFormSubmit } from "@/components/forms/use-form-submit";
import { Button } from "@/components/ui/button";
import { Field, FormStatus, Select, TextArea, TextInput } from "@/components/ui/field";
import { challengeOptions, userTypeOptions } from "@/lib/forms";
import type { Role } from "@/lib/site";

export function FeedbackForm({
  initialUserType = "",
}: {
  initialUserType?: Role | "";
}) {
  const { pending, error, success, onSubmit } = useFormSubmit(
    "feedback",
    "Thanks — your feedback helps shape RabbitConnect.",
  );
  const [userType, setUserType] = useState<string>(initialUserType);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const values = new FormData(form);
    const ok = await onSubmit(event, {
      userType: values.get("userType"),
      challenge: values.get("challenge"),
      details: values.get("details"),
      desiredFeature: values.get("desiredFeature"),
      preLaunchTester: values.get("preLaunchTester") === "on",
    });
    if (ok) {
      form.reset();
      setUserType(initialUserType);
    }
  }

  return (
    <form
      id="feedback-form"
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl flex-col gap-5"
      noValidate
    >
      <Field label="I am a…" id="feedback-user-type" required>
        <Select
          id="feedback-user-type"
          name="userType"
          required
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          disabled={pending}
        >
          <option value="" disabled>
            Select one
          </option>
          {userTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Biggest challenge today" id="feedback-challenge" required>
        <Select id="feedback-challenge" name="challenge" required defaultValue="" disabled={pending}>
          <option value="" disabled>
            Select one
          </option>
          {challengeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        label="Tell us more"
        id="feedback-details"
        required
        hint="How does this show up in your day-to-day work?"
      >
        <TextArea id="feedback-details" name="details" rows={4} required disabled={pending} />
      </Field>

      <Field
        label="One feature you want at launch"
        id="feedback-feature"
        hint="Optional"
      >
        <TextInput id="feedback-feature" name="desiredFeature" type="text" disabled={pending} />
      </Field>

      <label className="flex items-start gap-3 text-base text-ink">
        <input
          type="checkbox"
          name="preLaunchTester"
          className="mt-1 size-4 rounded border-outline-variant accent-primary"
          disabled={pending}
        />
        <span>I&apos;d like to be a pre-launch tester</span>
      </label>

      <FormStatus error={error} success={success} />

      <Button type="submit" typeface="body-bold" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Share Your Feedback"}
      </Button>
    </form>
  );
}
