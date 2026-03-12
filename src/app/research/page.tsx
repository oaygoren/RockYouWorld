import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Research",
  "Research on startup behavior, open innovation, AI for business innovation, design and creativity, and corporate venturing."
);

const researchAreas = [
  {
    title: "Startup Behavior and Startup Orientation",
    description:
      "Investigating how new ventures create value, what behavioral patterns distinguish successful startups, and how large organizations can structurally adopt startup-like characteristics. Original framework: Startup Orientation.",
  },
  {
    title: "Open Innovation and Corporate Venturing",
    description:
      "How established companies engage external knowledge sources — universities, startups, and VC ecosystems — to drive innovation. Research on venture client models, corporate accelerators, and the structural conditions that make open innovation work.",
  },
  {
    title: "AI for Business Innovation",
    description:
      "The organizational and strategic implications of artificial intelligence for how companies innovate, compete, and build new ventures. Current focus area at the UC Berkeley Institute for Business Innovation.",
  },
  {
    title: "Design, Creativity, and New Venture Creation",
    description:
      "The role of design thinking and creative processes in how new ventures are conceived and built. Research informed by affiliation with Stanford's d.school and the Center for Design Research.",
  },
  {
    title: "Digital Marketing and Consumer Behavior",
    description:
      "Choice behavior, consumer decision-making, digital marketing strategy, and the dynamics of online communities and platforms.",
  },
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-12 pt-24">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Research
          </h1>
          <p className="mt-4 text-muted-foreground leading-[1.7]">
            Aygoren&apos;s research examines how organizations — startups and established enterprises — create, adopt, and scale innovation. His work is grounded in empirical study and informed by direct participation in the ventures, ecosystems, and institutions he studies.
          </p>
        </FadeIn>
      </section>

      {/* Research Areas */}
      <section className="pb-16">
        <div className="space-y-10">
          {researchAreas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 80}>
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {area.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-[1.7]">
                  {area.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Separator />

      {/* Working With Corporates */}
      <section className="py-16">
        <FadeIn>
          <h2 className="mb-4 text-xs font-medium tracking-[0.12em] text-accent uppercase">
            Working With Corporates
          </h2>
          <p className="text-muted-foreground leading-[1.7]">
            The UC Berkeley Institute for Business Innovation works with global corporations on research partnerships, executive programs, and ecosystem access. Corporate affiliate programs and joint research initiatives are available.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">Google Scholar: </span>
              <Link
                href="https://scholar.google.com.tr/citations?user=AbBGR8YAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                scholar.google.com.tr/citations?user=AbBGR8YAAAAJ
              </Link>
            </p>
            <p>
              <span className="text-muted-foreground">Research inquiries: </span>
              <Link
                href="mailto:oguzhan@berkeley.edu"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                oguzhan@berkeley.edu
              </Link>
            </p>
          </div>
        </FadeIn>
      </section>

      <Separator />

      {/* CTA */}
      <section className="py-16">
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed">
            Organizations interested in a research collaboration, corporate affiliate program, or joint initiative are encouraged to reach out. A brief description of the context is helpful.
          </p>
          <Link
            href="/contact?subject=Research+Partnership"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            <ArrowRight className="size-3.5" />
            Explore a research partnership
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
