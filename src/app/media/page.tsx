import { createMetadata } from "@/lib/metadata";
import { mediaItems } from "@/data/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Play, ExternalLink } from "lucide-react";

export const metadata = createMetadata(
  "Media",
  "TV appearances, interviews, and press coverage featuring Prof. Dr. Oguzhan Aygoren."
);

export default function MediaPage() {
  const featuredItem = mediaItems.find((item) => item.videoId);

  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 bg-muted">
        <SectionHeading
          title="Media"
          subtitle="Nearly 200 episodes of Girişimcilik Dünyası on BloombergHT and more"
        />
      </section>

      {/* Featured Video */}
      {featuredItem && featuredItem.videoId && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeading title="Featured" />
          <div className="mt-8 aspect-video rounded-2xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${featuredItem.videoId}`}
              title={featuredItem.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mt-6">
            {featuredItem.title}
          </h3>
          <p className="text-foreground/70 mt-2">{featuredItem.description}</p>
        </section>
      )}

      {/* All Media */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading title="All Appearances" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card className="flex flex-col h-full">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs uppercase tracking-wide self-start">
                  {item.type}
                </span>
                <h3 className="font-semibold text-foreground mt-3">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm mt-1">
                  {item.source} &middot; {item.date}
                </p>
                {item.description && (
                  <p className="text-foreground/70 mt-3 text-sm flex-1">
                    {item.description}
                  </p>
                )}
                <div className="mt-4 flex gap-4">
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent flex items-center gap-1 text-sm hover:underline"
                    >
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {item.videoId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${item.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent flex items-center gap-1 text-sm hover:underline"
                    >
                      Watch <Play className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
