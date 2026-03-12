# TODO: oguzhanaygoren.com Build Progress

## Step 1: Initialize Next.js Project
- [x] Run create-next-app with TypeScript, Tailwind, App Router — Used create-next-app@latest with --typescript --tailwind --eslint --app --src-dir flags
- [x] Install dependencies (next-themes, lucide-react, clsx) — npm install next-themes lucide-react clsx
- [x] Clean up boilerplate files — Created all subdirectories under src/

## Step 2: Configure Theme & Styling
- [x] Set up globals.css with light/dark CSS custom properties — CSS vars for 8 color tokens in :root and .dark, mapped via @theme inline
- [x] Configure Tailwind v4 (custom colors via @theme inline in globals.css) — No tailwind.config.ts needed in v4, all via CSS
- [x] Set up Inter font via next/font/google — Loaded in root layout.tsx with --font-inter CSS variable

## Step 3: Build Root Layout & Core Components
- [x] Root layout.tsx with ThemeProvider, fonts, metadata — Wraps app in next-themes ThemeProvider, Inter font, title template
- [x] Navbar.tsx (responsive, route highlighting, theme toggle) — Sticky navbar with backdrop blur, mobile slide-out menu, usePathname for active state
- [x] Footer.tsx (social links, copyright) — Social icon links (LinkedIn, X, Instagram, Scholar, ResearchGate, Medium)
- [x] ThemeToggle.tsx (sun/moon toggle) — Client component with mounted state, rotation transition
- [x] MobileMenu.tsx (integrated into Navbar) — Slide-over panel with all nav links

## Step 4: Create Reusable UI Components
- [x] Button.tsx (primary, secondary, outline variants) — Polymorphic: renders as Link when href provided
- [x] Card.tsx (hover effects) — Optional hover shadow + accent border glow
- [x] SectionHeading.tsx (consistent section titles) — Centered with accent underline bar
- [x] Timeline.tsx (vertical timeline for Work page) — Left border design with dot markers
- [x] ContactForm.tsx (client-side validation) — Name/email/subject/message with loading state
- [x] FadeIn.tsx (scroll-based animation) — IntersectionObserver, opacity + translateY transition
- [x] JsonLd.tsx (Schema.org structured data) — Person schema with affiliations and sameAs

## Step 5: Define Types & Data Files
- [x] types/index.ts — 13 interfaces (NavLink, SocialLink, Role, Education, Publication, etc.)
- [x] data/profile.ts — Full bio, 4 roles, 3 education entries, 6 social links
- [x] data/navigation.ts — 10 nav links for all pages
- [x] data/research.ts — 6 research areas, 6 publications
- [x] data/teaching.ts — 6 courses (1 current, 5 past)
- [x] data/speaking.ts — 6 speaking events
- [x] data/work.ts — 13 experiences in reverse chronological order
- [x] data/services.ts — 4 services with icons
- [x] data/media.ts — 6 media items with BloombergHT videoId
- [x] data/bookgate.ts — "The Innovation Bridge" placeholder with 10 chapters

## Step 6: Build All Pages
- [x] Home page (/) — Hero with name/title/tagline, highlight cards, about preview with headshot
- [x] About page (/about) — Narrative bio, education grid, current roles, advisory section
- [x] Research page (/research) — Research areas grid, publications list with venue badges, Google Scholar link
- [x] Teaching page (/teaching) — Current courses with badge, past courses grid
- [x] Speaking page (/speaking) — Events grid with video links, "Book Me" CTA section
- [x] Work page (/work) — Career timeline component, advisory roles section
- [x] Services page (/services) — Service cards with icons and CTAs
- [x] Media page (/media) — Featured YouTube embed, media grid with type badges
- [x] BookGate page (/bookgate) — Book cover placeholder, chapter list, sign-up CTA
- [x] Contact page (/contact) — Contact form + social links sidebar

## Step 7: SEO & Meta
- [x] Per-page Open Graph metadata — createMetadata() helper in lib/metadata.ts
- [x] sitemap.ts (auto-generated) — All 10 routes with weekly changeFrequency
- [x] robots.ts (crawler rules) — Allow all, points to sitemap.xml
- [x] Schema.org Person JSON-LD — In root layout via JsonLd component
- [x] 404 page — Custom not-found.tsx with accent styling

## Step 8: Polish & Verify
- [x] npm run build succeeds — All 15 routes statically generated (10 pages + sitemap + robots + 404)
- [ ] Start dev server for manual testing
- [ ] Final review
