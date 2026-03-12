import { Suspense } from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { socialLinks } from "@/data/profile";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/ui/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Contact",
  "For speaking, advisory, research partnerships, or executive education."
);

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-12 pt-24">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-muted-foreground leading-[1.7]">
            For speaking, advisory, research partnerships, or executive education:
          </p>
          <p className="mt-2">
            <Link
              href="mailto:oguzhan@berkeley.edu"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              oguzhan@berkeley.edu
            </Link>
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {link.url.replace(/^https?:\/\//, "")}
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>

      <Separator />

      <section className="py-16">
        <FadeIn>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </FadeIn>
      </section>
    </div>
  );
}
