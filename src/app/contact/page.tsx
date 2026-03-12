import { createMetadata } from "@/lib/metadata";
import { profile, socialLinks } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, MapPin, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react";

export const metadata = createMetadata(
  "Contact",
  "Get in touch for speaking, consulting, or collaboration opportunities."
);

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 bg-muted">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect and create something meaningful"
        />
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <Card>
              <h2 className="text-xl font-semibold text-foreground">
                Get in Touch
              </h2>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span>{profile.email}</span>
                </a>

                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Berkeley, California</span>
                </div>
              </div>

              <hr className="border-border my-6" />

              <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                Social
              </h3>
              <div className="mt-4 space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = socialIconMap[link.icon] || ExternalLink;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.platform}</span>
                    </a>
                  );
                })}
              </div>
            </Card>

            <p className="mt-6 text-sm text-foreground/50">
              I typically respond within 2-3 business days. For urgent matters,
              please reach out via LinkedIn.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
