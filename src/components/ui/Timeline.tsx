import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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
    <div className={cn("relative space-y-8 pl-8", className)}>
      <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
      {items.map((item, index) => (
        <div key={index} className="relative">
          <span className="absolute -left-[21px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background" />
          <Badge variant="secondary" className="mb-2 text-xs font-medium">
            {item.year}
          </Badge>
          <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm font-medium text-accent">{item.organization}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
