import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative border-l-2 border-accent/30 pl-8 space-y-10", className)}>
      {items.map((item, index) => (
        <div key={index} className="relative">
          {/* Dot on the line */}
          <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />

          {/* Year badge */}
          <span className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent mb-2">
            {item.year}
          </span>

          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
          <p className="text-sm font-medium text-accent">{item.organization}</p>
          <p className="mt-1 text-sm text-foreground/60 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
