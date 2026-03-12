import Image from "next/image";
import { profile, currentRoles, education } from "@/data/profile";
import { createMetadata } from "@/lib/metadata";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "About",
  "Learn about the journey from engineering to innovation strategy, research, and education."
);

const advisoryOrgs = [
  "Endeavor",
  "Global Entrepreneurship Network (GEN)",
];

const mentoringOrgs = [
  "Starter's Hub",
  "Mentor Effect",
  "Workup",
  "DreamBigg",
];

export default function AboutPage() {
  const bioParagraphs = profile.bio.split("\n\n");

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-muted py-20">
        <SectionHeading
          title="About Me"
          subtitle="A journey from engineering to innovation"
        />
      </section>

      {/* Bio Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <FadeIn>
          <div className="mb-10 flex justify-center md:float-left md:mb-0 md:mr-8">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/headshot-otwo.jpg"
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
            {bioParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="clear-both" />
        </FadeIn>
      </section>

      {/* Education Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading title="Education" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <FadeIn key={edu.degree + edu.institution} delay={i * 100}>
              <Card>
                <p className="text-sm font-medium text-accent">{edu.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="mt-1 text-foreground/60">{edu.institution}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Current Roles Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading title="Current Roles" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {currentRoles.map((role, i) => (
            <FadeIn key={role.title + role.organization} delay={i * 100}>
              <Card>
                <h3 className="text-lg font-semibold text-foreground">
                  {role.title}
                </h3>
                <p className="mt-1 text-accent">{role.organization}</p>
                {role.affiliation && (
                  <p className="mt-1 text-sm text-foreground/60">
                    {role.affiliation}
                  </p>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Advisory & Mentoring Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading title="Advisory & Mentoring" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FadeIn>
            <Card>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Advisory Boards
              </h3>
              <p className="text-foreground/70">
                Serving on the advisory boards of leading entrepreneurship
                organizations, supporting high-impact entrepreneurs worldwide.
              </p>
              <ul className="mt-4 space-y-2">
                {advisoryOrgs.map((org) => (
                  <li
                    key={org}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {org}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
          <FadeIn delay={100}>
            <Card>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Mentoring
              </h3>
              <p className="text-foreground/70">
                Actively mentoring the next generation of entrepreneurs and
                innovators through leading programs.
              </p>
              <ul className="mt-4 space-y-2">
                {mentoringOrgs.map((org) => (
                  <li
                    key={org}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {org}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
