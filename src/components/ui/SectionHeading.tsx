import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl font-bold text-foreground">
        {title}
        <span className="mt-2 block h-1 w-12 mx-auto rounded-full bg-accent" />
      </h2>
      {subtitle && (
        <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
