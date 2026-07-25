# Event Section Design

## Objective

Update the home-page event section for Inextinguible Camp 2026 and structure it so a future administration panel can replace the data source without changing the presentation.

## Content

- Title: Inextinguible Camp 2026
- Date: 16-18 de octubre de 2026
- Price: L1,200
- Registration URL: https://forms.gle/BAFKdqAct6ekSZBY8
- Images: two supplied campaign images

## Architecture

Event content lives in `data/current-event.ts` as a typed object. The reusable `EventSection` component receives that object and renders a responsive image gallery plus event details. `app/page.tsx` only composes the section.

This boundary allows a future CMS or VPS administration endpoint to replace the static object while retaining the same `Event` interface and UI.

## Presentation

The section keeps the current white and navy visual language. One image uses the full gallery width; multiple images form a responsive grid. Event details and the registration action appear below the gallery so neither supplied design is cropped.

## Verification

- Run the production build.
- Confirm both image assets are bundled.
- Confirm the registration link opens in a new tab.
- Confirm unrelated working-tree changes are not staged.
