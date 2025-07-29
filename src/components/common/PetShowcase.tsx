import React, { useState } from 'react';
import { PetCard, PetDetails } from '../pet';
import { samplePets } from '../../data/samplePets';
import { Pet } from '../../types/Pet';
import './PetShowcase.css';

interface PetShowcaseProps {
  onViewAllPets?: () => void;
}

const PetShowcase: React.FC<PetShowcaseProps> = ({ onViewAllPets }) => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const handleViewDetails = (pet: Pet) => {
    setSelectedPet(pet);
    console.log('View details for:', pet.name);
  };

  const handleCloseDetails = () => {
    setSelectedPet(null);
  };

  const handleAddToCart = (pet: Pet) => {
    console.log('Add to cart:', pet.name);
    // This would typically add the pet to the shopping cart
    // You might want to show a success message or update cart state
  };

  const handleScheduleVisit = (pet: Pet) => {
    console.log('Schedule visit for:', pet.name);
    // This would typically open a scheduling form or modal
  };

  return (
    <section className="pet-showcase">
      <div className="container">
        <div className="showcase-header">
          <h2>Featured Pets Available for Adoption</h2>
          <p>Find your perfect companion from our collection of loving pets</p>
        </div>
        
        <div className="pets-grid">
          {samplePets.slice(0, 6).map((pet) => (
            <PetCard
              key={pet.id}
              pet={pet}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        <div className="showcase-footer">
          <button 
            className="btn btn-outline"
            onClick={onViewAllPets}
          >
            View All Pets
          </button>
        </div>
      </div>

      {selectedPet && (
        <PetDetails
          pet={selectedPet}
          onClose={handleCloseDetails}
          onAddToCart={handleAddToCart}
          onScheduleVisit={handleScheduleVisit}
        />
      )}
    </section>
  );
};

export default PetShowcase;
