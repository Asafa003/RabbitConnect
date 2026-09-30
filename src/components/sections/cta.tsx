import { ButtonLink } from "@/components/ui/button";
import { Lines } from "@/components/ui/lines";
import { contact, ctaLines } from "@/lib/site";

export function Cta() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:pt-24 lg:pb-[120px]">
      <div className="relative flex flex-col items-start justify-between gap-8 overflow-clip rounded-3xl border border-outline-variant bg-surface-raised p-8 shadow-xl lg:flex-row lg:items-center lg:rounded-cta lg:p-16">
        <div
          aria-hidden="true"
          className="absolute -top-48 -right-48 size-96 rounded-full bg-mint/20 blur-[32px]"
        />

        <div className="relative flex max-w-2xl flex-col gap-6 lg:pb-4">
          <h2 className="font-heading text-3xl text-primary lg:text-headline">
            Ready to scale your rabbit <br className="max-lg:hidden" />
            enterprise?
          </h2>
          <p className="text-base">
            <Lines lines={ctaLines} />
          </p>
        </div>

        <div className="relative flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <ButtonLink
            href="#"
            typeface="body-bold"
            className="sm:w-[191px]"
          >
            Create Account
          </ButtonLink>
          <ButtonLink
            href={`mailto:${contact.email}`}
            variant="outline-filled"
            typeface="body-bold"
            className="sm:w-[199px]"
          >
            Contact Support
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
