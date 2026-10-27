import {
  ArrowDown,
  ArrowRight,
  ClipboardList,
  Gavel,
  Search,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { steps, type StepId } from "@/lib/site";

const stepIcons: Record<StepId, LucideIcon> = {
  list: ClipboardList,
  discover: Search,
  bid: Gavel,
  transaction: Wallet,
  logistics: Truck,
};

// Steps after the first row of three continue downward from the centre column.
const ROW_LENGTH = 3;

export function Solution() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-forest py-16 lg:py-24">
      <div className="mx-auto flex max-w-page flex-col items-center gap-12 px-4 sm:px-6 lg:gap-20 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-bold tracking-label text-mint uppercase">
            Our Proposed Ecosystem
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold text-balance text-white lg:text-headline">
            How RabbitConnect Could Work
          </h2>
        </div>

        <ol className="grid w-full max-w-content gap-y-6 lg:grid-cols-3 lg:gap-x-12">
          {steps.map((step, index) => {
            const inFirstRow = index < ROW_LENGTH;
            const StepIcon = stepIcons[step.id];
            return (
              <li
                key={step.id}
                className={`relative flex min-w-0 flex-col items-center gap-6 text-center ${
                  inFirstRow ? "" : "lg:col-start-2"
                }`}
              >
                {index > 0 && (
                  <ArrowDown
                    aria-hidden="true"
                    className={`size-6 text-mint ${inFirstRow ? "lg:hidden" : ""}`}
                  />
                )}
                {index > 0 && inFirstRow && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute top-7 -left-9 hidden size-6 text-mint lg:block"
                  />
                )}
                <div className="flex size-20 items-center justify-center rounded-2xl bg-mint shadow-lg">
                  <StepIcon className="size-8 text-primary" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-white lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-body text-mint-muted">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
