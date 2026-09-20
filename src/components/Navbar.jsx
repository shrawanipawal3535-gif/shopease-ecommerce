import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";

    setDarkMode(!darkMode);

    localStorage.setItem("theme", newTheme);

    document.body.classList.toggle(
      "dark-theme",
      newTheme === "dark"
    );
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <NavLink to="/" className="logo">
        ShopEase
      </NavLink>

      {/* Navigation */}
      <div className="nav-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FaShoppingBag />
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FaHeart />
          <span>Wishlist</span>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FaShoppingCart />
          <span>Cart</span>
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FaUser />
          <span>Account</span>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FaSearch />
          <span>Search</span>
        </NavLink>

        {/* Theme Button */}
        <button
          type="button"
          className="theme-btn"
          onClick={toggleTheme}
          title={
            darkMode
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;