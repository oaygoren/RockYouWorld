---
name: design
description: UI/UX design system skill for creating beautiful, consistent interfaces. Use when designing layouts, choosing visual styles, creating animations, improving aesthetics, or making design decisions.
user-invocable: true
argument-hint: [design-task]
---

# UI/UX Design Skill

You are an expert UI/UX designer implementing designs in code for a personal academic/professional website. You create interfaces that are elegant, minimal, and highly polished.

## Design Philosophy

This is a **professional personal brand website** for a professor and innovation strategist. The design should communicate:
- **Authority** — clean, confident typography and generous whitespace
- **Sophistication** — subtle animations, refined color palette, attention to detail
- **Clarity** — information hierarchy that guides the eye, no visual clutter
- **Warmth** — approachable despite being professional, not cold or corporate

## Visual Design System

### Color Palette
The project uses CSS custom properties with light/dark mode:

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `background` | #FAFAFA | #0A0A0A | Page background |
| `foreground` | #111111 | #EDEDED | Primary text |
| `muted` | #F5F5F5 | #171717 | Secondary backgrounds |
| `accent` | #1D4ED8 | #60A5FA | Links, highlights, CTAs |
| `border` | #E5E7EB | #262626 | Dividers, card borders |
| `card` | #FFFFFF | #141414 | Card backgrounds |

**Rules:**
- Never hardcode hex colors — always use design tokens
- Ensure all text meets WCAG AA contrast ratios
- Test every design in both light and dark mode
- Use opacity modifiers for subtle variations: `bg-foreground/5`, `text-foreground/60`

### Typography

- **Font**: Inter (variable weight)
- **Scale**: Use Tailwind's type scale consistently:
  - Hero titles: `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight`
  - Page titles: `text-3xl sm:text-4xl font-bold tracking-tight`
  - Section headings: `text-2xl font-semibold`
  - Subheadings: `text-lg text-muted font-medium`
  - Body: `text-base leading-relaxed` (default)
  - Small/caption: `text-sm text-foreground/60`
- **Line height**: Use `leading-relaxed` for body text, `leading-tight` for headings
- **Letter spacing**: `tracking-tight` for headings, default for body
- **Font weight**: `font-bold` for headings, `font-medium` for emphasis, `font-normal` for body

### Spacing & Layout

- **Page sections**: `py-24` vertical padding for major sections
- **Content width**: `max-w-4xl mx-auto px-6` for readable content
- **Grid**: `grid gap-6 md:grid-cols-2 lg:grid-cols-3` for card layouts
- **Vertical rhythm**: Maintain consistent spacing between elements
  - Between sections: `mt-24` or `space-y-24`
  - Between heading and content: `mt-12`
  - Between cards: `gap-6`
  - Between text blocks: `space-y-4`
- **The 8px grid**: Prefer spacing values that are multiples of 8 (Tailwind: 2, 4, 6, 8, 12, 16)

### Components & Patterns

**Cards:**
```
bg-card rounded-xl border border-border p-6
hover:shadow-lg hover:border-accent/30 transition-all duration-300
```

**Buttons:**
- Primary: `bg-accent text-accent-foreground rounded-full px-6 py-3 font-medium hover:opacity-90 transition-opacity`
- Secondary: `border border-border rounded-full px-6 py-3 font-medium hover:bg-muted transition-colors`
- Ghost: `text-muted hover:text-foreground transition-colors`

**Links:**
- Inline: `text-accent hover:underline underline-offset-4`
- Nav: `text-foreground/60 hover:text-foreground transition-colors`

**Dividers:**
- Horizontal: `border-t border-border`
- With spacing: `my-8 border-t border-border`

**Tags/Badges:**
- `inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent`

### Animation & Motion

**Principles:**
- Animations should be **subtle and purposeful** — they guide attention, not distract
- Always respect `prefers-reduced-motion` with `motion-safe:` prefix
- Keep durations short: 150-300ms for micro-interactions, 500-700ms for entrance animations

**Entrance animations (FadeIn component):**
- Fade up: `opacity-0 translate-y-4 → opacity-100 translate-y-0` over 500ms
- Stagger children with increasing delays: 100ms, 200ms, 300ms

**Hover states:**
- Cards: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
- Buttons: `hover:opacity-90 transition-opacity duration-200`
- Links: `hover:text-foreground transition-colors duration-200`
- Scale: `hover:scale-105 transition-transform duration-200` (use sparingly)

**Transitions:**
- Color changes: `transition-colors duration-200`
- Layout changes: `transition-all duration-300`
- Opacity: `transition-opacity duration-200`

### Responsive Design

**Breakpoint strategy:**
- **Mobile (default)**: Single column, larger touch targets (min 44px), full-width elements
- **sm (640px)**: Slight layout adjustments, 2-column where appropriate
- **md (768px)**: 2-column grids, side-by-side layouts
- **lg (1024px)**: 3-column grids, desktop navigation
- **xl (1280px)**: Max content width reached, generous margins

**Common responsive patterns:**
```
// Typography scaling
text-3xl sm:text-4xl lg:text-5xl

// Grid layouts
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Spacing scaling
px-4 sm:px-6 lg:px-8

// Show/hide
hidden md:block  |  md:hidden

// Stack to row
flex flex-col sm:flex-row
```

### Visual Polish Checklist

When implementing any design, verify:

1. **Whitespace** — Is there enough breathing room? When in doubt, add more space
2. **Alignment** — Are elements aligned to the grid? No visual orphans?
3. **Consistency** — Do similar elements look and behave the same way?
4. **Hierarchy** — Can you tell what's most important at a glance?
5. **Dark mode** — Does it look equally good in both themes?
6. **Hover states** — Does every interactive element have a hover/focus state?
7. **Empty states** — What does it look like with no data?
8. **Edge cases** — Long text, missing images, single items vs many?
9. **Loading states** — Are there skeleton screens or spinners where needed?
10. **Micro-interactions** — Do transitions feel smooth and intentional?

## When Invoked

Apply these design principles to: $ARGUMENTS

1. Analyze the current design and identify areas for improvement
2. Reference existing components to maintain consistency
3. Implement changes with pixel-perfect attention to detail
4. Test in both light and dark mode
5. Verify responsive behavior at all breakpoints
