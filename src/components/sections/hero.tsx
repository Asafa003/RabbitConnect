import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { feedbackSectionHref, heroCopy, waitlistHref } from "@/lib/site";

export function Hero() {
  return (
    // The blurred decorative blobs intentionally bleed past the content box.
    <section className="overflow-x-clip">
      <div className="mx-auto flex max-w-page flex-col items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-10 lg:pt-24 lg:pb-20">
        <div className="flex min-w-0 flex-col items-start gap-8 lg:flex-1">
          <p className="rounded-full bg-mint px-4 py-1.5 text-sm font-bold tracking-pill text-mint-ink uppercase">
            The Rabbit Exchange for Africa
          </p>

          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance text-primary sm:text-5xl">
            A smarter marketplace for Africa&apos;s rabbit value chain.
          </h1>

          <p className="max-w-xl text-base text-pretty">{heroCopy}</p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <ButtonLink href={waitlistHref}>Join the Waitlist</ButtonLink>
            <ButtonLink href={feedbackSectionHref} variant="outline">
              Help Shape RabbitConnect
            </ButtonLink>
          </div>
        </div>

        <div className="relative w-full min-w-0 lg:flex-1">
          <div
            aria-hidden="true"
            className="absolute -top-12 -right-12 size-64 rounded-full bg-mint/30 blur-[32px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -left-12 size-48 rounded-full bg-mint-soft/30 blur-[20px]"
          />
          <div className="relative overflow-clip rounded-hero border-8 border-surface-strong p-2 shadow-2xl">
            <div className="relative h-[320px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/hero-rabbit.webp"
                alt="Sustainable rabbit farming in Africa"
                fill
                preload
                sizes="(min-width: 1024px) 616px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
