import { createMetadata } from "@/lib/metadata";
import { experiences } from "@/data/work";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";

export const metadata = createMetadata(
  "Work",
  "Professional experience spanning academia, startups, and corporate innovation at UC Berkeley, Stanford, Bogazici University, and beyond."
);

export default function WorkPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 bg-muted">
        <SectionHeading
          title="Work Experience"
          subtitle="A career bridging academia, startups, and corporate innovation"
        />
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <FadeIn>
          <Timeline items={experiences} />
        </FadeIn>
      </section>

      {/* Advisory Roles Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <SectionHeading
          title="Advisory & Board Roles"
          subtitle="Contributing to global entrepreneurship networks and mentoring the next generation"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <FadeIn delay={0}>
            <Card>
              <h3 className="text-lg font-semibold text-foreground">
                Endeavor Advisory Board
              </h3>
              <p className="text-accent text-sm mt-1">2015 - Present</p>
              <p className="text-foreground/70 mt-3">
                Serving on the advisory board of Endeavor, the leading global
                organization supporting high-impact entrepreneurs in emerging
                and growth markets.
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={100}>
            <Card>
              <h3 className="text-lg font-semibold text-foreground">
                GEN - Global Entrepreneurship Network
              </h3>
              <p className="text-accent text-sm mt-1">2021 - Present</p>
              <p className="text-foreground/70 mt-3">
                Contributing to the Global Entrepreneurship Network, a platform
                that fosters collaboration among entrepreneurs, investors,
                policymakers, and researchers across 200+ countries.
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={200}>
            <Card className="md:col-span-2">
              <h3 className="text-lg font-semibold text-foreground">
                Mentoring & Ecosystem Building
              </h3>
              <p className="text-foreground/70 mt-3">
                Actively mentoring founders and early-stage startups across
                multiple ecosystems, from Silicon Valley to Istanbul. Dedicated
                to helping entrepreneurs navigate the challenges of building
                impactful ventures through hands-on guidance and strategic
                advice.
              </p>
            </Card>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
