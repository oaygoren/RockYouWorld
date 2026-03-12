---
name: ui-review
description: Review UI code for design quality, accessibility, performance, shadcn/ui consistency, and best practices. Use when reviewing components, pages, or PRs.
user-invocable: true
argument-hint: "file-or-component-to-review"
---

# UI Code Review Skill

Review the following for frontend quality: $ARGUMENTS

## Review Checklist

### shadcn/ui Consistency
- [ ] Using shadcn components where available instead of custom HTML
- [ ] Correct use of `cva` variants (not fighting the component API)
- [ ] Using `cn()` for class merging (not string concatenation)
- [ ] Proper use of shadcn color tokens: `primary`, `secondary`, `muted`, `accent`, `destructive`
- [ ] Using the radius scale (`rounded-sm/md/lg/xl`) instead of arbitrary values
- [ ] Composing shadcn components correctly (Card > CardHeader > CardTitle, etc.)

### Design Quality
- [ ] Consistent use of design tokens (no hardcoded colors, spacing)
- [ ] Proper typography scale and hierarchy
- [ ] Adequate whitespace and visual breathing room
- [ ] Hover/focus states on all interactive elements
- [ ] Smooth transitions and animations (not jarring)
- [ ] Works well in both light and dark mode

### Accessibility
- [ ] Semantic HTML elements used correctly
- [ ] Proper heading hierarchy (h1 > h2 > h3, no skipping)
- [ ] Images have meaningful alt text
- [ ] Interactive elements are keyboard accessible
- [ ] Focus indicators visible (shadcn `focus-visible:ring` pattern)
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 large text)
- [ ] ARIA attributes used where needed
- [ ] Base UI primitives providing built-in a11y for complex widgets

### Performance
- [ ] Images use `next/image` with proper sizing
- [ ] No unnecessary `"use client"` directives
- [ ] Heavy components dynamically imported
- [ ] No layout shifts (explicit dimensions on media)
- [ ] Efficient re-renders (no unnecessary state)
- [ ] Specific lucide-react imports (not barrel imports)

### Code Quality
- [ ] TypeScript types are precise (no `any`)
- [ ] Props interface follows `{Name}Props` convention
- [ ] `cn()` used for conditional classes
- [ ] Named exports (not default)
- [ ] Component is appropriately sized (< 150 lines)
- [ ] No duplicated logic that should be extracted

### Responsive Design
- [ ] Mobile-first approach
- [ ] Tested at all breakpoints (sm, md, lg, xl)
- [ ] Touch targets minimum 44px
- [ ] No horizontal overflow on mobile
- [ ] Text remains readable at all sizes

## Output Format

For each issue found, report:
1. **File and line** — exact location
2. **Severity** — critical / warning / suggestion
3. **Issue** — what's wrong
4. **Fix** — concrete code suggestion

Summarize with counts: X critical, Y warnings, Z suggestions.
