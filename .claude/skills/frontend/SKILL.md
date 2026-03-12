---
name: frontend
description: Frontend development best practices for Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui v4 (Base UI). Use when building pages, components, layouts, or any frontend code.
user-invocable: true
argument-hint: "task-description"
---

# Frontend Development Skill

You are an expert frontend engineer working on a Next.js 16 App Router project with React 19, TypeScript, Tailwind CSS v4, and **shadcn/ui v4** (Base UI variant).

## Architecture Principles

### Next.js App Router
- **Server Components by default** — only add `"use client"` when you need hooks, event handlers, or browser APIs
- **Colocation** — keep related files close: page, loading, error, layout in the same route folder
- **Streaming & Suspense** — use `loading.tsx` or `<Suspense>` for async data, never block the whole page
- **Metadata** — every page exports a `metadata` object or `generateMetadata()` for SEO
- **Route groups** — use `(group)` folders to organize without affecting URL structure
- **Parallel routes & intercepting routes** — use `@slot` and `(.)` patterns for modals and complex layouts

### React 19 Patterns
- **Server Actions** — use `"use server"` for form handling and mutations instead of API routes
- **`use()` hook** — unwrap promises and context in client components
- **`useOptimistic()`** — for optimistic UI updates on mutations
- **`useFormStatus()`** — for pending states in forms
- **`useTransition()`** — for non-urgent state updates that shouldn't block UI
- **Ref as prop** — React 19 passes ref as a regular prop, no need for `forwardRef`
- Avoid `useEffect` for data fetching — fetch in Server Components or use Server Actions

### TypeScript
- Define prop interfaces as `{ComponentName}Props`
- Use `satisfies` for type-safe object literals
- Prefer `interface` over `type` for component props (extendable)
- Use discriminated unions for variant props
- Never use `any` — use `unknown` and narrow with type guards
- Use `as const` for literal types

## shadcn/ui Integration

### Setup
- **Style**: `base-nova` (Base UI, not Radix)
- **Config**: `components.json` at project root
- **Primitives**: `@base-ui/react` for headless components
- **Variants**: `class-variance-authority` (cva) for component variants
- **Class merging**: `cn()` from `@/lib/utils` (clsx + tailwind-merge)
- **Icons**: `lucide-react`
- **Animations**: `tw-animate-css`

### Adding Components
```bash
npx shadcn@latest add <component-name>
```

Common components to add as needed:
- **Layout**: `card`, `separator`, `aspect-ratio`, `scroll-area`
- **Forms**: `input`, `textarea`, `select`, `checkbox`, `radio-group`, `switch`, `label`, `field`
- **Feedback**: `alert`, `badge`, `skeleton`, `spinner`, `progress`, `sonner` (toast)
- **Overlay**: `dialog`, `sheet`, `drawer`, `popover`, `tooltip`, `hover-card`
- **Navigation**: `tabs`, `navigation-menu`, `breadcrumb`, `pagination`, `dropdown-menu`
- **Data**: `table`, `data-table` (with TanStack Table)
- **Display**: `avatar`, `carousel`, `accordion`, `collapsible`

### Using shadcn Components
```tsx
// Import from the ui directory
import { Button } from "@/components/ui/Button";

// Use variant props
<Button variant="outline" size="lg">Click me</Button>

// Extend with className
<Button className="w-full" variant="secondary">Full Width</Button>
```

### Customizing shadcn Components
- **DO** modify the generated files in `src/components/ui/` — they're yours to own
- **DO** add new variants to existing `cva()` definitions
- **DO** use `cn()` to compose classes conditionally
- **DON'T** edit `node_modules` or shadcn internals
- **DON'T** fight the component API — extend it or wrap it

### shadcn + Custom Components
The project has both shadcn components and custom components:
- **shadcn**: `Button` (with buttonVariants via cva)
- **Custom**: `Card`, `SectionHeading`, `FadeIn`, `Timeline`, `ContactForm`, `ThemeToggle`

When building new features, prefer shadcn components where available. Use custom components for project-specific UI that shadcn doesn't cover.

## Performance
- **Images**: Always use `next/image` with explicit `width`/`height` or `fill` + `sizes`
- **Fonts**: Use `next/font` — configured with Inter + Geist
- **Dynamic imports**: `next/dynamic` for heavy client components (charts, editors, maps)
- **Bundle size**: Check imports — prefer specific imports (`import { X } from 'lucide-react'`)
- **Memoization**: Only `useMemo`/`useCallback` when there's a measured perf problem
- **Keys**: Use stable, unique IDs as keys — never array index for dynamic lists

### Code Organization
```
src/
  app/              # Routes and pages
  components/
    ui/             # shadcn + custom UI primitives
    layout/         # Layout components (Navbar, Footer)
    seo/            # SEO components (JsonLd)
    sections/       # Page-specific sections
  data/             # Static content data files
  hooks/            # Custom React hooks (shadcn alias)
  lib/              # Utilities and helpers
  types/            # TypeScript interfaces
```

## Tailwind CSS v4 Guidelines

- **CSS-first configuration** — Tailwind v4 uses CSS `@theme inline` for customization, not `tailwind.config`
- **shadcn CSS variables** — the project uses oklch-based tokens via CSS custom properties
- **Key tokens**: `primary`, `secondary`, `muted`, `accent`, `destructive`, `card`, `popover`, `border`, `input`, `ring`
- **Radius scale**: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl` (via `--radius`)
- **Mobile-first** — write base styles for mobile, then `sm:`, `md:`, `lg:`, `xl:`
- **Class merging** — always use `cn()` when combining conditional classes
- **Arbitrary values** — avoid `w-[347px]` — use design scale values instead

## Accessibility Checklist

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<header>`, `<footer>`
- Heading hierarchy: one `<h1>` per page, sequential `<h2>`, `<h3>`
- Interactive elements: `<button>` for actions, `<a>` for navigation
- ARIA: `aria-label` for icon-only buttons, `aria-current="page"` for active nav links
- Focus styles: shadcn uses `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`
- Color contrast: minimum 4.5:1 for normal text, 3:1 for large text
- Reduced motion: use `motion-safe:` prefix for animations
- Base UI provides built-in a11y for complex widgets (dialogs, menus, etc.)

## When Invoked

Follow these steps for the task: $ARGUMENTS

1. Read relevant existing code to understand patterns
2. Check if shadcn has a component that fits (`npx shadcn@latest add <name>`)
3. Plan the implementation (identify files to create/modify)
4. Implement following all conventions above
5. Verify with `npm run build` to catch type/build errors
