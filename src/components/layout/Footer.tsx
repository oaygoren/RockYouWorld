import Link from "next/link";

const footerLinks = [
  { label: "LinkedIn", url: "https://linkedin.com/in/oguzhanaygoren" },
  { label: "X", url: "https://x.com/oguzhan" },
  { label: "Instagram", url: "https://instagram.com/oaygoren" },
  { label: "YouTube", url: "https://youtube.com/c/OguzhanAygoren" },
  { label: "Google Scholar", url: "https://scholar.google.com.tr/citations?user=AbBGR8YAAAAJ" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[#0D0D0D] text-[#EEEEEE]">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            href="mailto:oguzhan@berkeley.edu"
            className="text-sm text-[#EEEEEE]/80 transition-colors hover:text-[#C8A96E]"
          >
            oguzhan@berkeley.edu
          </Link>
          <div className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#EEEEEE]/70 transition-colors hover:text-[#C8A96E]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
