import { WaitlistForm } from "@/components/forms/waitlist-form";

export function Waitlist() {
  return (
    <section id="waitlist" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="relative mx-auto flex max-w-page flex-col gap-10 overflow-clip rounded-3xl border border-outline-variant bg-surface-raised p-8 shadow-xl lg:flex-row lg:items-start lg:gap-16 lg:rounded-cta lg:p-16">
        <div
          aria-hidden="true"
          className="absolute -top-48 -right-48 size-96 rounded-full bg-mint/20 blur-[32px]"
        />

        <div className="relative flex max-w-xl flex-col gap-6 lg:flex-1">
          <p className="text-sm font-bold tracking-label text-brown uppercase">
            Join the Waitlist
          </p>
          <h2 className="font-heading text-3xl font-semibold text-primary lg:text-headline">
            Be part of what&apos;s next.
          </h2>
          <p className="text-base">
            Leave your name, email and tell us whether you&apos;re a farmer,
            buyer or logistics partner. We&apos;ll reach out with early access
            as RabbitConnect takes shape.
          </p>
        </div>

        <div className="relative w-full lg:flex-1">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
