import React, { useState } from 'react';
import { Pet } from '../../types/Pet';
import './PetDetails.css';

interface PetDetailsProps {
  pet: Pet;
  onClose?: () => void;
  onAddToCart?: (pet: Pet) => void;
  onScheduleVisit?: (pet: Pet) => void;
  className?: string;
}

const PetDetails: React.FC<PetDetailsProps> = ({
  pet,
  onClose,
  onAddToCart,
  onScheduleVisit,
  className = ''
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // For demo purposes, we'll use the same image but in real app this would be an array
  const images = [pet.imageUrl, pet.imageUrl, pet.imageUrl];

  const getSpeciesEmoji = (species: string) => {
    switch (species.toLowerCase()) {
      case 'dog': return '🐕';
      case 'cat': return '🐱';
      case 'bird': return '🐦';
      case 'fish': return '🐠';
      case 'rabbit': return '🐰';
      case 'hamster': return '🐹';
      case 'guinea pig': return '🐹';
      case 'reptile': return '🦎';
      default: return '🐾';
    }
  };

  const getAgeText = (age: number) => {
    if (age < 1) {
      const months = Math.round(age * 12);
      return `${months} month${months !== 1 ? 's' : ''}`;
    }
    return `${age} year${age !== 1 ? 's' : ''}`;
  };

  const getHealthStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'excellent': return '#28a745';
      case 'good': return '#17a2b8';
      case 'fair': return '#ffc107';
      default: return '#6c757d';
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    onAddToCart?.(pet);
  };

  const handleScheduleVisit = () => {
    onScheduleVisit?.(pet);
  };

  return (
    <div className={`pet-details-overlay ${className}`}>
      <div className="pet-details-modal">
        <button className="close-button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="pet-details-content">
          <div className="pet-images-section">
            <div className="image-carousel">
              <button 
                className="carousel-btn prev" 
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                ‹
              </button>
              
              <img 
                src={images[currentImageIndex]}
                alt={`${pet.name} - Image ${currentImageIndex + 1}`}
                className="pet-detail-image"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f8f9fa"/><text x="200" y="150" text-anchor="middle" fill="%236c757d" font-size="64">${getSpeciesEmoji(pet.species)}</text></svg>`;
                }}
              />
              
              <button 
                className="carousel-btn next" 
                onClick={handleNextImage}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
            
            <div className="image-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>

            {!pet.isAvailable && (
              <div className="unavailable-banner">
                <span>🚫 Not Available</span>
              </div>
            )}
          </div>

          <div className="pet-info-section">
            <div className="pet-header">
              <div className="pet-title">
                <h1 className="pet-name">{pet.name}</h1>
                <div className="pet-species-badge">
                  <span className="species-emoji">{getSpeciesEmoji(pet.species)}</span>
                  <span>{pet.species}</span>
                </div>
              </div>
              
              <div className="pet-price">
                <span className="price-label">Price</span>
                <span className="price-amount">${pet.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="pet-basic-info">
              <div className="info-grid">
                <div className="info-item">
                  <label>Breed</label>
                  <span>{pet.breed}</span>
                </div>
                <div className="info-item">
                  <label>Age</label>
                  <span>{getAgeText(pet.age)}</span>
                </div>
                <div className="info-item">
                  <label>Gender</label>
                  <span>{pet.gender}</span>
                </div>
                <div className="info-item">
                  <label>Size</label>
                  <span>{pet.size}</span>
                </div>
                <div className="info-item">
                  <label>Energy Level</label>
                  <span className={`energy-${pet.energyLevel.toLowerCase()}`}>
                    ⚡ {pet.energyLevel}
                  </span>
                </div>
                <div className="info-item">
                  <label>Health Status</label>
                  <span 
                    className="health-status" 
                    style={{ color: getHealthStatusColor(pet.healthStatus) }}
                  >
                    ● {pet.healthStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="pet-description">
              <h3>About {pet.name}</h3>
              <p>{pet.description}</p>
            </div>

            <div className="pet-characteristics">
              <h3>Characteristics</h3>
              <div className="characteristics-grid">
                {pet.characteristics.map((characteristic, index) => (
                  <span key={index} className="characteristic-tag">
                    {characteristic}
                  </span>
                ))}
              </div>
            </div>

            <div className="pet-health-info">
              <h3>Health & Care Information</h3>
              <div className="health-badges">
                <div className={`health-badge ${pet.vaccinated ? 'positive' : 'negative'}`}>
                  <span className="badge-icon">{pet.vaccinated ? '💉' : '❌'}</span>
                  <span>Vaccinated</span>
                </div>
                <div className={`health-badge ${pet.spayedNeutered ? 'positive' : 'negative'}`}>
                  <span className="badge-icon">{pet.spayedNeutered ? '✅' : '❌'}</span>
                  <span>Spayed/Neutered</span>
                </div>
              </div>
            </div>

            <div className="pet-compatibility">
              <h3>Compatibility</h3>
              <div className="compatibility-info">
                <div className={`compatibility-item ${pet.goodWithKids ? 'positive' : 'negative'}`}>
                  <span className="compatibility-icon">
                    {pet.goodWithKids ? '👶' : '⚠️'}
                  </span>
                  <span>{pet.goodWithKids ? 'Good with Kids' : 'Not Suitable for Kids'}</span>
                </div>
                <div className={`compatibility-item ${pet.goodWithPets ? 'positive' : 'negative'}`}>
                  <span className="compatibility-icon">
                    {pet.goodWithPets ? '🐾' : '⚠️'}
                  </span>
                  <span>{pet.goodWithPets ? 'Good with Other Pets' : 'Prefers to be Only Pet'}</span>
                </div>
              </div>
            </div>

            <div className="pet-actions">
              {pet.isAvailable ? (
                <>
                  <button 
                    className="btn btn-primary"
                    onClick={handleAddToCart}
                  >
                    Add to Cart - ${pet.price.toLocaleString()}
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={handleScheduleVisit}
                  >
                    Schedule a Visit
                  </button>
                </>
              ) : (
                <div className="unavailable-actions">
                  <p>This pet is currently not available for adoption.</p>
                  <button className="btn btn-secondary">
                    Notify When Available
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
