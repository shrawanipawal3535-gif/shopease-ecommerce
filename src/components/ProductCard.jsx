import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import {
  useWishlist,
} from "../context/WishlistContext";
import { useToast } from "../context/ToastContext";

import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const { showToast } = useToast();

  const handleCart = () => {
    addToCart(product);
    showToast("Product added to cart!");
  };

  const handleWishlist = () => {
    const alreadyAdded = isInWishlist(product.id);

    toggleWishlist(product);

    showToast(
      alreadyAdded
        ? "Removed from wishlist"
        : "Added to wishlist ❤️"
    );
  };

  return (
    <div className="product-card">

      <div className="product-card-image">

        <span>{product.image}</span>

        <button
          className={`wishlist-icon ${
            isInWishlist(product.id)
              ? "wishlist-active"
              : ""
          }`}
          onClick={handleWishlist}
        >
          <FaHeart />
        </button>

      </div>

      <div className="product-card-info">

        <p className="product-card-category">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-card-name"
        >
          {product.name}
        </Link>

        <div className="product-card-rating">
          <FaStar />
          <span>
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="product-card-price">
          <strong>
            ₹{product.price.toLocaleString("en-IN")}
          </strong>

          {product.oldPrice && (
            <span>
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <button
          className="product-card-cart"
          onClick={handleCart}
        >
          <FaShoppingCart />
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;