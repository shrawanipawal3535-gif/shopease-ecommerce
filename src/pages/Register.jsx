import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useToast } from "../context/ToastContext";
import "./Login.css";

function Register() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "shopease-user",
      JSON.stringify({
        name,
        email,
      })
    );

    showToast("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>Create Account ✨</h1>

        <p>Join ShopEase today</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;