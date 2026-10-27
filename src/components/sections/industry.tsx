"use client";

import { ArrowRight, ShoppingBasket, Sprout, Truck, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { roles, type Role } from "@/lib/site";

const roleIcons: Record<Role, LucideIcon> = {
  farmer: Sprout,
  buyer: ShoppingBasket,
  logistics: Truck,
};

export function Industry() {
  const [selectedRole, setSelectedRole] = useState<Role | "">("");

  function chooseRole(role: Role) {
    setSelectedRole(role);
    document.getElementById("feedback-form")?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <section
      id="feedback"
      className="scroll-mt-20 bg-surface px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto flex max-w-content flex-col items-center gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-bold tracking-label text-brown uppercase">
            Building With the Industry
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold text-primary lg:text-headline">
            We want to build the platform you actually need.
          </h2>
          <p className="max-w-2xl text-base">
            RabbitConnect is still taking shape. Tell us how you work today so
            we can build the tools that matter most to you.
          </p>
        </div>

        <ul className="grid w-full gap-4 lg:grid-cols-3 lg:gap-8">
          {roles.map((role) => {
            const RoleIcon = roleIcons[role.id];
            const selected = selectedRole === role.id;
            return (
              <li key={role.id}>
                <button
                  type="button"
                  onClick={() => chooseRole(role.id)}
                  aria-pressed={selected}
                  className={`group flex h-full w-full flex-col items-start gap-6 rounded-2xl border bg-background p-8 text-left shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    selected
                      ? "border-primary"
                      : "border-outline-variant hover:border-primary"
                  }`}
                >
                  <div className="flex size-14 items-center justify-center rounded-xl bg-mint text-primary">
                    <RoleIcon className="size-6" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-ink lg:text-xl">
                      {role.label}
                      <ArrowRight
                        className="size-4 text-primary transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-body">{role.body}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <FeedbackForm key={selectedRole || "none"} initialUserType={selectedRole} />
      </div>
    </section>
  );
}
