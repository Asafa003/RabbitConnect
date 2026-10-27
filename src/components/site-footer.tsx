import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icon";
import { Lines } from "@/components/ui/lines";
import {
  contact,
  footerBlurbLines,
  footerColumns,
  legalLinks,
  socials,
  type SocialId,
} from "@/lib/site";

const socialIcons: Record<SocialId, ReactNode> = {
  x: (
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </g>
  ),
};

const mailIcon = { src: "/icons/mail.svg", width: 11.6667, height: 9.33333 };
const phoneIcon = { src: "/icons/phone.svg", width: 10.5, height: 10.5 };
const locationIcon = {
  src: "/icons/location.svg",
  width: 9.33333,
  height: 11.6667,
};

const linkClass = "text-base transition-colors hover:text-primary";

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant bg-surface-strong pt-16 pb-12 lg:pt-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4 sm:px-6 lg:gap-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <p className="font-heading text-base font-bold text-primary">
              RabbitConnect
            </p>
            <p className="text-body">
              <Lines lines={footerBlurbLines} />
            </p>
            <ul className="flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-lg border border-outline-variant text-primary transition-colors hover:bg-primary/5"
                  >
                    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                      {socialIcons[social.id]}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col gap-6"
            >
              <h2 className="font-heading text-base font-bold text-primary">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-base font-bold text-primary">Contact</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Icon icon={mailIcon} />
                <a href={`mailto:${contact.email}`} className={linkClass}>
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon={phoneIcon} />
                <a href={contact.phoneHref} className={linkClass}>
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon={locationIcon} />
                <span className="text-base">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-outline-variant pt-12">
          <p className="text-center text-base">
            © 2026 RabbitConnect Marketplace. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
