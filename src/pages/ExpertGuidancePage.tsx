import React from 'react';
import './ExpertGuidancePage.css';

const ExpertGuidancePage: React.FC = () => {
  return (
    <div className="expert-guidance-page">
      <div className="container">
        <header className="page-header">
          <h1>💡 Expert Pet Guidance</h1>
          <p>Professional advice to help you choose and care for your perfect pet companion</p>
        </header>

        <section className="guidance-intro">
          <div className="intro-content">
            <h2>Choosing the Right Pet for Your Lifestyle</h2>
            <p>
              Finding the perfect pet companion is one of life's most rewarding decisions. Our expert guidance 
              helps match you with a pet that fits your lifestyle, living situation, and personal preferences.
            </p>
          </div>
        </section>

        <section className="guidance-categories">
          <div className="category-grid">
            <div className="category-card">
              <h3>🏠 Living Situation Assessment</h3>
              <ul>
                <li>Apartment vs. house considerations</li>
                <li>Space requirements for different pets</li>
                <li>Yard and outdoor access needs</li>
                <li>Rental property pet policies</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>⏰ Time & Commitment</h3>
              <ul>
                <li>Daily care requirements</li>
                <li>Exercise and activity needs</li>
                <li>Training time investments</li>
                <li>Long-term commitment considerations</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>💰 Budget Planning</h3>
              <ul>
                <li>Initial adoption/purchase costs</li>
                <li>Monthly food and supply expenses</li>
                <li>Veterinary care budgeting</li>
                <li>Emergency medical fund planning</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>👨‍👩‍👧‍👦 Family Considerations</h3>
              <ul>
                <li>Pet allergies and sensitivities</li>
                <li>Child-friendly pet options</li>
                <li>Multi-pet household dynamics</li>
                <li>Age-appropriate pet choices</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pet-types">
          <h2>Pet Type Recommendations</h2>
          <div className="pet-type-grid">
            <div className="pet-type-card">
              <h3>🐕 Dogs</h3>
              <p><strong>Best for:</strong> Active families, those wanting loyal companions</p>
              <p><strong>Consider:</strong> Daily walks, training needs, social requirements</p>
              <p><strong>Time commitment:</strong> High</p>
            </div>

            <div className="pet-type-card">
              <h3>🐱 Cats</h3>
              <p><strong>Best for:</strong> Busy professionals, apartment dwellers</p>
              <p><strong>Consider:</strong> Independent nature, litter box maintenance</p>
              <p><strong>Time commitment:</strong> Moderate</p>
            </div>

            <div className="pet-type-card">
              <h3>🐦 Birds</h3>
              <p><strong>Best for:</strong> Those wanting intelligent, social pets</p>
              <p><strong>Consider:</strong> Noise levels, specialized diet, mental stimulation</p>
              <p><strong>Time commitment:</strong> Moderate to High</p>
            </div>

            <div className="pet-type-card">
              <h3>🐠 Fish</h3>
              <p><strong>Best for:</strong> Beginners, limited space situations</p>
              <p><strong>Consider:</strong> Tank maintenance, water quality monitoring</p>
              <p><strong>Time commitment:</strong> Low</p>
            </div>

            <div className="pet-type-card">
              <h3>🐹 Small Mammals</h3>
              <p><strong>Best for:</strong> Children learning responsibility, small spaces</p>
              <p><strong>Consider:</strong> Shorter lifespans, specific habitat needs</p>
              <p><strong>Time commitment:</strong> Low to Moderate</p>
            </div>

            <div className="pet-type-card">
              <h3>🦎 Reptiles</h3>
              <p><strong>Best for:</strong> Experienced pet owners, unique pet enthusiasts</p>
              <p><strong>Consider:</strong> Specialized heating, UV lighting, exotic vet needs</p>
              <p><strong>Time commitment:</strong> Moderate</p>
            </div>
          </div>
        </section>

        <section className="consultation-cta">
          <div className="cta-content">
            <h2>Need Personalized Guidance?</h2>
            <p>
              Our fictional expert consultation service would help you make the perfect choice for your unique situation.
            </p>
            <div className="disclaimer-notice">
              <strong>⚠️ Demonstration Only:</strong> This is a fictional service for web development showcase purposes.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExpertGuidancePage;
