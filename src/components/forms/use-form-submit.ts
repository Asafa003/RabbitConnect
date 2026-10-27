"use client";

import { useState, type FormEvent } from "react";
import type { FormKind } from "@/lib/forms";

type SubmitState = {
  pending: boolean;
  error: string | null;
  success: string | null;
};

export function useFormSubmit(kind: FormKind, successMessage: string) {
  const [state, setState] = useState<SubmitState>({
    pending: false,
    error: null,
    success: null,
  });

  async function onSubmit(
    event: FormEvent<HTMLFormElement>,
    data: Record<string, unknown>,
  ) {
    event.preventDefault();
    setState({ pending: true, error: null, success: null });

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, data }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setState({
          pending: false,
          error: result.error || "Something went wrong. Please try again.",
          success: null,
        });
        return false;
      }

      setState({ pending: false, error: null, success: successMessage });
      return true;
    } catch {
      setState({
        pending: false,
        error: "Network error. Check your connection and try again.",
        success: null,
      });
      return false;
    }
  }

  function resetStatus() {
    setState((prev) => ({ ...prev, error: null, success: null }));
  }

  return { ...state, onSubmit, resetStatus };
}
