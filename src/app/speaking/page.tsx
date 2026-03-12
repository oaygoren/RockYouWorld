import { createMetadata } from "@/lib/metadata";
import { speakingEvents } from "@/data/speaking";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata(
  "Speaking",
  "Keynote talks on entrepreneurship, innovation, and leadership at global conferences and events."
);

export default function SpeakingPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 bg-muted">
        <SectionHeading
          title="Speaking"
          subtitle="Inspiring audiences on entrepreneurship, innovation, and the future of business"
        />
      </section>

      {/* Speaking Events */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speakingEvents.map((event, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                  {event.event}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-3">
                  {event.title}
                </h3>
                <p className="text-foreground/60 mt-2">
                  {event.location} &middot; {event.date}
                </p>
                {event.description && (
                  <p className="text-foreground/70 mt-3">{event.description}</p>
                )}
                {event.videoUrl && (
                  <a
                    href={event.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-accent underline"
                  >
                    Watch Video
                  </a>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted text-center">
        <h2 className="text-3xl font-bold text-foreground">
          Interested in Having Me Speak?
        </h2>
        <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
          I speak on topics including entrepreneurship, innovation ecosystems,
          startup building, corporate innovation, and the future of business
          education. Available for keynotes, panels, and workshops worldwide.
        </p>
        <div className="mt-8">
          <Button variant="primary" size="lg" href="/contact">
            Book a Speaking Engagement
          </Button>
        </div>
      </section>
    </>
  );
}
