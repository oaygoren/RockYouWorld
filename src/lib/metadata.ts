import { Metadata } from "next";

const baseUrl = "https://oguzhanaygoren.com";

export function createMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Prof. Dr. Oguzhan Aygoren`,
      description,
      url: baseUrl,
      siteName: "Prof. Dr. Oguzhan Aygoren",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: "Prof. Dr. Oguzhan Aygoren",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Prof. Dr. Oguzhan Aygoren`,
      description,
      creator: "@oguzhan",
    },
  };
}
