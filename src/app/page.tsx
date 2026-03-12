import Image from "next/image";
import { profile } from "@/data/profile";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Home",
  "Innovation strategist, researcher & educator bridging academia, startups, and corporate innovation."
);

const highlights = [
  {
    icon: "🎓",
    title: "Berkeley Director",
    description: "Institute for Business Innovation, UC Berkeley Haas",
  },
  {
    icon: "💡",
    title: "Stanford Fellow",
    description: "Faculty Innovation Fellow",
  },
  {
    icon: "🎙️",
    title: "200+ Episodes",
    description: "BloombergHT Girisimcilik Dunyasi",
  },
  {
    icon: "🚀",
    title: "Venture Partner",
    description: "212 VC & Otwo Ventures",
  },
];

export default function Home() {
  const bioSentences = profile.bio.split(". ").slice(0, 3).join(". ") + ".";

  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
        <FadeIn>
          <span className="mb-6 inline-block rounded-full bg-muted px-4 py-1.5 text-sm text-foreground/60">
            Welcome
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl font-bold text-foreground md:text-6xl">
            {profile.name}
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-4 text-xl text-foreground/70 md:text-2xl">
            {profile.title}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-2 text-lg text-foreground/50">{profile.tagline}</p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/research">
              Explore My Research
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Get in Touch
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* Highlights Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading title="What I Do" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <Card className="text-center">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-foreground/60">
                  {item.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Brief About Section */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                About Me
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                {bioSentences}
              </p>
              <div className="mt-6">
                <Button variant="outline" href="/about">
                  Read More About Me
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/headshot-otwo.jpg"
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
