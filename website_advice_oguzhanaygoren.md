# Website Advice for oguzhanaygoren.com

> Analysis Date: March 11, 2026
> Site Owner: Prof. Dr. Oğuzhan Aygören

---

## Profile Summary (What I Found)

You are a **Professor of Marketing, Entrepreneurship & Innovation** currently serving as:
- **Director**, Institute for Business Innovation — UC Berkeley Haas Business School
- **Faculty Innovation Fellow** — Stanford University
- **Venture Partner** — 212 VC

**Education:** EE from METU, MBA from Koç University & London Business School, PhD in Marketing from Boğaziçi University.

**Background:** 3 startups founded, former P&G innovation leader, former Visiting Professor at NYU Stern, founder of Bright Center for Entrepreneurship at Boğaziçi, ~200 episodes on BloombergHT, co-founder of Dotshub, founder of The X Way.

**Site Pages:** Home, About, BookGate, Contact, Media, Research, Services, Speaking, Teaching, Work

---

## Critical Issue: Your Site Is Invisible to Search Engines

Your website is built as a **client-side rendered Single Page Application** (on the Base44 platform). When crawlers (Google, LinkedIn preview, or any tool) visit your pages, they see **only a blank page with a tracking script** — no actual content is served in the initial HTML.

### Why This Matters
- **SEO is essentially zero.** Google may index page titles but not your actual content.
- **Social sharing is broken.** When someone shares your link on LinkedIn, Twitter, or WhatsApp, the preview will be blank or generic — no image, no description.
- **Accessibility tools and screen readers** may not be able to parse your content.
- Only 3 of your 10 pages are indexed by Google right now.

### Recommendation
This is the **#1 priority fix.** You have three options:
1. **Switch to a platform with SSR/SSG** (Next.js, Astro, Hugo, Webflow, Squarespace) — best long-term solution
2. **Enable server-side rendering** on your current Base44 setup if possible
3. **At minimum**, add proper `<meta>` tags (title, description, Open Graph, Twitter Card) in the static HTML for each route

---

## Content & Structure Advice

### 1. Homepage — Lead with Your Story, Not Just Your Name
- Your homepage title currently says "Oguzhan Aygoren Bogazici Bloomberg Berkeley" — this reads like keyword stuffing.
- **Recommendation:** Use a clear, human headline like *"Prof. Dr. Oğuzhan Aygören — Innovation Strategist, Researcher & Educator"* followed by a 2-3 sentence value proposition.
- Add a professional headshot and a clear call-to-action (e.g., "Book a Speaking Engagement" or "Explore My Research").

### 2. About Page — Tell a Narrative
- You have an extraordinary arc: Engineer → Startup Founder → P&G → Academia → Berkeley/Stanford.
- **Recommendation:** Structure this as a narrative journey, not a list. Show the *thread* connecting your transitions. This is your differentiator — very few people bridge corporate innovation, startups, and academia.

### 3. Research Page — Make It Accessible
- Your research spans marketing, entrepreneurship, political consumer behavior, and new product development.
- **Recommendation:**
  - Group publications by theme (not just chronologically)
  - Add plain-language summaries (1-2 sentences) for each paper — academics and non-academics both visit your site
  - Link to Google Scholar profile and full-text PDFs where available
  - Highlight citation counts for key papers

### 4. Speaking Page — Add Social Proof
- **Recommendation:**
  - List past events with logos (BloombergHT, conferences, etc.)
  - Include 1-2 testimonial quotes from event organizers
  - Add a clear "Book Me" CTA with a form or email
  - Embed 1-2 video clips of past talks

### 5. Teaching Page — Showcase Impact
- **Recommendation:**
  - List courses with brief descriptions and what students gain
  - Include student testimonials or course ratings if available
  - Mention Stanford & Berkeley course affiliations prominently

### 6. Services / The X Way — Clarify the Offering
- **Recommendation:**
  - Be explicit about what you offer: consulting, advisory boards, corporate workshops?
  - List 2-3 case studies or client logos
  - Include pricing tiers or a "Let's Talk" CTA
  - Differentiate from your academic work

### 7. BookGate — Needs Context
- The page name "BookGate" is unclear. Is this a book you wrote? A book club? A reading list?
- **Recommendation:** Rename to something self-explanatory (e.g., "My Book", "Reading List", or "Publications") and add a clear description.

