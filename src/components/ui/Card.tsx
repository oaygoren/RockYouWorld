import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card border border-border p-6",
        hover && "hover:shadow-lg hover:border-accent/30 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
