"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { navLinks } from "@/lib/site";

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
          <ButtonLink
            href="#"
            variant="outline"
            size="sm"
            className="max-lg:hidden"
          >
            Buy Rabbits
          </ButtonLink>
          <ButtonLink
            href="#"
            size="sm"
            className="max-sm:hidden"
          >
            Sell Rabbits
            <Icon icon={arrowRight} />
          </ButtonLink>

          {/* <div className="flex items-center gap-2 border-l border-outline-variant pl-4">
            <div className="relative size-9 shrink-0 overflow-hidden rounded-full border border-outline">
              <Image
                src="/images/avatar.jpg"
                alt=""
                fill
                sizes="36px"
                className="object-cover"
                style={{ objectPosition: "50% 25.7%" }}
              />
            </div>
            <span className="hidden text-base leading-4 text-ink sm:block">
              Taiwo David
            </span>
          </div> */}

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
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#" variant="outline" size="sm">
              Buy Rabbits
            </ButtonLink>
            <ButtonLink href="#" size="sm" className="sm:hidden">
              Sell Rabbits
              <Icon icon={arrowRight} />
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
