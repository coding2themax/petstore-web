// Authored design-sync preview for PetCard.
// Content mirrors src/data/samplePets.ts so the cards look like the real app.
import { PetCard } from 'petstore-web';

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

const luna = {
  id: '2',
  name: 'Luna',
  species: 'Cat',
  breed: 'Persian',
  age: 1.5,
  gender: 'Female',
  price: 800,
  description:
    'Beautiful Persian cat with a calm and gentle temperament. Perfect for a quiet home environment.',
  imageUrl:
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
  isAvailable: true,
  characteristics: ['Calm', 'Gentle', 'Affectionate', 'Quiet'],
  healthStatus: 'Excellent',
  vaccinated: true,
  spayedNeutered: true,
  size: 'Medium',
  energyLevel: 'Low',
  goodWithKids: true,
  goodWithPets: false,
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

/** An available dog with the full set of badges and actions. */
export const Available = () => (
  <PetCard pet={buddy} onViewDetails={noop} onAddToCart={noop} />
);

/** A calm cat — lower energy, different species emoji and badges. */
export const CalmCat = () => (
  <PetCard pet={luna} onViewDetails={noop} onAddToCart={noop} />
);

/** An unavailable pet: greyed overlay, no "Add to Cart" action. */
export const Unavailable = () => (
  <PetCard pet={charlie} onViewDetails={noop} onAddToCart={noop} />
);
