import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="bg-surface px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <ul className="mx-auto grid max-w-content gap-4 lg:grid-cols-3 lg:gap-8">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex flex-col items-center justify-center rounded-2xl border border-outline-variant bg-background p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05)] lg:p-10"
          >
            <p
              className={`pb-2 text-center font-heading text-stat ${stat.valueClass}`}
            >
              {stat.value}
            </p>
            <p className="text-center text-base font-bold tracking-label text-ink-muted uppercase">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
