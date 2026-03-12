import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Speaking",
  "Talks for executive teams, corporate boards, and conference audiences on innovation, entrepreneurship, and AI strategy."
);

const topics = [
  {
    title: "Startup Orientation",
    paragraphs: [
      "Original research on how large organizations can structurally adopt the speed, creative exploration, and opportunity-seeking behavior of startups — without the chaos. Based on academic work and tested with enterprises across three continents.",
      "Audience: Leadership teams working on innovation strategy, corporate venturing, or organizational transformation.",
    ],
  },
  {
    title: "Open Innovation and Corporate Venturing",
    paragraphs: [
      "The practical architecture of how established companies engage startups, universities, and external ecosystems. Venture clienting, CVC, accelerator partnerships, research integration — when each works, and why most fail structurally rather than strategically.",
      "Audience: Chief Innovation Officers, corporate venture teams, R&D leadership.",
    ],
  },
  {
    title: "AI for Business Innovation",
    paragraphs: [
      "How artificial intelligence is reshaping the way organizations innovate, compete, and build new ventures. Drawing on current research from UC Berkeley and field experience with global corporations. Specific focus on what actually changes — and what doesn't — when AI is introduced into innovation processes.",
      "Audience: Executive teams navigating AI strategy and transformation.",
    ],
  },
  {
    title: "The Entrepreneurial Mindset",
    paragraphs: [
      "The argument that entrepreneurial thinking — ownership, initiative, tolerance for uncertainty — is a decision, not a talent. Delivered as a TEDx talk and adapted for executive audiences worldwide.",
      "Audience: High-potential leadership cohorts, organizational transformation programs.",
    ],
  },
  {
    title: "University–Venture–Corporate Ecosystems",
    paragraphs: [
      "How universities, venture capital, and corporations can engage each other productively — and what institutional designs make this work. Drawn from experience at UC Berkeley, Techstars, 212 VC, and Berkeley SkyDeck.",
      "Audience: Strategy teams, government innovation bodies, economic development organizations.",
    ],
  },
];

const recentTalks = [
  "AI Impact Hackathon · U.S. Department of State · Washington D.C. · 2026",
  "OzU AI Platform · Istanbul · 2026",
  "SF AI for Good Summit · San Francisco · 2025",
  "Glass Conference · Venice · 2025",
  "Sustainable Brands Summit · 2024",
  "TEDxAnkara",
  "Valley Meetups · CNBC-e · weekly · 2025–present",
  "Bloomberg HT Girişimcilik Dünyası · ~200 episodes · 2017–2020",
];

export default function SpeakingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-12 pt-24">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Speaking
          </h1>
          <p className="mt-4 text-muted-foreground leading-[1.7]">
            Talks for executive teams, corporate boards, and conference audiences — on innovation, entrepreneurship, AI strategy, and how organizations build for the future.
          </p>
        </FadeIn>
      </section>

      {/* Topics */}
      <section className="pb-16">
        <div className="space-y-12">
          {topics.map((topic, i) => (
            <FadeIn key={topic.title} delay={i * 80}>
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {topic.title}
                </h2>
                {topic.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-muted-foreground leading-[1.7]">
                    {p}
                  </p>
                ))}
              </div>
              {i < topics.length - 1 && <Separator className="mt-12" />}
            </FadeIn>
          ))}
        </div>
      </section>

      <Separator />

      {/* Selected Recent Talks */}
      <section className="py-16">
        <FadeIn>
          <h2 className="mb-6 text-xs font-medium tracking-[0.12em] text-accent uppercase">
            Selected Recent Talks
          </h2>
          <ul className="space-y-2">
            {recentTalks.map((talk, i) => (
              <li key={i} className="text-sm text-muted-foreground">{talk}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground/70 italic">
            Additional keynotes, executive workshops, and corporate programs in Turkey, the United States, Europe, and the Middle East.
          </p>
        </FadeIn>
      </section>

      <Separator />

      {/* Video Embed */}
      <section className="py-16">
        <FadeIn>
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/vRsaqlqBVJw"
              title="Speaking Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            More at{" "}
            <Link
              href="https://youtube.com/c/OguzhanAygoren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              youtube.com/c/OguzhanAygoren
            </Link>
          </p>
        </FadeIn>
      </section>

      <Separator />

      {/* CTA */}
      <section className="py-16">
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed">
            For speaking availability, topic customization, format, and logistics:
          </p>
          <Link
            href="/contact?subject=Speaking"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            <ArrowRight className="size-3.5" />
            Submit a speaking inquiry
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
