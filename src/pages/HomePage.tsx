import React from "react";
import { Link } from "react-router-dom";
import { PetShowcase } from "../components/common";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <section className="hero">
            <h2>Welcome to Our Fictional Pet Store</h2>
            <p>
              Discover comprehensive pet sales and maintenance services for
              current and potential pet owners. This is a demonstration website
              showcasing modern web development practices.
            </p>
          </section>

          <section className="features">
            <div className="feature-grid">
              <Link to="/pets" className="feature-card">
                <h3>🐕 Pet Sales</h3>
                <p>
                  Wide variety of pets including dogs, cats, birds, fish,
                  reptiles, and small mammals
                </p>
              </Link>

              <Link to="/services" className="feature-card">
                <h3>✂️ Pet Care Services</h3>
                <p>
                  Professional grooming, veterinary care, training, and boarding
                  services
                </p>
              </Link>

              <Link to="/supplies" className="feature-card">
                <h3>🧸 Pet Supplies</h3>
                <p>
                  Premium food, toys, accessories, and health products for your
                  beloved pets
                </p>
              </Link>

              <Link to="/expert-guidance" className="feature-card">
                <h3>💡 Expert Guidance</h3>
                <p>
                  Helping potential pet owners choose the perfect companion for
                  their lifestyle
                </p>
              </Link>
            </div>
          </section>

          <section className="disclaimer">
            <div className="disclaimer-box">
              <h3>⚠️ Important Notice</h3>
              <p>
                <strong>
                  This is a fictional business for demonstration purposes only.
                </strong>
                <br />
                No real pets are being sold and no actual services are provided.
              </p>
            </div>
          </section>
        </div>
      </main>

      <PetShowcase />
    </>
  );
};

export default HomePage;
