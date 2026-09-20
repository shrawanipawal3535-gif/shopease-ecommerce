import { Link } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

import "./Checkout.css";

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { showToast } = useToast();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const delivery = cartTotal >= 1000 ? 0 : 99;
  const total = cartTotal + delivery;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newOrder = {
    id: Date.now(),
    date: new Date().toLocaleDateString("en-IN"),
    items: cartItems,
    subtotal: cartTotal,
    delivery: delivery,
    total: total,
    customer: form,
  };

  const existingOrders = JSON.parse(
    localStorage.getItem("shopease-orders") || "[]"
  );

  localStorage.setItem(
    "shopease-orders",
    JSON.stringify([
      newOrder,
      ...existingOrders,
    ])
  );

  setOrderPlaced(true);

  clearCart();

  showToast("Order placed successfully!");
};

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <h1>🎉 Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with ShopEase.
        </p>

        <Link to="/products">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h1>Your Cart is Empty</h1>

        <Link to="/products">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>Delivery Information</h2>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <input
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            required
          />

          <h2>Payment Method</h2>

          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit / Debit Card</option>
          </select>

          <button type="submit">
            Place Order
          </button>
        </form>

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                ₹{(
                  item.price * item.quantity
                ).toLocaleString("en-IN")}
              </strong>
            </div>
          ))}

          <hr />

          <div>
            <span>Subtotal</span>
            <strong>
              ₹{cartTotal.toLocaleString("en-IN")}
            </strong>
          </div>

          <div>
            <span>Delivery</span>
            <strong>
              {delivery === 0
                ? "FREE"
                : `₹${delivery}`}
            </strong>
          </div>

          <div className="checkout-total">
            <span>Total</span>
            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;