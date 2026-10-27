"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { navLinks, waitlistHref } from "@/lib/site";

const arrowRight = {
  src: "/icons/arrow-right.svg",
  width: 9.33333,
  height: 9.33333,
};

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-outline-variant bg-background/90 backdrop-blur-[6px]">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-heading text-logo font-bold text-primary"
          >
            RabbitConnect
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base text-ink-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ButtonLink href={waitlistHref} size="sm" className="max-sm:hidden">
            Join Waitlist
            <Icon icon={arrowRight} />
          </ButtonLink>

          <button
            type="button"
            className="-mr-2 flex size-11 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-outline-variant bg-background px-4 py-4 shadow-md sm:px-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg px-2 py-3 text-base text-ink-muted transition-colors hover:bg-surface hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink
            href={waitlistHref}
            size="sm"
            className="mt-2 sm:hidden"
          >
            Join Waitlist
            <Icon icon={arrowRight} />
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
