import Link from "next/link";
import { Linkedin, Twitter, Instagram, GraduationCap, BookOpen, PenLine } from "lucide-react";
import { socialLinks } from "@/data/profile";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  "google-scholar": <GraduationCap className="h-5 w-5" />,
  researchgate: <BookOpen className="h-5 w-5" />,
  medium: <PenLine className="h-5 w-5" />,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-foreground/50">
          &copy; 2026 Prof. Dr. O&#287;uzhan Ayg&ouml;ren. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-foreground/40 transition-colors hover:text-accent"
            >
              {iconMap[link.icon] ?? null}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
