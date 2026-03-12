# Agent Skills — oguzhanaygoren.com

This document describes the 3 specialized Claude Code agents available for this project. Each agent has deep knowledge of the project's conventions and can work autonomously on specific tasks.

---

## 1. Page Builder Agent

**File**: `.claude/agents/page-builder.md`

**Purpose**: Creates new Next.js pages that follow the project's established patterns — App Router conventions, SEO metadata, data-driven rendering, and responsive Tailwind styling.

**When to use**:
- Adding a new route/page to the site (e.g., `/awards`, `/blog`)
- Rebuilding an existing page from scratch
- Creating a new section that needs its own URL

**What it does**:
- Creates the page file at `src/app/<route>/page.tsx`
- Sets up SEO metadata using the `createPageMetadata` helper
- Imports and renders data from `src/data/` files
- Uses existing UI components (Card, SectionHeading, FadeIn, etc.)
- Updates navigation if needed
- Verifies the build passes

**Example prompt**: *"Use the page-builder agent to create a /awards page that lists academic and industry awards in a grid of cards."*

---

## 2. Component Builder Agent

**File**: `.claude/agents/component-builder.md`

**Purpose**: Creates reusable, well-typed React/TypeScript UI components that integrate with the existing design system (Tailwind CSS, lucide-react icons, dark/light theming).

**When to use**:
- Building a new reusable UI element (badge, modal, tabs, etc.)
- Creating a specialized display component (video embed, stat counter, etc.)
- Extracting a repeated pattern into a shared component

**What it does**:
- Creates properly typed components with `{Name}Props` interfaces
- Uses the `cn()` utility for class merging
- Follows mobile-first responsive patterns
- Adds `"use client"` only when interactivity requires it
- Maintains accessibility with proper ARIA attributes

**Example prompt**: *"Use the component-builder agent to create a TestimonialCard component with avatar, quote text, and attribution."*

---

## 3. Content Manager Agent

**File**: `.claude/agents/content-manager.md`

**Purpose**: Adds, updates, or removes content entries in the typed data files (`src/data/*.ts`) that power every page on the site.

**When to use**:
- Adding a new publication, speaking event, course, or media appearance
- Updating profile info, roles, or bio text
- Removing outdated entries
- Creating a new data category with its type definition

**What it does**:
- Reads existing types and data patterns before making changes
- Ensures type safety — every entry conforms to its TypeScript interface
- Maintains chronological ordering (newest first)
- Validates changes with `npx tsc --noEmit`
- Creates new type definitions when needed

**Example prompt**: *"Use the content-manager agent to add my new TEDxIstanbul talk from September 2025 to the speaking data."*

---

## Quick Reference

| Agent | Directory | Best For |
|---|---|---|
| Page Builder | `.claude/agents/page-builder.md` | New routes & pages |
| Component Builder | `.claude/agents/component-builder.md` | Reusable UI components |
| Content Manager | `.claude/agents/content-manager.md` | Data file updates |
