import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <h1>About ShopEase</h1>

        <p>
          A modern React-based e-commerce
          application built to provide a simple,
          fast and user-friendly shopping experience.
        </p>

      </section>

      <section className="about-grid">

        <div className="about-card">
          <h2>🎯 Our Mission</h2>

          <p>
            To create a simple and enjoyable
            online shopping experience with
            modern web technologies.
          </p>
        </div>

        <div className="about-card">
          <h2>⚡ Fast Experience</h2>

          <p>
            ShopEase is designed with React.js
            and optimized for a smooth user
            experience.
          </p>
        </div>

        <div className="about-card">
          <h2>🔒 Secure Shopping</h2>

          <p>
            The application provides a clean
            and structured shopping workflow
            from products to checkout.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;