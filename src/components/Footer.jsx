import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>ShopEase</h2>

          <p>
            Your one-stop destination for
            quality products and easy shopping.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-section">
          <h3>Account</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/account">My Account</Link>
          <Link to="/orders">My Orders</Link>
        </div>

        <div className="footer-section">
          <h3>Support</h3>

          <p>Fast Delivery</p>
          <p>Secure Shopping</p>
          <p>24/7 Customer Support</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ShopEase. All Rights Reserved.
        </p>

        <p>
          Built with React.js ❤️
        </p>
      </div>

    </footer>
  );
}

export default Footer;