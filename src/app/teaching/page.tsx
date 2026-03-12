import { createMetadata } from "@/lib/metadata";
import { courses } from "@/data/teaching";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Teaching",
  "Courses in innovation, marketing, and entrepreneurship at UC Berkeley, Bogazici University, and beyond."
);

export default function TeachingPage() {
  const currentCourses = courses.filter((course) => course.current === true);
  const pastCourses = courses.filter((course) => course.current !== true);

  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 bg-muted">
        <SectionHeading
          title="Teaching"
          subtitle="Empowering the next generation of innovators and entrepreneurs"
        />
      </section>

      {/* Current Courses */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading title="Current Courses" />
        <div className="space-y-6">
          {currentCourses.map((course) => (
            <Card key={course.name} className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {course.name}
                  </h3>
                  <p className="text-accent mt-1">{course.institution}</p>
                  <p className="text-foreground/70 mt-3">{course.description}</p>
                </div>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  Current
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Courses */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading title="Previous Courses" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastCourses.map((course, index) => (
            <FadeIn key={course.name} delay={index * 100}>
              <Card>
                <h3 className="text-xl font-semibold text-foreground">
                  {course.name}
                </h3>
                <p className="text-accent mt-1">{course.institution}</p>
                <p className="text-foreground/70 mt-3">{course.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
