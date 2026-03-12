import { Role, Education, SocialLink } from "@/types";

export const profile = {
  name: "Oguzhan Aygoren",
  title: "Scholar, entrepreneur, and advisor",
  tagline: "Working at the intersection of innovation, venture capital, and enterprise strategy",
  email: "oguzhan@berkeley.edu",
  bio: [
    "Oguzhan Aygoren is Director of the Institute for Business Innovation at UC Berkeley's Haas School of Business, Visiting Professor at NYU Stern, and a Faculty Innovation Fellow at Stanford's d.school. His work focuses on how organizations — startups and large enterprises alike — create, adopt, and scale innovation.",
    "Before academia, he worked at Procter & Gamble as an innovation leader, served as Founding Country Manager of Kindo (backed by Index Ventures, with Reid Hoffman on the board, acquired within a year), and co-founded Cepkod — the first commercial use of QR codes in Turkey, in partnership with Turkcell and Microsoft. He is currently co-founder of Dotshub and a venture partner at 212 VC and Startupfon.",
    "He has delivered executive education and advisory work for organizations including Şişecam, Pegasus, İş Bankası, Pfizer, SOCAR, Toyota, L'Oreal, Türk Telekom, Garanti BBVA, Johnson & Johnson, Visa, Google, Meta, and the Abu Dhabi Department of Culture and Tourism. He hosts Valley Meetups on CNBC-e and previously hosted approximately 200 episodes on Bloomberg HT.",
  ],
};

export const affiliations = [
  "UC Berkeley Haas",
  "Stanford d.school",
  "NYU Stern",
  "CNBC-e",
  "Bloomberg HT",
  "212 VC",
];

export const recentItems = [
  { text: "Keynote — AI Impact Hackathon, U.S. Department of State", location: "Washington D.C.", year: "2026" },
  { text: "Keynote — OzU AI Platform", location: "Istanbul", year: "2026" },
  { text: "Keynote — SF AI for Good Summit", location: "San Francisco", year: "2025" },
  { text: "Keynote — Glass Conference", location: "Venice", year: "2025" },
  { text: "Valley Meetups, CNBC-e — weekly", location: "", year: "ongoing" },
];

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
    field: "Electrical and Electronics Engineering",
    institution: "Middle East Technical University (METU)",
    year: "2002",
  },
  {
    degree: "MBA",
    field: "Business Administration",
    institution: "Koç University (Full Scholarship) and London Business School",
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
    platform: "YouTube",
    url: "https://youtube.com/c/OguzhanAygoren",
    icon: "youtube",
  },
  {
    platform: "Google Scholar",
    url: "https://scholar.google.com.tr/citations?user=AbBGR8YAAAAJ",
    icon: "google-scholar",
  },
];
