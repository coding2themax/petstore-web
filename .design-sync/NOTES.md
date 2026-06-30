# design-sync notes — petstore-web

## Context
- **This repo is a React _application_ (webpack app bundle), not a design-system library.** It has no library `dist/` build and no `.d.ts` exports — the converter runs in **synth-entry mode** from `src/`.
- The "design system" here is **custom CSS** (`src/components/**/*.css`), not MUI. Components are plain HTML + CSS classes (e.g. `.pet-card`, `.btn-primary`, `.badge`, `.characteristic-tag`). MUI is only used trivially in `ButtonUsage.tsx` (not synced).
- **Scope is deliberately narrow:** only the two clean, prop-driven presentational components — `PetCard` and `PetDetails`. Header (needs React Router), Footer (site chrome), PetShowcase (stateful container), ButtonUsage (trivial) were excluded by the user.
- Sample data for previews: `src/data/samplePets.ts` (`samplePets: Pet[]`). Pet type: `src/types/Pet.ts`.

## Components
- `PetCard` (`src/components/pet/PetCard.tsx`) — prop: `pet: Pet`, `onViewDetails?`, `onAddToCart?`, `className?`. Plain card. Imports `./PetCard.css`.
- `PetDetails` (`src/components/pet/PetDetails.tsx`) — prop: `pet: Pet`, `onClose?`, `onAddToCart?`, `onScheduleVisit?`, `className?`. **Overlay modal** (`.pet-details-overlay`) — needs `cardMode: single` + a viewport override to render inside the card. Imports `./PetDetails.css`.

## Build / preview specifics
- **Scoped entry:** the converter runs against a hand-written `.design-sync/entry.tsx` (passed as `--entry`) that re-exports only PetCard + PetDetails — this is what keeps scope to the two components. To add a component later, add an export there AND a `componentSrcMap` + `dtsPropsFor` entry.
- **`dtsPropsFor` is hand-written** for both components: synth-entry mode parsed 0 `.d.ts` files, so auto-extraction fell back to `[key: string]: unknown`. The hand-written bodies inline the full `Pet` shape (keep them in sync with `src/types/Pet.ts`).
- **PetDetails is a full-screen `position: fixed` overlay modal.** Its authored preview injects a scoped `<style>` (the `InlineModal` helper) that neutralizes the fixed/centered backdrop so the real modal markup flows inline, top-to-bottom, fully visible — the standard way to preview a dialog. Override: `cardMode: single`, `viewport: 1100x1500`. The component's own styles are otherwise untouched.
- **Images:** previews use the real Unsplash URLs from `samplePets`. In headless capture they don't load, so PetCard/PetDetails fall back to the component's own emoji SVG placeholder — graceful and intended. In the live DS pane (with network) the real photos load.

## Known render warns
- None recorded — render check is clean (`bad` empty, no thin/variantsIdentical flags).

## Re-sync risks
- Synth-entry mode means `.d.ts` prop contracts are derived from `src/` TSX, not shipped types — weaker than a real library build. If a real component library is ever extracted, repoint at it.
- Preview content is the real `samplePets` data inlined into authored `previews/*.tsx`; if the Pet shape changes, both the previews AND the `dtsPropsFor` inline Pet shape need updating.
- PetDetails preview's `InlineModal` style override is tied to the component's current class names (`.pet-details-overlay`, `.pet-details-modal`). If those CSS class names change, the override silently stops applying and the preview reverts to the clipped centered-overlay framing.
