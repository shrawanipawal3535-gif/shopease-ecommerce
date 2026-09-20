import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useToast } from "../context/ToastContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: email.split("@")[0],
      email: email,
    };

    localStorage.setItem(
      "shopease-user",
      JSON.stringify(user)
    );

    showToast("Login successful!");

    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Welcome Back 👋</h1>

        <p>Login to your ShopEase account</p>

        <form onSubmit={handleSubmit}>

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
            Login
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?

          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;