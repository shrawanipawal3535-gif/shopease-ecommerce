import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaTshirt,
  FaHome,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

import "./Home.css";

function Home() {
  const categories = [
    {
      name: "Electronics",
      icon: <FaLaptop />,
    },
    {
      name: "Fashion",
      icon: <FaTshirt />,
    },
    {
      name: "Home",
      icon: <FaHome />,
    },
    {
      name: "Accessories",
      icon: <FaShoppingBag />,
    },
  ];

  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO SHOPEASE</p>

          <h1>
            Everything You Need,
            <span> All in One Place.</span>
          </h1>

          <p className="hero-description">
            Discover quality products, amazing deals and
            a seamless shopping experience designed for you.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-button">
              Shop Now
            </Link>

            <Link to="/products" className="secondary-button">
              Explore Products
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            🛍️
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-heading">
          <p>SHOP BY CATEGORY</p>
          <h2>Find What You Need</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={`/products?category=${category.name}`}
              className="category-card"
              key={category.name}
            >
              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="feature-card">
          <FaTruck />
          <div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery.</p>
          </div>
        </div>

        <div className="feature-card">
          <FaShieldAlt />
          <div>
            <h3>Secure Shopping</h3>
            <p>Your shopping experience is protected.</p>
          </div>
        </div>

        <div className="feature-card">
          <FaHeadset />
          <div>
            <h3>24/7 Support</h3>
            <p>We're here whenever you need help.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div>
          <p>READY TO SHOP?</p>
          <h2>Discover Your Next Favorite Product</h2>
          <p>
            Explore our collection and find products
            made for your everyday needs.
          </p>
        </div>

        <Link to="/products" className="cta-button">
          Start Shopping
        </Link>
      </section>

    </main>
  );
}

export default Home;