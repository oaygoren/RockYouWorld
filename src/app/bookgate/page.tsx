import { createMetadata } from "@/lib/metadata";
import { bookInfo } from "@/data/bookgate";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { BookOpen } from "lucide-react";

export const metadata = createMetadata(
  "BookGate",
  "The Innovation Bridge - Bridging academia and industry with actionable insights for founders, leaders, and educators."
);

export default function BookGatePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 bg-muted">
        <SectionHeading title="BookGate" subtitle={bookInfo.title} />
      </section>

      {/* Book Info */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Book Cover Placeholder */}
          <div className="rounded-2xl bg-card border border-border aspect-[3/4] flex flex-col items-center justify-center gap-4 p-8">
            <BookOpen className="w-16 h-16 text-foreground/30" />
            <p className="text-foreground/40 text-center text-lg font-medium">
              {bookInfo.title}
            </p>
          </div>

          {/* Book Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-foreground">
              {bookInfo.title}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mt-4">
              {bookInfo.description}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">
                Sign Up for Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      {bookInfo.chapters && bookInfo.chapters.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeading title="What's Inside" />
          <div className="mt-8 space-y-4">
            {bookInfo.chapters.map((chapter, index) => (
              <FadeIn key={index} delay={index * 80}>
                <Card className="flex items-start gap-4">
                  <span className="text-accent font-bold text-lg min-w-[2rem] text-right">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground">{chapter}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
