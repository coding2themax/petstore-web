import React from "react";
import { Pet } from "../../types/Pet";
import "./PetCard.css";

interface PetCardProps {
  pet: Pet;
  onViewDetails?: (pet: Pet) => void;
  onAddToCart?: (pet: Pet) => void;
  className?: string;
}

const PetCard: React.FC<PetCardProps> = ({
  pet,
  onViewDetails,
  onAddToCart,
  className = "",
}) => {
  const handleViewDetails = () => {
    onViewDetails?.(pet);
  };

  const handleAddToCart = () => {
    onAddToCart?.(pet);
  };

  const getSpeciesEmoji = (species: string) => {
    switch (species.toLowerCase()) {
      case "dog":
        return "🐕";
      case "cat":
        return "🐱";
      case "bird":
        return "🐦";
      case "fish":
        return "🐠";
      case "rabbit":
        return "🐰";
      case "hamster":
        return "🐹";
      case "guinea pig":
        return "🐹";
      case "reptile":
        return "🦎";
      default:
        return "🐾";
    }
  };

  const getAgeText = (age: number) => {
    if (age < 1) {
      const months = Math.round(age * 12);
      return `${months} month${months !== 1 ? "s" : ""}`;
    }
    return `${age} year${age !== 1 ? "s" : ""}`;
  };

  return (
    <div
      className={`pet-card ${
        !pet.isAvailable ? "unavailable" : ""
      } ${className}`}
    >
      <div className="pet-image-container">
        <img
          src={pet.imageUrl}
          alt={`${pet.name} - ${pet.breed}`}
          className="pet-image"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f8f9fa"/><text x="150" y="100" text-anchor="middle" fill="%236c757d" font-size="48">${getSpeciesEmoji(
              pet.species
            )}</text></svg>`;
          }}
        />
        {!pet.isAvailable && (
          <div className="unavailable-overlay">
            <span>Not Available</span>
          </div>
        )}
        <div className="pet-badges">
          {pet.vaccinated && (
            <span className="badge vaccinated">💉 Vaccinated</span>
          )}
          {pet.spayedNeutered && (
            <span className="badge spayed">✅ Spayed/Neutered</span>
          )}
        </div>
      </div>

      <div className="pet-info">
        <div className="pet-header">
          <h3 className="pet-name">{pet.name}</h3>
          <div className="pet-species">
            <span className="species-emoji">
              {getSpeciesEmoji(pet.species)}
            </span>
            <span className="species-text">{pet.species}</span>
          </div>
        </div>

        <div className="pet-details">
          <p className="pet-breed">{pet.breed}</p>
          <div className="pet-attributes">
            <span className="attribute">
              <strong>Age:</strong> {getAgeText(pet.age)}
            </span>
            <span className="attribute">
              <strong>Gender:</strong> {pet.gender}
            </span>
            <span className="attribute">
              <strong>Size:</strong> {pet.size}
            </span>
          </div>
        </div>

        <div className="pet-characteristics">
          {pet.characteristics.slice(0, 3).map((characteristic, index) => (
            <span key={index} className="characteristic-tag">
              {characteristic}
            </span>
          ))}
          {pet.characteristics.length > 3 && (
            <span className="characteristic-tag more">
              +{pet.characteristics.length - 3} more
            </span>
          )}
        </div>

        <div className="pet-compatibility">
          {pet.goodWithKids && (
            <span className="compatibility-icon" title="Good with kids">
              👶
            </span>
          )}
          {pet.goodWithPets && (
            <span className="compatibility-icon" title="Good with other pets">
              🐾
            </span>
          )}
          <span
            className="energy-level"
            title={`Energy level: ${pet.energyLevel}`}
          >
            ⚡ {pet.energyLevel}
          </span>
        </div>

        <p className="pet-description">{pet.description}</p>

        <div className="pet-footer">
          <div className="pet-price">
            <span className="price-label">Price:</span>
            <span className="price-amount">${pet.price.toLocaleString()}</span>
          </div>

          <div className="pet-actions">
            <button
              className="btn btn-secondary"
              onClick={handleViewDetails}
              aria-label={`View details for ${pet.name}`}
            >
              View Details
            </button>
            {pet.isAvailable && (
              <button
                className="btn btn-primary"
                onClick={handleAddToCart}
                aria-label={`Add ${pet.name} to cart`}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
