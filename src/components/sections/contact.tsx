import { Handshake, Mail, type LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { contact, mailto } from "@/lib/site";

const channels: {
  title: string;
  body: string;
  email: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "General enquiries",
    body: "Questions about RabbitConnect or the waitlist.",
    email: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    title: "Partnerships",
    body: "Investors, cooperatives, logistics companies and NGOs.",
    email: contact.partnershipsEmail,
    href: mailto("Partnership enquiry", contact.partnershipsEmail),
    icon: Handshake,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-page scroll-mt-20 flex-col gap-12 px-4 pb-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-10 lg:pb-24"
    >
      <div className="flex flex-col gap-8 lg:flex-1">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold tracking-label text-brown uppercase">
            Contact
          </p>
          <h2 className="font-heading text-3xl font-semibold text-primary lg:text-headline">
            Let&apos;s Talk
          </h2>
          <p className="max-w-xl text-base">
            Whether you farm, buy, move rabbits or want to partner with us,
            we&apos;d love to hear from you.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {channels.map((channel) => {
            const ChannelIcon = channel.icon;
            return (
              <li
                key={channel.title}
                className="flex items-start gap-4 rounded-2xl border border-outline-variant bg-background p-6"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-mint text-primary">
                  <ChannelIcon className="size-5" aria-hidden="true" />
                </div>
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="font-heading text-lg font-bold text-ink lg:text-xl">
                    {channel.title}
                  </h3>
                  <p className="text-body">{channel.body}</p>
                  <a
                    href={channel.href}
                    className="break-all text-base font-bold text-primary hover:underline"
                  >
                    {channel.email}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full rounded-2xl border border-outline-variant bg-surface p-6 lg:flex-1 lg:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
