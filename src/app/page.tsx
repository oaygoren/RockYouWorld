import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile, affiliations, recentItems } from "@/data/profile";
import { createMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Home",
  "Scholar, entrepreneur, and advisor working at the intersection of innovation, venture capital, and enterprise strategy."
);

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Hero */}
      <section className="pb-16 pt-28">
        <FadeIn>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {profile.name}
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mt-4 text-lg italic text-muted-foreground leading-relaxed">
            {profile.title} working at the intersection of innovation, venture capital, and enterprise strategy.
          </p>
        </FadeIn>
      </section>

      {/* Bio */}
      <section className="pb-16">
        <div className="space-y-6">
          {profile.bio.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 80}>
              <p className="text-muted-foreground leading-[1.7]">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Affiliation Logos */}
      <section className="pb-16">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-65">
            {affiliations.map((name) => (
              <span key={name} className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      <Separator />

      {/* Recent */}
      <section className="py-16">
        <FadeIn>
          <h2 className="mb-8 text-xs font-medium tracking-[0.12em] text-accent uppercase">
            Recent
          </h2>
          <div className="space-y-4">
            {recentItems.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    {item.text}
                    {item.location && <> &middot; {item.location}</>}
                  </p>
                  <span className="shrink-0 text-xs text-muted-foreground/60">{item.year}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      <Separator />

      {/* CTA */}
      <section className="py-16">
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed">
            If you are looking to work together — on advisory, research, speaking, or executive education — the Services page is a good place to start.
          </p>
          <Link
            href="/services"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            <ArrowRight className="size-3.5" />
            View Services
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
