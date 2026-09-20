import { FaHeart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useWishlist } from "../context/WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-page empty-wishlist">
        <FaHeart size={50} />

        <h1>Your Wishlist is Empty</h1>

        <p>
          Save your favorite products here.
        </p>

        <Link to="/products">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">

      <h1>My Wishlist ❤️</h1>

      <p className="wishlist-count">
        {wishlistItems.length} product(s) saved
      </p>

      <div className="wishlist-grid">

        {wishlistItems.map((product) => (
          <div
            className="wishlist-card"
            key={product.id}
          >

            <div className="wishlist-image">
              {product.image}
            </div>

            <h2>{product.name}</h2>

            <p>{product.category}</p>

            <strong>
              ₹{product.price.toLocaleString("en-IN")}
            </strong>

            <div className="wishlist-actions">

              <Link
                to={`/products/${product.id}`}
                className="view-product"
              >
                View Product
              </Link>

              <button
                onClick={() =>
                  removeFromWishlist(product.id)
                }
              >
                <FaTrash />
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Wishlist;