import { Link, useNavigate } from "react-router-dom";

import { useToast } from "../context/ToastContext";

import "./Account.css";

function Account() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const user = JSON.parse(
    localStorage.getItem("shopease-user") || "null"
  );

  const orders = JSON.parse(
    localStorage.getItem("shopease-orders") || "[]"
  );

  const handleLogout = () => {
    localStorage.removeItem("shopease-user");

    showToast("Logged out successfully");

    navigate("/login");
  };

  if (!user) {
    return (
      <div className="account-empty">

        <h1>My Account 👤</h1>

        <p>
          Please login to view your account.
        </p>

        <Link to="/login">
          Login
        </Link>

      </div>
    );
  }

  return (
    <div className="account-page">

      <h1>My Account 👤</h1>

      <div className="account-card">

        <div className="account-avatar">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        <h2>{user.name}</h2>

        <p>{user.email}</p>

      </div>

      <div className="account-actions">

        <Link to="/orders">
          📦 My Orders
        </Link>

        <Link to="/wishlist">
          ❤️ My Wishlist
        </Link>

        <Link to="/cart">
          🛒 My Cart
        </Link>

      </div>

      <div className="account-summary">

        <div>
          <strong>{orders.length}</strong>
          <span>Orders</span>
        </div>

        <div>
          <strong>✓</strong>
          <span>Account Active</span>
        </div>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
}

export default Account;