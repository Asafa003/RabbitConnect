import { Icon } from "@/components/ui/icon";
import { problems } from "@/lib/site";

export function Problems() {
  return (
    <section
      id="challenge"
      className="mx-auto scroll-mt-20 flex max-w-page flex-col gap-12 px-4 py-16 sm:px-6 lg:gap-16 lg:px-10 lg:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-bold tracking-label text-brown uppercase">
          The Challenge
        </p>
        <h2 className="max-w-2xl font-heading text-3xl font-semibold text-balance text-primary lg:text-headline">
          The Problems We&apos;re Solving
        </h2>
        <p className="max-w-2xl text-base">
          Traditional livestock trading is fragmented, opaque, and inefficient
          for small-scale producers. We&apos;re setting out to fix the root
          causes.
        </p>
      </div>

      <ul className="mx-auto grid w-full max-w-content gap-8 lg:grid-cols-3">
        {problems.map((problem) => (
          <li
            key={problem.title}
            className="flex flex-col items-start gap-6 rounded-2xl border border-outline-variant bg-background p-8"
          >
            <div className="flex size-14 items-center justify-center rounded-xl bg-rose-tint">
              <Icon icon={problem.icon} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg font-bold text-ink lg:text-xl">
                {problem.title}
              </h3>
              <p className="text-body">{problem.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
