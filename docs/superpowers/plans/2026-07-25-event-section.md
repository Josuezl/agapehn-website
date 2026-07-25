# Event Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish Inextinguible Camp 2026 with two images and its registration form while preparing the section for a future content panel.

**Architecture:** A typed event object supplies data to a dedicated server component. The home page imports both and remains responsible only for composition.

**Tech Stack:** Next.js 14 App Router, React Server Components, TypeScript, Tailwind CSS

## Global Constraints

- Preserve existing site styling and responsive behavior.
- Do not add a database or administration system in this change.
- Do not include unrelated local changes in the commit.

---

### Task 1: Add event assets and typed data

**Files:**
- Create: `public/Eventos/inextinguible-camp-2026-01.jpeg`
- Create: `public/Eventos/inextinguible-camp-2026-02.jpeg`
- Create: `data/current-event.ts`

**Interfaces:**
- Produces: `Event` and `currentEvent`

- [ ] Copy both supplied images into the public event directory.
- [ ] Define the event interface with label, title, description, date, price, images, and registration URL.
- [ ] Populate the current event with Inextinguible Camp 2026 content.

### Task 2: Render the reusable event section

**Files:**
- Create: `components/events/EventSection.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `Event`
- Produces: `EventSection({ event }: { event: Event })`

- [ ] Render all event images without cropping their campaign content.
- [ ] Render title, date, price, description, and registration link.
- [ ] Replace the inline home-page event markup with `EventSection`.

### Task 3: Verify and publish

**Files:**
- Verify all files changed by Tasks 1 and 2.

- [ ] Run `npm run build`.
- [ ] Inspect `git diff` and `git status`.
- [ ] Commit only event-related files using Conventional Commits.
- [ ] Push `main` to GitHub so the existing VPS deployment automation runs.
