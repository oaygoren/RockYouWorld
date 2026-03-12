import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Lightbulb, Rocket, Mic, Users } from "lucide-react";

export const metadata = createMetadata(
  "Services",
  "Innovation consulting, startup advisory, and corporate workshops to help organizations innovate and grow."
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  lightbulb: Lightbulb,
  rocket: Rocket,
  microphone: Mic,
  users: Users,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 bg-muted">
        <SectionHeading
          title="Services"
          subtitle="Helping organizations innovate and grow"
        />
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={index} delay={index * 100}>
                <Card className="flex flex-col h-full">
                  {Icon && <Icon className="w-10 h-10 text-accent" />}
                  <h3 className="text-xl font-semibold text-foreground mt-4">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mt-2 flex-1">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Button variant="outline" href="/contact">
                      Let&apos;s Talk
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted text-center">
        <h2 className="text-3xl font-bold text-foreground">
          Ready to Innovate?
        </h2>
        <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
          Whether you need help building innovation capabilities, scaling your
          startup, or inspiring your team, let&apos;s work together to turn your
          vision into reality.
        </p>
        <div className="mt-8">
          <Button variant="primary" size="lg" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
