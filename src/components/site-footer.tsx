import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Lines } from "@/components/ui/lines";
import {
  contact,
  footerBlurbLines,
  footerColumns,
  legalLinks,
} from "@/lib/site";

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
          </div>

          {footerColumns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col gap-6"
            >
              <h2 className="font-heading text-base text-primary">
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
            <h2 className="font-heading text-base text-primary">Contact</h2>
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
