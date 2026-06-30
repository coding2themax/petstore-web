// Authored design-sync preview for PetDetails (full-screen overlay modal).
// Rendered with cardMode:single + a tall viewport (see config overrides) so the
// overlay paints inside the card. Content mirrors src/data/samplePets.ts.
import { PetDetails } from 'petstore-web';

const buddy = {
  id: '1',
  name: 'Buddy',
  species: 'Dog',
  breed: 'Golden Retriever',
  age: 2,
  gender: 'Male',
  price: 1200,
  description:
    'Friendly and energetic golden retriever who loves playing fetch and swimming. Great with kids and other pets!',
  imageUrl:
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop',
  isAvailable: true,
  characteristics: ['Friendly', 'Energetic', 'Loyal', 'Intelligent', 'Playful'],
  healthStatus: 'Excellent',
  vaccinated: true,
  spayedNeutered: true,
  size: 'Large',
  energyLevel: 'High',
  goodWithKids: true,
  goodWithPets: true,
};

const charlie = {
  id: '3',
  name: 'Charlie',
  species: 'Bird',
  breed: 'Cockatiel',
  age: 0.5,
  gender: 'Male',
  price: 150,
  description:
    'Young cockatiel with beautiful plumage. Can learn to whistle and talk with proper training.',
  imageUrl:
    'https://images.unsplash.com/photo-1544923246-77307dd6db90?w=400&h=300&fit=crop',
  isAvailable: false,
  characteristics: ['Vocal', 'Social', 'Intelligent', 'Colorful'],
  healthStatus: 'Good',
  vaccinated: true,
  spayedNeutered: false,
  size: 'Small',
  energyLevel: 'Medium',
  goodWithKids: true,
  goodWithPets: true,
};

const noop = () => {};

// PetDetails is a full-screen `position: fixed` overlay modal. For a static
// preview card we neutralize the fixed/centered backdrop so the real modal
// markup flows inline, top-to-bottom and fully visible (the standard way to
// preview a dialog component). The component's own styles are otherwise intact.
// Recorded in .design-sync/NOTES.md.
const InlineModal = () => (
  <>
    <style>{`
      .pet-details-overlay { position: static; padding: 0; background: transparent; display: block; }
      .pet-details-modal { max-height: none; max-width: 1000px; margin: 0 auto; box-shadow: 0 10px 40px rgba(0,0,0,0.12); }
    `}</style>
    {null}
  </>
);

/** Full detail view of an available pet: image carousel, info grid, health,
 *  compatibility, and the Add-to-Cart / Schedule-a-Visit actions. */
export const Available = () => (
  <>
    <InlineModal />
    <PetDetails
      pet={buddy}
      onClose={noop}
      onAddToCart={noop}
      onScheduleVisit={noop}
    />
  </>
);

/** Detail view of an unavailable pet: shows the "Not Available" banner and the
 *  "Notify When Available" action instead of Add-to-Cart. */
export const Unavailable = () => (
  <>
    <InlineModal />
    <PetDetails pet={charlie} onClose={noop} />
  </>
);
