import React, { useState, useMemo } from 'react';
import { PetCard, PetDetails } from '../components/pet';
import { samplePets } from '../data/samplePets';
import { Pet } from '../types/Pet';
import './PetsPage.css';

const PetsPage: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 5000 });
  const [showAvailableOnly, setShowAvailableOnly] = useState(true);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'age'>('name');

  // Get unique species for filter dropdown
  const uniqueSpecies = useMemo(() => {
    return Array.from(new Set(samplePets.map(pet => pet.species)));
  }, []);

  // Get unique sizes for filter dropdown
  const uniqueSizes = useMemo(() => {
    return Array.from(new Set(samplePets.map(pet => pet.size)));
  }, []);

  // Filter and sort pets based on current filters
  const filteredPets = useMemo(() => {
    let filtered = samplePets.filter(pet => {
      const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pet.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSpecies = selectedSpecies === 'all' || pet.species === selectedSpecies;
      const matchesSize = selectedSize === 'all' || pet.size === selectedSize;
      const matchesPrice = pet.price >= priceRange.min && pet.price <= priceRange.max;
      const matchesAvailability = !showAvailableOnly || pet.isAvailable;

      return matchesSearch && matchesSpecies && matchesSize && matchesPrice && matchesAvailability;
    });

    // Sort pets
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'age':
          return a.age - b.age;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [samplePets, searchTerm, selectedSpecies, selectedSize, priceRange, showAvailableOnly, sortBy]);

  const handleViewDetails = (pet: Pet) => {
    setSelectedPet(pet);
  };

  const handleCloseDetails = () => {
    setSelectedPet(null);
  };

  const handleAddToCart = (pet: Pet) => {
    console.log('Add to cart:', pet.name);
    // This would typically add the pet to the shopping cart
  };

  const handleScheduleVisit = (pet: Pet) => {
    console.log('Schedule visit for:', pet.name);
    // This would typically open a scheduling form or modal
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSpecies('all');
    setSelectedSize('all');
    setPriceRange({ min: 0, max: 5000 });
    setShowAvailableOnly(true);
    setSortBy('name');
  };

  return (
    <div className="pets-page">
      <div className="container">
        <div className="page-header">
          <h1>Find Your Perfect Pet</h1>
          <p>Browse our complete collection of loving pets looking for their forever homes</p>
        </div>

        <div className="filters-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name, breed, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filters-grid">
            <div className="filter-group">
              <label htmlFor="species-filter">Species:</label>
              <select
                id="species-filter"
                value={selectedSpecies}
                onChange={(e) => setSelectedSpecies(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Species</option>
                {uniqueSpecies.map(species => (
                  <option key={species} value={species}>{species}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="size-filter">Size:</label>
              <select
                id="size-filter"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Sizes</option>
                {uniqueSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort-filter">Sort by:</label>
              <select
                id="sort-filter"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'age')}
                className="filter-select"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="age">Age</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="price-range">Max Price: ${priceRange.max}</label>
              <input
                id="price-range"
                type="range"
                min="0"
                max="5000"
                step="50"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="price-slider"
              />
            </div>

            <div className="filter-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                />
                <span className="checkmark"></span>
                Available only
              </label>
            </div>

            <div className="filter-group">
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className="results-section">
          <div className="results-header">
            <h2>
              {filteredPets.length} Pet{filteredPets.length !== 1 ? 's' : ''} Found
            </h2>
            {filteredPets.length === 0 && (
              <div className="no-results">
                <p>🐾 No pets match your current filters.</p>
                <p>Try adjusting your search criteria or clearing filters.</p>
              </div>
            )}
          </div>

          <div className="pets-grid">
            {filteredPets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                onViewDetails={handleViewDetails}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
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
    </div>
  );
};

export default PetsPage;