### 8. Media Page — Leverage Your 200 Episodes
- You produced ~200 BloombergHT episodes — that's a massive content library.
- **Recommendation:**
  - Feature top 5-10 episodes with embedded video/audio
  - Organize by theme or guest category
  - Add press mentions and article links
  - This could be your most trafficked page if done right

### 9. Work Page — Show the Portfolio
- **Recommendation:**
  - Highlight key roles: Berkeley, Stanford, Boğaziçi, 212 VC, Endeavor, GEN
  - Use a timeline or card layout
  - For each role, show 1-2 concrete outcomes/achievements

### 10. Contact Page — Lower the Barrier
- **Recommendation:**
  - Include direct email (even if also using a form)
  - Add links to LinkedIn, Twitter/X, Google Scholar, Medium
  - Consider a Calendly link for speaking/consulting inquiries

---

## Technical Recommendations

| Issue | Priority | Action |
|-------|----------|--------|
| No server-side rendering | 🔴 Critical | Migrate to SSR/SSG platform or add pre-rendering |
| Missing Open Graph meta tags | 🔴 Critical | Add OG title, description, image for every page |
| No favicon or branding visible | 🟡 Medium | Add a professional favicon and consistent branding |
| Analytics only (Base44 tracker) | 🟡 Medium | Add Google Analytics 4 or Plausible for proper insights |
| No sitemap in Google Search Console | 🟡 Medium | Submit sitemap.xml to Google Search Console |
| No SSL certificate issues noticed | 🟢 Good | HTTPS is working correctly |
| Mobile responsiveness unknown | 🟡 Medium | Test and verify responsive design on all breakpoints |

---

## SEO Quick Wins

1. **Page titles:** Each page should have a unique, descriptive `<title>` tag (currently generic)
2. **Meta descriptions:** Write 150-160 character descriptions for each page
3. **Structured data:** Add Schema.org `Person` markup with your credentials
4. **Internal linking:** Cross-link between pages (e.g., Research → Speaking → Teaching)
5. **Alt text:** Add descriptive alt text to all images
6. **URL structure:** Your current URLs (/About, /Research) are clean — keep them

---

## Strategic Advice

### Position Yourself as a Bridge
You sit at a rare intersection: **academia + startups + corporate innovation + media**. Very few people globally have this combination. Your website should make this crystal clear within 5 seconds of landing.

### Content Strategy
- **Start a newsletter** or revive your Medium blog — you have deep expertise and a storytelling background from BloombergHT
- **Repurpose your 200 TV episodes** into short clips, blog posts, and social content
- **Write thought leadership pieces** connecting your research to practical startup/corporate innovation advice

### Build an Email List
- Your BookGate page could be a lead magnet — offer a free chapter, reading list, or research summary in exchange for email signups
- This gives you a direct channel to your audience independent of social platforms

### Consolidate Your Digital Presence
- Ensure LinkedIn, Google Scholar, ResearchGate, Medium, and your website all tell a consistent story and cross-link to each other
- Your LinkedIn tagline and website headline should match

---

## Summary: Top 5 Actions (Priority Order)

1. **Fix the rendering issue** — Move to a platform that serves real HTML (this alone will 10x your visibility)
2. **Add Open Graph meta tags** — So your links look professional when shared
3. **Rewrite your homepage** — Clear headline, photo, value prop, and CTA
4. **Leverage your BloombergHT content** — Embed top episodes on your Media page
5. **Add Schema.org structured data** — Help Google understand who you are

---

*Generated by analyzing oguzhanaygoren.com structure, sitemap, and publicly available professional information.*

Sources:
- [oguzhanaygoren.com](https://www.oguzhanaygoren.com/)
- [212 VC Profile](https://212.vc/people/oguzhan-aygoren-3/)
- [Boğaziçi University Profile](https://intt.bogazici.edu.tr/en/people/oguzhan-aygoren)
- [Google Scholar](https://scholar.google.com/citations?user=AbBGR8YAAAAJ&hl=en)
- [ResearchGate](https://www.researchgate.net/profile/Oguzhan-Aygoren)
- [University Innovation Fellows](https://universityinnovation.org/wiki/Faculty_Champion:O%C4%9Fuzhan_Ayg%C3%B6ren)
