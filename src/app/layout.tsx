import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Oguzhan Aygoren",
    template: "%s | Oguzhan Aygoren",
  },
  description:
    "Scholar, entrepreneur, and advisor working at the intersection of innovation, venture capital, and enterprise strategy.",
  metadataBase: new URL("https://oguzhanaygoren.com"),
  openGraph: {
    title: "Oguzhan Aygoren",
    description:
      "Scholar, entrepreneur, and advisor working at the intersection of innovation, venture capital, and enterprise strategy.",
    url: "https://oguzhanaygoren.com",
    siteName: "Oguzhan Aygoren",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Oguzhan Aygoren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oguzhan Aygoren",
    description:
      "Scholar, entrepreneur, and advisor working at the intersection of innovation, venture capital, and enterprise strategy.",
    creator: "@oguzhan",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
