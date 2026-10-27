"use client";

import { useState, type FormEvent } from "react";
import { useFormSubmit } from "@/components/forms/use-form-submit";
import { Button } from "@/components/ui/button";
import { Field, FormStatus, Select, TextArea, TextInput } from "@/components/ui/field";
import { userTypeOptions } from "@/lib/forms";

export function WaitlistForm() {
  const { pending, error, success, onSubmit } = useFormSubmit(
    "waitlist",
    "You're on the list. We'll be in touch.",
  );
  const [type, setType] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const values = new FormData(form);
    const ok = await onSubmit(event, {
      name: values.get("name"),
      email: values.get("email"),
      type: values.get("type"),
      location: values.get("location"),
      interest: values.get("interest"),
    });
    if (ok) {
      form.reset();
      setType("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col gap-5" noValidate>
      <Field label="Name" id="waitlist-name" required>
        <TextInput
          id="waitlist-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={pending}
        />
      </Field>

      <Field label="Email" id="waitlist-email" required>
        <TextInput
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={pending}
        />
      </Field>

      <Field label="I am a…" id="waitlist-type" required>
        <Select
          id="waitlist-type"
          name="type"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
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

      <Field label="Location" id="waitlist-location" hint="City or region (optional)">
        <TextInput
          id="waitlist-location"
          name="location"
          type="text"
          autoComplete="address-level2"
          disabled={pending}
        />
      </Field>

      <Field
        label="What interests you most?"
        id="waitlist-interest"
        hint="Optional — pricing, buyers, logistics, payments…"
      >
        <TextArea id="waitlist-interest" name="interest" rows={3} disabled={pending} />
      </Field>

      <FormStatus error={error} success={success} />

      <Button type="submit" typeface="body-bold" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Joining…" : "Join the Waitlist"}
      </Button>
    </form>
  );
}
