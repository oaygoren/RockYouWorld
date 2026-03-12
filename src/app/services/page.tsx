import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Services",
  "Advisory, research partnerships, keynote speaking, and executive education."
);

const services = [
  {
    title: "Advisory",
    tagline: "Strategic thinking partner for leadership teams",
    description:
      "Senior executives working on innovation strategy, corporate venturing, AI adoption, or organizational transformation. Engagements typically involve working directly with the C-suite or a dedicated innovation team over a defined period — not recurring retainers, but structured thinking partnerships with a clear scope and outcome.",
    detail:
      "Discovery conversation → scoped engagement. Format, length, and deliverables defined case by case. Conducted in person or remotely. Organizations served include multinationals across Europe, the Middle East, and the United States.",
  },
  {
    title: "Research Partnerships",
    tagline: "Corporate access to Berkeley's innovation research pipeline",
    description:
      "Organizations seeking a research-based perspective on a strategic question — AI strategy, open innovation, venture ecosystems, startup behavior — can engage through a structured research partnership. This connects corporate teams with current research at the UC Berkeley Institute for Business Innovation, including access to the broader Berkeley ecosystem.",
    detail:
      "Research brief → scoped study or engagement. Can include executive workshops, white papers, or co-design of innovation programs. Operates through the Institute for Business Innovation at UC Berkeley Haas.",
  },
  {
    title: "Keynote Speaking",
    tagline: "Talks for boards, executive teams, and conference audiences",
    description:
      "Evidence-based talks on innovation, entrepreneurship, AI strategy, and corporate venturing — for executive retreats, corporate conferences, and board offsites. Topics are drawn from active research and adapted to the audience's specific context. Not generic motivation. Specific argument, specific data, specific relevance.",
    detail:
      "Topics available: Startup Orientation / Open Innovation and Corporate Venturing / AI for Business Innovation / The Entrepreneurial Mindset / University–Venture–Corporate Ecosystems. Duration: 45 min keynote or 90 min workshop. Delivered globally.",
  },
  {
    title: "Executive Education",
    tagline: "Custom programs for leadership and innovation teams",
    description:
      "Multi-session executive education programs for corporate cohorts — on innovation strategy, design thinking, startup orientation, digital transformation, or entrepreneurship as a leadership capability. Designed and delivered for organizations, not open enrollment. Past clients include companies across banking, FMCG, energy, telecoms, and technology.",
    detail:
      "Clients include Toyota, Pfizer, Johnson & Johnson, L'Oreal, SOCAR, ING Bank, İş Bank, Garanti BBVA, Türk Telekom, Vestel, Şişecam, Pegasus, Visa, Google, Meta, Red Bull, Abu Dhabi Dept of Culture & Tourism. Format: half-day to multi-day. In person or remote.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-12 pt-24">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Services
          </h1>
          <p className="mt-4 text-muted-foreground leading-[1.7]">
            Aygoren works with corporations, government bodies, and foundations on a focused set of engagements. Each is grounded in research and informed by direct experience building, advising, and investing across three geographies.
          </p>
        </FadeIn>
      </section>

      <section className="pb-16">
        <div className="space-y-12">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80}>
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {service.tagline}
                </p>
                <p className="mt-4 text-muted-foreground leading-[1.7]">
                  {service.description}
                </p>
                <div className="mt-4">
                  <p className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
                    What this looks like
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">
                    {service.detail}
                  </p>
                </div>
              </div>
              {i < services.length - 1 && <Separator className="mt-12" />}
            </FadeIn>
          ))}
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="py-16">
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed">
            To discuss any of the above, please use the contact form. Describe the context briefly — the challenge you&apos;re working on, the type of engagement you have in mind, and the timeline. I read every message personally.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            <ArrowRight className="size-3.5" />
            Get in touch
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
