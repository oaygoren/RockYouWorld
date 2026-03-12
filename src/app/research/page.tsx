import { researchAreas, publications } from "@/data/research";
import { socialLinks } from "@/data/profile";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Research",
  "Publications and research in marketing, entrepreneurship, corporate innovation, and digital transformation."
);

const googleScholarUrl =
  socialLinks.find((l) => l.platform === "Google Scholar")?.url ??
  "https://scholar.google.com/citations?user=AbBGR8YAAAAJ";

export default function ResearchPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-muted py-20">
        <SectionHeading
          title="Research"
          subtitle="Exploring the intersection of marketing, entrepreneurship, and innovation"
        />
      </section>

      {/* Research Areas Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title="Research Areas" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 100}>
              <Card>
                <h3 className="text-lg font-semibold text-accent">
                  {area.title}
                </h3>
                <p className="mt-2 text-foreground/70">{area.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading title="Selected Publications" />
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <FadeIn key={pub.title} delay={i * 100}>
              <Card>
                <h3 className="text-lg font-semibold text-foreground">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  {pub.authors}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-3 py-1 text-sm text-foreground/70">
                    {pub.venue}
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-sm text-foreground/70">
                    {pub.year}
                  </span>
                </div>
                {pub.summary && (
                  <p className="mt-3 text-foreground/70">{pub.summary}</p>
                )}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    Read Paper
                  </a>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Google Scholar Link */}
      <section className="mx-auto max-w-4xl px-6 pb-20 text-center">
        <FadeIn>
          <Button variant="outline" size="lg" href={googleScholarUrl}>
            View All on Google Scholar
          </Button>
        </FadeIn>
      </section>
    </>
  );
}
