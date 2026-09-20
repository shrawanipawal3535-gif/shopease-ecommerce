import { Link } from "react-router-dom";
import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaShoppingCart,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useCart();

  const deliveryCharge = cartTotal >= 1000 ? 0 : 99;

  const finalTotal = cartTotal + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <FaShoppingCart size={50} />

        <h1>Your Cart is Empty</h1>

        <p>
          Add some products to your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <div className="cart-header">
        <h1>Shopping Cart</h1>

        <button
          className="clear-cart"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="cart-container">

        <div className="cart-items">

          {cartItems.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >

              <div className="cart-image">
                {item.image}
              </div>

              <div className="cart-info">
                <h2>{item.name}</h2>

                <p>{item.category}</p>

                <strong>
                  ₹{item.price.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  <FaMinus />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  <FaPlus />
                </button>

              </div>

              <button
                className="remove-item"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                <FaTrash />
              </button>

            </div>
          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div>
            <span>Subtotal</span>

            <strong>
              ₹{cartTotal.toLocaleString("en-IN")}
            </strong>
          </div>

          <div>
            <span>Delivery</span>

            <strong>
              {deliveryCharge === 0
                ? "FREE"
                : `₹${deliveryCharge}`}
            </strong>
          </div>

          <hr />

          <div className="cart-total">
            <span>Total</span>

            <strong>
              ₹{finalTotal.toLocaleString("en-IN")}
            </strong>
          </div>

          <Link
  to="/checkout"
  className="checkout-btn"
>
  Proceed to Checkout
</Link>

        </div>

      </div>
    </div>
  );
}

export default Cart;