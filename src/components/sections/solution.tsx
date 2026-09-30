import { Icon } from "@/components/ui/icon";
import { Lines } from "@/components/ui/lines";
import { steps } from "@/lib/site";

export function Solution() {
  return (
    <section className="bg-forest py-16 lg:py-24">
      <div className="mx-auto flex max-w-page flex-col items-center gap-12 px-4 sm:px-6 lg:gap-20 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-base font-bold tracking-eyebrow text-mint uppercase">
            Our Ecosystem
          </p>
          <h2 className="font-heading text-base text-white">The Solution</h2>
        </div>

        <ol className="flex w-full flex-col gap-12 lg:flex-row lg:items-start">
          {steps.map((step) => (
            <li
              key={step.title}
              className="flex min-w-0 flex-col items-start gap-6 lg:flex-1"
            >
              <div className="flex size-20 items-center justify-center rounded-2xl bg-mint shadow-lg">
                <Icon icon={step.icon} />
              </div>
              <h3 className="pt-2 font-heading text-base text-white">
                {step.title}
              </h3>
              <p className="text-body text-mint-muted">
                <Lines lines={step.lines} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
