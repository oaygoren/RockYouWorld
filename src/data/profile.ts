import { Role, Education, SocialLink } from "@/types";

export const profile = {
  name: "Prof. Dr. Oguzhan Aygoren",
  title: "Innovation Strategist, Researcher & Educator",
  tagline: "Bridging academia, startups, and corporate innovation",
  email: "contact@oguzhanaygoren.com",
  bio: `Prof. Dr. Oguzhan Aygoren is an innovation strategist, researcher, and educator whose career uniquely bridges the worlds of academia, startups, and corporate innovation. His journey began with a degree in Electrical Engineering from Middle East Technical University (METU), where he developed the analytical rigor that would underpin his multidisciplinary career.

He went on to earn his MBA through a joint program at Koc University and London Business School, gaining a global perspective on business strategy and management. After graduating, he joined Procter & Gamble as an innovation leader, where he honed his skills in new product development and go-to-market strategy at one of the world's most admired consumer goods companies.

Driven by the entrepreneurial spirit, Oguzhan left the corporate world to co-found three startups. Most notably, he co-founded Kindo, a technology venture that was successfully acquired by MyHeritage in 2008. These hands-on experiences in building, scaling, and exiting ventures gave him a practitioner's understanding of the startup ecosystem that few academics possess.

Seeking to deepen his scholarly contributions, he pursued a PhD in Marketing at Bogazici University, one of Turkey's most prestigious institutions. Upon completing his doctorate in 2013, he joined the Bogazici faculty as a Professor of Marketing and Entrepreneurship. There, he founded the Bright Center for Entrepreneurship, establishing it as a leading hub for entrepreneurial education and ecosystem development in Turkey.

His work as host and producer of "Girisimcilik Dunyasi" (Entrepreneurship World) on BloombergHT brought the stories of nearly 200 entrepreneurs and innovators to a national audience over approximately 200 episodes, making him one of Turkey's most recognized voices in the entrepreneurship space.

As a visiting scholar at UC Berkeley in 2014 and visiting researcher at Stanford University in 2016, Oguzhan deepened his ties with Silicon Valley's innovation ecosystem. These relationships evolved into permanent roles: he currently serves as Director at the UC Berkeley Haas Institute for Business Innovation and as a Faculty Innovation Fellow at Stanford University.

In the investment world, Oguzhan is a Venture Partner at 212 VC, one of Turkey's leading venture capital firms, and co-founder of Otwo Ventures, through which he backs early-stage companies at the intersection of technology and impact.

He also founded The X Way, an innovation consulting practice that helps corporations build sustainable innovation capabilities, and previously co-founded Dotshub. His advisory contributions extend to organizations such as Endeavor and the Global Entrepreneurship Network (GEN), where he supports high-impact entrepreneurs worldwide.`,
};

export const currentRoles: Role[] = [
  {
    title: "Director",
    organization: "Institute for Business Innovation",
    affiliation: "UC Berkeley Haas School of Business",
  },
  {
    title: "Faculty Innovation Fellow",
    organization: "Stanford University",
  },
  {
    title: "Venture Partner",
    organization: "212 VC",
  },
  {
    title: "Co-Founder",
    organization: "Otwo Ventures",
  },
];

export const education: Education[] = [
  {
    degree: "B.Sc.",
    field: "Electrical Engineering",
    institution: "Middle East Technical University (METU)",
    year: "2002",
  },
  {
    degree: "MBA",
    field: "Business Administration",
    institution: "Koc University & London Business School",
    year: "2004",
  },
  {
    degree: "Ph.D.",
    field: "Marketing",
    institution: "Bogazici University",
    year: "2013",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/oguzhanaygoren",
    icon: "linkedin",
  },
  {
    platform: "X (Twitter)",
    url: "https://x.com/oguzhan",
    icon: "twitter",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/oaygoren",
    icon: "instagram",
  },
  {
    platform: "Google Scholar",
    url: "https://scholar.google.com/citations?user=AbBGR8YAAAAJ",
    icon: "google-scholar",
  },
  {
    platform: "ResearchGate",
    url: "https://researchgate.net/profile/Oguzhan-Aygoren",
    icon: "researchgate",
  },
  {
    platform: "Medium",
    url: "https://oguzhan.medium.com",
    icon: "medium",
  },
];
