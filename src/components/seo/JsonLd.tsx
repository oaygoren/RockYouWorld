import { profile, socialLinks, education } from "@/data/profile";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.tagline,
    url: "https://oguzhanaygoren.com",
    affiliation: [
      {
        "@type": "Organization",
        name: "UC Berkeley Haas School of Business",
      },
      {
        "@type": "Organization",
        name: "Stanford University",
      },
    ],
    alumniOf: education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
    sameAs: socialLinks.map((link) => link.url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
