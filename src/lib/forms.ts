export type FormKind = "waitlist" | "feedback" | "contact";

export type WaitlistPayload = {
  name: string;
  email: string;
  type: string;
  location: string;
  interest: string;
};

export type FeedbackPayload = {
  userType: string;
  challenge: string;
  details: string;
  desiredFeature: string;
  preLaunchTester: boolean;
};

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FormPayload =
  | { kind: "waitlist"; data: WaitlistPayload }
  | { kind: "feedback"; data: FeedbackPayload }
  | { kind: "contact"; data: ContactPayload };

export const userTypeOptions = [
  { value: "farmer", label: "Farmer" },
  { value: "buyer", label: "Buyer" },
  { value: "logistics", label: "Logistics Partner" },
  { value: "other", label: "Other" },
] as const;

export const challengeOptions = [
  { value: "pricing", label: "Opaque pricing / market info" },
  { value: "logistics", label: "Logistics and transport" },
  { value: "payments", label: "Payment friction" },
  { value: "finding-buyers", label: "Finding reliable buyers" },
  { value: "finding-stock", label: "Finding reliable stock" },
  { value: "other", label: "Something else" },
] as const;

export const contactSubjectOptions = [
  { value: "General enquiry", label: "General enquiry" },
  { value: "Partnership", label: "Partnership" },
  { value: "Press", label: "Press" },
  { value: "Other", label: "Other" },
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function required(value: string, label: string): string | null {
  if (!value.trim()) return `${label} is required.`;
  return null;
}

export function validateWaitlist(data: WaitlistPayload): string | null {
  return (
    required(data.name, "Name") ||
    required(data.email, "Email") ||
    (emailPattern.test(data.email) ? null : "Enter a valid email.") ||
    required(data.type, "User type")
  );
}

export function validateFeedback(data: FeedbackPayload): string | null {
  return (
    required(data.userType, "User type") ||
    required(data.challenge, "Challenge") ||
    required(data.details, "Details")
  );
}

export function validateContact(data: ContactPayload): string | null {
  return (
    required(data.name, "Name") ||
    required(data.email, "Email") ||
    (emailPattern.test(data.email) ? null : "Enter a valid email.") ||
    required(data.subject, "Subject") ||
    required(data.message, "Message")
  );
}

export function validateForm(payload: FormPayload): string | null {
  if (payload.kind === "waitlist") return validateWaitlist(payload.data);
  if (payload.kind === "feedback") return validateFeedback(payload.data);
  return validateContact(payload.data);
}
