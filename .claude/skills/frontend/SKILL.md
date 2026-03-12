---
name: frontend
description: Frontend development best practices for Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Use when building pages, components, layouts, or any frontend code.
user-invocable: true
argument-hint: [task-description]
---

# Frontend Development Skill

You are an expert frontend engineer working on a Next.js 16 App Router project with React 19, TypeScript, and Tailwind CSS v4.

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

### Performance
- **Images**: Always use `next/image` with explicit `width`/`height` or `fill` + `sizes`
- **Fonts**: Use `next/font` — already configured with Inter
- **Dynamic imports**: `next/dynamic` for heavy client components (charts, editors, maps)
- **Bundle size**: Check imports — prefer specific imports (`import { X } from 'lucide-react'`)
- **Memoization**: Only `useMemo`/`useCallback` when there's a measured perf problem
- **Keys**: Use stable, unique IDs as keys — never array index for dynamic lists

### Code Organization
```
src/
  app/              # Routes and pages
  components/
    ui/             # Reusable UI primitives (Button, Card, etc.)
    layout/         # Layout components (Navbar, Footer)
    seo/            # SEO components (JsonLd)
    sections/       # Page-specific sections (HeroSection, etc.)
  data/             # Static content data files
  lib/              # Utilities and helpers
  types/            # TypeScript interfaces
```

## Tailwind CSS v4 Guidelines

- **CSS-first configuration** — Tailwind v4 uses CSS `@theme` for customization, not `tailwind.config`
- **Design tokens** — use the project's custom properties:
  - Text: `text-foreground`, `text-muted`, `text-accent`
  - Background: `bg-background`, `bg-card`, `bg-muted`
  - Border: `border-border`
- **Mobile-first** — write base styles for mobile, then `sm:`, `md:`, `lg:`, `xl:`
- **Spacing scale** — use consistent spacing: `gap-4`, `gap-6`, `gap-8`, `space-y-4`
- **Container** — use `mx-auto max-w-4xl px-6` pattern (not Tailwind's `container`)
- **Arbitrary values** — avoid `w-[347px]` — use design scale values instead
- **Class merging** — always use `cn()` from `@/lib/utils` when combining conditional classes

## Accessibility Checklist

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<header>`, `<footer>`
- Heading hierarchy: one `<h1>` per page, sequential `<h2>`, `<h3>`
- Interactive elements: `<button>` for actions, `<a>` for navigation
- ARIA: `aria-label` for icon-only buttons, `aria-current="page"` for active nav links
- Focus styles: never remove `outline` — use `focus-visible:ring-2 focus-visible:ring-accent`
- Color contrast: minimum 4.5:1 for normal text, 3:1 for large text
- Reduced motion: use `motion-safe:` prefix for animations
- Skip links: include "Skip to content" link for keyboard users

## Error Handling

- Use `error.tsx` boundary files per route for graceful error UI
- Use `not-found.tsx` for 404 pages
- Client-side: wrap risky operations in try/catch, show user-friendly messages
- Form validation: validate on both client and server

## Testing Mental Model

When building any feature, consider:
1. Does it work without JavaScript? (progressive enhancement)
2. Does it work on mobile? (responsive)
3. Does it work with keyboard only? (accessibility)
4. Does it work in dark mode? (theming)
5. Does it handle loading/error/empty states?

## When Invoked

Follow these steps for the task: $ARGUMENTS

1. Read relevant existing code to understand patterns
2. Plan the implementation (identify files to create/modify)
3. Implement following all conventions above
4. Verify with `npm run build` to catch type/build errors
