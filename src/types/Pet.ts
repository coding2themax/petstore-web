export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: 'Male' | 'Female';
  price: number;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
  characteristics: string[];
  healthStatus: 'Excellent' | 'Good' | 'Fair';
  vaccinated: boolean;
  spayedNeutered: boolean;
  size: 'Small' | 'Medium' | 'Large' | 'Extra Large';
  energyLevel: 'Low' | 'Medium' | 'High';
  goodWithKids: boolean;
  goodWithPets: boolean;
}
