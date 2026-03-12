# Build Plan: oguzhanaygoren.com (Next.js Rebuild)

## Context
Rebuilding oguzhanaygoren.com from a Base44 client-side SPA to a Next.js static site with SSR/SSG, dark/light theme, proper SEO, and all original pages.

## Assets Collected
### Images Downloaded
- `public/images/headshot-keynote.png` — Profile photo from Keynote Speakers Agency
- `public/images/headshot-otwo.jpg` — Profile photo from Otwo Ventures (Wix)
- `public/images/speaking-bilmed.jpg` — Speaking event photo from Bilmed Networking

### YouTube / Video Links Found
- BloombergHT Girişimcilik Dünyası episode: `https://www.youtube.com/watch?v=vRsaqlqBVJw`
- TEDxAnkara talk (link to be added when available)
- BloombergHT program page: `https://www.bloomberght.com/tv/program/girisimcilik-dunyasi`

### Social Links
- LinkedIn: `https://www.linkedin.com/in/oguzhanaygoren/`
- Twitter/X: `https://x.com/oguzhan`
- Instagram: `https://www.instagram.com/oaygoren/`
- Google Scholar: `https://scholar.google.com/citations?user=AbBGR8YAAAAJ`
- ResearchGate: `https://www.researchgate.net/profile/Oguzhan-Aygoren`
- Medium: `https://oguzhan.medium.com/`
- Academia.edu: `https://boun.academia.edu/OguzhanAygoren`

---

## Step 1: Initialize Next.js Project
- [ ] Run `create-next-app` with TypeScript, Tailwind, App Router, src dir
- [ ] Install deps: `next-themes`, `lucide-react`, `clsx`
- [ ] Clean up boilerplate files

**How:** Use `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` then `npm install next-themes lucide-react clsx`. Remove default page content and styles.

---

## Step 2: Configure Theme & Styling
- [ ] Set up `globals.css` with CSS custom properties for light/dark
- [ ] Configure `tailwind.config.ts` with custom colors, fonts, `darkMode: 'class'`
- [ ] Set up Inter font via `next/font/google`

**How:** Define CSS variables for `--background`, `--foreground`, `--accent`, `--muted`, `--border` in both `:root` and `.dark` selectors. Configure Tailwind to use these. Import Inter in root layout.

---

## Step 3: Build Root Layout & Core Components
- [ ] Create root `layout.tsx` with ThemeProvider, fonts, metadata template
- [ ] Build `Navbar.tsx` with responsive mobile menu, route highlighting, theme toggle
- [ ] Build `Footer.tsx` with social links and copyright
- [ ] Build `ThemeToggle.tsx` with sun/moon icons
- [ ] Build `MobileMenu.tsx` for hamburger menu

**How:** Root layout wraps everything in `next-themes` ThemeProvider with `attribute="class"`. Navbar uses `usePathname()` for active state, flexbox for desktop, slide-out for mobile. Footer is minimal with icon links.

---

## Step 4: Create Reusable UI Components
- [ ] `Button.tsx` — variant-based button (primary, secondary, outline)
- [ ] `Card.tsx` — content card with hover effects
- [ ] `SectionHeading.tsx` — consistent section titles
- [ ] `Timeline.tsx` — vertical timeline for Work page
- [ ] `ContactForm.tsx` — client-side form with validation
- [ ] `FadeIn.tsx` — scroll-based fade-in animation wrapper
- [ ] `JsonLd.tsx` — Schema.org structured data

**How:** All are Tailwind-styled components. Timeline uses left-border design. FadeIn uses IntersectionObserver. JsonLd renders `<script type="application/ld+json">`.

---

## Step 5: Define Types & Data Files
- [ ] `types/index.ts` — interfaces for Publication, Course, Experience, etc.
- [ ] `data/profile.ts` — name, titles, bio, social links, education
- [ ] `data/navigation.ts` — nav links array
- [ ] `data/research.ts` — publications and research areas
- [ ] `data/teaching.ts` — courses array
- [ ] `data/speaking.ts` — speaking events
- [ ] `data/work.ts` — work experience timeline
- [ ] `data/services.ts` — consulting offerings
- [ ] `data/media.ts` — BloombergHT episodes, press, YouTube links
- [ ] `data/bookgate.ts` — book info

**How:** TypeScript objects/arrays with full type safety. All content is hardcoded from the profile info gathered during research. Data files import types and export typed constants.

---

## Step 6: Build All Pages
- [ ] **Home** (`/`) — Hero section, highlight cards, CTAs
- [ ] **About** (`/about`) — Narrative bio, education, advisory roles
- [ ] **Research** (`/research`) — Research areas, publications list
- [ ] **Teaching** (`/teaching`) — Course cards by institution
- [ ] **Speaking** (`/speaking`) — Events grid, "Book Me" CTA
- [ ] **Work** (`/work`) — Career timeline with achievements
- [ ] **Services** (`/services`) — Offering cards with CTAs
- [ ] **Media** (`/media`) — Video embeds, press mentions
- [ ] **BookGate** (`/bookgate`) — Book info and links
- [ ] **Contact** (`/contact`) — Contact form, social links, email

**How:** Each page is a server component (SSG by default). Each exports its own `metadata` object for SEO. Pages import from data files and render using UI components. Media page embeds YouTube iframes.

---

## Step 7: SEO & Meta
- [ ] Add per-page Open Graph metadata via helper function
- [ ] Create `sitemap.ts` for auto-generated sitemap
- [ ] Create `robots.ts` for crawler rules
- [ ] Add Schema.org `Person` JSON-LD in root layout
- [ ] Add `favicon.ico` and `apple-touch-icon.png`

**How:** Create `lib/metadata.ts` helper that generates consistent Metadata objects. `sitemap.ts` and `robots.ts` use Next.js built-in file conventions. JSON-LD component renders Person schema with all profile data.

---

## Step 8: Polish & Verify
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Theme toggle works without flash
- [ ] All pages render correctly
- [ ] `npm run build` succeeds with static generation
- [ ] Lighthouse audit (target 95+)
- [ ] OG tags verified in dev tools

**How:** Run `npm run build` to verify all pages are statically generated. Run `npm run dev` and manually check each page at each breakpoint. Verify meta tags in browser dev tools.
