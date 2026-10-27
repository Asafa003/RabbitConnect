"use client";

import { useState, type FormEvent } from "react";
import { useFormSubmit } from "@/components/forms/use-form-submit";
import { Button } from "@/components/ui/button";
import { Field, FormStatus, Select, TextArea, TextInput } from "@/components/ui/field";
import { contactSubjectOptions } from "@/lib/forms";

export function ContactForm() {
  const { pending, error, success, onSubmit } = useFormSubmit(
    "contact",
    "Message sent. We'll get back to you soon.",
  );
  const [subject, setSubject] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const values = new FormData(form);
    const ok = await onSubmit(event, {
      name: values.get("name"),
      email: values.get("email"),
      subject: values.get("subject"),
      message: values.get("message"),
    });
    if (ok) {
      form.reset();
      setSubject("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Field label="Name" id="contact-name" required>
        <TextInput
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={pending}
        />
      </Field>

      <Field label="Email" id="contact-email" required>
        <TextInput
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={pending}
        />
      </Field>

      <Field label="Subject" id="contact-subject" required>
        <Select
          id="contact-subject"
          name="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={pending}
        >
          <option value="" disabled>
            Select one
          </option>
          {contactSubjectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Message" id="contact-message" required>
        <TextArea id="contact-message" name="message" rows={5} required disabled={pending} />
      </Field>

      <FormStatus error={error} success={success} />

      <Button type="submit" typeface="body-bold" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
