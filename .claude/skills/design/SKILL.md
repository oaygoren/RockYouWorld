---
name: design
description: UI/UX design system skill with shadcn/ui v4 integration. Use when designing layouts, choosing visual styles, creating animations, improving aesthetics, or making design decisions.
user-invocable: true
argument-hint: "design-task"
---

# UI/UX Design Skill

You are an expert UI/UX designer implementing designs in code using **shadcn/ui v4** (Base UI), Tailwind CSS v4, and the project's design system.

## Design Philosophy

This is a **professional personal brand website** for a professor and innovation strategist. The design should communicate:
- **Authority** — clean, confident typography and generous whitespace
- **Sophistication** — subtle animations, refined color palette, attention to detail
- **Clarity** — information hierarchy that guides the eye, no visual clutter
- **Warmth** — approachable despite being professional, not cold or corporate

## Color System (oklch-based)

The project uses shadcn/ui's oklch color tokens with light/dark mode support:

### Semantic Color Tokens
| Token | Purpose | Tailwind Class |
|-------|---------|---------------|
| `primary` | Main actions, emphasis | `bg-primary text-primary-foreground` |
| `secondary` | Secondary actions | `bg-secondary text-secondary-foreground` |
| `muted` | Subtle backgrounds, disabled | `bg-muted text-muted-foreground` |
| `accent` | Highlights, hover states | `bg-accent text-accent-foreground` |
| `destructive` | Errors, dangerous actions | `bg-destructive text-destructive` |
| `card` | Card surfaces | `bg-card text-card-foreground` |
| `popover` | Floating surfaces | `bg-popover text-popover-foreground` |
| `border` | Borders, dividers | `border-border` |
| `input` | Form inputs | `border-input` |
| `ring` | Focus rings | `ring-ring` |

### Rules
- Never hardcode hex/oklch values — always use design tokens
- Ensure all text meets WCAG AA contrast ratios
- Test every design in both light and dark mode
- Use opacity modifiers for subtle variations: `bg-primary/10`, `text-foreground/60`

## Typography

- **Fonts**: Inter (body, `--font-inter`) + Geist Sans (UI, `--font-sans`)
- **Scale**:
  - Hero titles: `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight`
  - Page titles: `text-3xl sm:text-4xl font-bold tracking-tight`
  - Section headings: `text-2xl font-semibold`
  - Subheadings: `text-lg text-muted-foreground font-medium`
  - Body: `text-base leading-relaxed`
  - Small/caption: `text-sm text-muted-foreground`
- **Line height**: `leading-relaxed` for body, `leading-tight` for headings
- **Letter spacing**: `tracking-tight` for headings, default for body

## Spacing & Layout

- **Page sections**: `py-24` vertical padding
- **Content width**: `max-w-4xl mx-auto px-6`
- **Grid**: `grid gap-6 md:grid-cols-2 lg:grid-cols-3`
- **Vertical rhythm**: `space-y-24` between sections, `mt-12` heading-to-content, `gap-6` between cards
- **8px grid**: Prefer Tailwind spacing multiples of 2 (8px)

## shadcn/ui Component Patterns

### Cards (shadcn style)
```tsx
// Add shadcn card: npx shadcn@latest add card
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Buttons (already installed)
```tsx
import { Button } from "@/components/ui/Button"

// Variants: default, outline, secondary, ghost, destructive, link
// Sizes: xs, sm, default, lg, icon, icon-xs, icon-sm, icon-lg
<Button variant="outline" size="lg">Action</Button>
```

### Common UI Patterns

**Hero Section:**
```tsx
<section className="mx-auto max-w-4xl px-6 py-32 text-center">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
    Title
  </h1>
  <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
    Subtitle
  </p>
  <div className="mt-8 flex gap-4 justify-center">
    <Button size="lg">Primary CTA</Button>
    <Button variant="outline" size="lg">Secondary CTA</Button>
  </div>
</section>
```

**Feature Grid:**
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {features.map((f) => (
    <Card key={f.id} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <CardHeader>
        <f.icon className="size-8 text-primary mb-2" />
        <CardTitle>{f.title}</CardTitle>
        <CardDescription>{f.description}</CardDescription>
      </CardHeader>
    </Card>
  ))}
</div>
```

**Badge / Tag:**
```tsx
// Add: npx shadcn@latest add badge
import { Badge } from "@/components/ui/badge"

<Badge variant="secondary">Tag</Badge>
<Badge variant="outline">Category</Badge>
```

**Dialog / Modal:**
```tsx
// Add: npx shadcn@latest add dialog
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    {/* content */}
  </DialogContent>
</Dialog>
```

## Animation & Motion

**Principles:**
- Animations should be **subtle and purposeful**
- Respect `prefers-reduced-motion` with `motion-safe:`
- Keep durations short: 150-300ms micro, 500-700ms entrance
- Use `tw-animate-css` classes for shadcn-compatible animations

**Entrance animations (FadeIn component):**
- Fade up: `opacity-0 translate-y-4 → opacity-100 translate-y-0` over 500ms
- Stagger children with increasing delays

**Hover states:**
- Cards: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
- Buttons: shadcn handles hover via cva variants
- Links: `hover:text-foreground transition-colors duration-200`

**Transitions:**
- Color: `transition-colors duration-200`
- Layout: `transition-all duration-300`
- Opacity: `transition-opacity duration-200`

## Responsive Design

**Breakpoint strategy:**
- **Mobile (default)**: Single column, 44px+ touch targets
- **sm (640px)**: Minor adjustments, 2-col where fits
- **md (768px)**: 2-column grids, side-by-side
- **lg (1024px)**: 3-column grids, desktop nav
- **xl (1280px)**: Max width, generous margins

**Patterns:**
```
text-3xl sm:text-4xl lg:text-5xl          // Typography scaling
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // Grid
flex flex-col sm:flex-row                  // Stack to row
hidden md:block  |  md:hidden             // Show/hide
```

## Radius System

shadcn uses a radius scale via `--radius` CSS variable:
- `rounded-sm` → `calc(var(--radius) * 0.6)` — small elements
- `rounded-md` → `calc(var(--radius) * 0.8)` — inputs, badges
- `rounded-lg` → `var(--radius)` — cards, dialogs (default)
- `rounded-xl` → `calc(var(--radius) * 1.4)` — larger cards
- `rounded-2xl` → `calc(var(--radius) * 1.8)` — hero sections

## Visual Polish Checklist

1. **Whitespace** — enough breathing room? When in doubt, add more
2. **Alignment** — elements on the grid? No orphans?
3. **Consistency** — similar elements look/behave the same?
4. **Hierarchy** — most important thing is obvious at a glance?
5. **Dark mode** — equally good in both themes?
6. **Hover states** — every interactive element has feedback?
7. **Empty states** — what with no data?
8. **Edge cases** — long text, missing images, 1 item vs many?
9. **Loading states** — skeleton screens via shadcn `<Skeleton />`?
10. **Micro-interactions** — transitions feel smooth and intentional?

## When Invoked

Apply these design principles to: $ARGUMENTS

1. Analyze the current design and identify improvements
2. Check if shadcn has a component for what's needed (`npx shadcn@latest add <name>`)
3. Reference existing components to maintain consistency
4. Implement with pixel-perfect attention to detail
5. Test in both light and dark mode
6. Verify responsive behavior at all breakpoints
