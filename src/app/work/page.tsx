import { createMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata(
  "Work",
  "Professional record spanning research, academia, advisory, investing, building ventures, and media."
);

const sections = [
  {
    label: "Research & Academia",
    items: [
      "Director, Institute for Business Innovation · UC Berkeley Haas School of Business · 2024–present",
      "Visiting Professor, Marketing Department · NYU Stern School of Business · 2022–2023",
      "Faculty Innovation Fellow · Stanford University d.school · 2017–present",
      "Visiting Research Scholar · UC Berkeley, Political Science & Haas · 2014–2015",
      "Open Innovation Research Group · Garwood Center for Corporate Innovation, UC Berkeley · 2014–present",
      "Assistant Professor of Marketing, Entrepreneurship and Innovation · Bogazici University · 2015–2024",
      "Assistant Professor · Istanbul Technical University · 2013–2015",
    ],
    note: "Research focus: startup behavior, open innovation, AI for business innovation, design and creativity, corporate venturing, how new ventures create value.",
    education:
      "Education: Ph.D., Marketing, Bogazici University · MBA, Koç University (Full Scholarship) and London Business School · B.S., Electrical and Electronics Engineering, Middle East Technical University (METU)",
  },
  {
    label: "Advisory & Investing",
    items: [
      "Venture Partner · 212 VC and Startupfon Venture Capital Fund · 2021–present",
      "212 VC: first VC fund in Turkey, exits include Insider and Iyzico. Startupfon: 13 companies including Colendi, Kunduz, Scoutium, Atlas Space.",
      "Angel Investor & Co-founder · Otwo Ventures · portfolio: Finfree, Saparda, Chex, Finrix, Modaloop, Carex",
      "Mentor & Advisor · Berkeley SkyDeck, Alchemist Accelerator, Techstars Türkiye, BridgeX Ventures, Entrapeer, StartersHub",
      "Jury Member · Singapore Management University Lee Kuan Yew Global Business Plan Competition",
    ],
    note: "Executive education and advisory clients include: Toyota, Pfizer, Johnson & Johnson, L'Oreal, SOCAR, ING Bank, İş Bank, Garanti BBVA, Anadolu Bank, Türk Telekom, Vestel, Şişecam, Pegasus, Terna, Abu Dhabi Department of Culture and Tourism, Visa, Google, Meta, Red Bull, and others.",
  },
  {
    label: "Building",
    items: [
      "Co-founder · Dotshub — a global social space for entrepreneurs, innovators, and changemakers · 2024–present",
      "Founder · Bright Center for Entrepreneurship, Bogazici University — the university's main entrepreneurial hub · 2015–2023",
      "Founder & CEO · Cepkod — first commercial use of QR codes in Turkey, in partnership with Turkcell and Microsoft · 2008–2010",
      "Founding Country Manager · Kindo / MyHeritage — backed by Index Ventures; Reid Hoffman on the board; acquired within one year · 2007–2009",
      "Innovation Leader · Procter & Gamble · 2004–2007",
    ],
    note: "Organized Coronathon Türkiye during the COVID-19 pandemic — a national innovation initiative convening startups, researchers, and corporations.",
  },
  {
    label: "Media",
    items: [
      "Host & Producer · Valley Meetups, CNBC-e — weekly program on Silicon Valley's startup and venture ecosystem · 2025–present",
      "Host & Producer · Girişimcilik Dünyası, Bloomberg HT — approximately 200 episodes · 2017–2020",
      "TEDx Speaker",
    ],
    note: "YouTube: youtube.com/c/OguzhanAygoren",
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-12 pt-24">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Work
          </h1>
        </FadeIn>
      </section>

      <section className="pb-24">
        <div className="space-y-16">
          {sections.map((section, i) => (
            <FadeIn key={section.label} delay={i * 80}>
              <div>
                <h2 className="mb-6 text-xs font-medium tracking-[0.12em] text-accent uppercase">
                  {section.label}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-[1.7]">
                      {item}
                    </li>
                  ))}
                </ul>
                {section.note && (
                  <p className="mt-4 text-sm text-muted-foreground/80 italic leading-[1.7]">
                    {section.note}
                  </p>
                )}
                {section.education && (
                  <p className="mt-2 text-sm text-muted-foreground/80 italic leading-[1.7]">
                    {section.education}
                  </p>
                )}
              </div>
              {i < sections.length - 1 && <Separator />}
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
