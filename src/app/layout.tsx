import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prof. Dr. Oğuzhan Aygören",
    template: "%s | Prof. Dr. Oğuzhan Aygören",
  },
  description:
    "Innovation strategist, researcher & educator. Director at UC Berkeley Haas Institute for Business Innovation. Faculty Innovation Fellow at Stanford University.",
  metadataBase: new URL("https://oguzhanaygoren.com"),
  openGraph: {
    title: "Prof. Dr. Oğuzhan Aygören",
    description:
      "Innovation strategist, researcher & educator. Bridging academia, startups, and corporate innovation.",
    url: "https://oguzhanaygoren.com",
    siteName: "Prof. Dr. Oğuzhan Aygören",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Prof. Dr. Oğuzhan Aygören",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Dr. Oğuzhan Aygören",
    description:
      "Innovation strategist, researcher & educator. Bridging academia, startups, and corporate innovation.",
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
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} antialiased`}>
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
