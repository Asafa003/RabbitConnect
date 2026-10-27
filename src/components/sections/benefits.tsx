import { Eye, Store, Truck, type LucideIcon } from "lucide-react";
import { benefits } from "@/lib/site";

const benefitIcons: Record<(typeof benefits)[number]["title"], LucideIcon> = {
  "Better Market Access": Store,
  "Transparent Trading": Eye,
  "Connected Logistics": Truck,
};

export function Benefits() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-surface px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-bold tracking-label text-brown uppercase">
            The Opportunity
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold text-balance text-primary lg:text-headline">
            What RabbitConnect Aims to Deliver
          </h2>
        </div>

        <ul className="grid gap-4 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit) => {
            const BenefitIcon = benefitIcons[benefit.title];
            return (
              <li
                key={benefit.title}
                className="flex flex-col items-start gap-6 rounded-2xl border border-outline-variant bg-background p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-mint text-primary">
                  <BenefitIcon className="size-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-ink lg:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-body">{benefit.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
