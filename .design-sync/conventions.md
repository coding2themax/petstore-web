## Petstore Web — how to build with these components

This is a small, **data-driven** component set extracted from the petstore-web app. There are two components, both in the `pet` group:

- **`PetCard`** — a compact pet listing card for grids/lists.
- **`PetDetails`** — a full detail view of a single pet, rendered as a **full-screen `position: fixed` overlay modal** (it paints over the whole viewport with a dark backdrop).

### Setup — no provider, no theme

Neither component needs a provider, context, router, or theme wrapper. Render them directly from `window.PetstoreWeb`. They bring their own styles (see below), so the only setup is loading the bundle + `styles.css`.

```jsx
const { PetCard } = window.PetstoreWeb;
```

### The styling idiom — styles ship with the components

There is **no utility-class system and no style props.** Each component owns its complete markup and CSS class vocabulary, shipped in `_ds_bundle.css` (reached via `styles.css`). You do **not** add classes or theme tokens to style them — you style them by passing a well-formed `pet` object, and the component renders its own classes (e.g. `.pet-card`, `.btn-primary`, `.btn-secondary`, `.badge`, `.characteristic-tag`, `.pet-details-overlay`, `.pet-details-modal`). For your own surrounding layout (the grid these cards sit in, page chrome), use plain CSS/flex/grid — there is no DS layout primitive here.

The single most important rule: **drive these components with data, not props-as-config.** The `pet` object is the design language. It must be a complete object of this shape (see `PetCard.d.ts` / `PetDetails.d.ts` for the exact contract):

```ts
{
  id, name, species, breed, age, gender, price, description, imageUrl,
  isAvailable, characteristics: string[], healthStatus, vaccinated,
  spayedNeutered, size, energyLevel, goodWithKids, goodWithPets
}
```

A few fields drive visible state automatically: `isAvailable: false` greys the card / shows a "Not Available" banner and hides the buy action; `species` selects the emoji; `vaccinated` / `spayedNeutered` / `goodWithKids` / `goodWithPets` toggle badges. If `imageUrl` fails to load, the component falls back to an emoji placeholder on its own.

### Interactions

Pass callbacks for user actions — the components render the buttons, you handle the events:

- `PetCard`: `onViewDetails(pet)`, `onAddToCart(pet)`
- `PetDetails`: `onClose()`, `onAddToCart(pet)`, `onScheduleVisit(pet)`

The typical flow: a grid of `PetCard`s; clicking one's `onViewDetails` opens a `PetDetails` overlay for that pet; `onClose` dismisses it.

### Where the truth lives

- `styles.css` → `@import "./_ds_bundle.css"` — the complete component styles. Read `_ds_bundle.css` before assuming any visual detail.
- `components/pet/PetCard/PetCard.d.ts` and `PetDetails.d.ts` — the exact prop contract.
- `components/pet/<Name>/<Name>.prompt.md` — per-component usage.

### One idiomatic example

```jsx
const { PetCard } = window.PetstoreWeb;

const buddy = {
  id: '1', name: 'Buddy', species: 'Dog', breed: 'Golden Retriever',
  age: 2, gender: 'Male', price: 1200,
  description: 'Friendly and energetic golden retriever.',
  imageUrl: 'https://example.com/buddy.jpg',
  isAvailable: true,
  characteristics: ['Friendly', 'Energetic', 'Loyal'],
  healthStatus: 'Excellent', vaccinated: true, spayedNeutered: true,
  size: 'Large', energyLevel: 'High', goodWithKids: true, goodWithPets: true,
};

// Your own grid wrapper (plain CSS) holding DS cards:
function PetGrid({ pets, onOpen }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 24 }}>
      {pets.map((p) => (
        <PetCard key={p.id} pet={p} onViewDetails={onOpen} onAddToCart={() => {}} />
      ))}
    </div>
  );
}
```
