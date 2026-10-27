import type { ComponentProps, ReactNode } from "react";

const fieldClass =
  "w-full rounded-xl border border-outline-variant bg-background px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-bold text-ink">
      {children}
      {required ? <span className="text-primary"> *</span> : null}
    </label>
  );
}

export function Field({
  label,
  id,
  required,
  hint,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      {children}
      {hint ? <p className="text-sm text-ink-muted">{hint}</p> : null}
    </div>
  );
}

export function TextInput(props: ComponentProps<"input">) {
  return <input {...props} className={[fieldClass, props.className].filter(Boolean).join(" ")} />;
}

export function TextArea(props: ComponentProps<"textarea">) {
  return (
    <textarea
      {...props}
      className={[fieldClass, "min-h-28 resize-y", props.className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export function Select(props: ComponentProps<"select">) {
  return (
    <select
      {...props}
      className={[fieldClass, "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10", props.className]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23003629' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        ...props.style,
      }}
    />
  );
}

export function FormStatus({
  error,
  success,
}: {
  error?: string | null;
  success?: string | null;
}) {
  if (error) {
    return (
      <p role="alert" className="text-sm font-bold text-brown">
        {error}
      </p>
    );
  }
  if (success) {
    return (
      <p role="status" className="text-sm font-bold text-primary">
        {success}
      </p>
    );
  }
  return null;
}
