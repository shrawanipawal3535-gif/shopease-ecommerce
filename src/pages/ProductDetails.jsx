import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import products from "../data/products";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedRating, setSelectedRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  const reviews = [
    {
      id: 1,
      name: "Rahul",
      rating: 5,
      comment: "Amazing product! Very good quality.",
    },
    {
      id: 2,
      name: "Priya",
      rating: 4,
      comment: "Good product and value for money.",
    },
    {
      id: 3,
      name: "Amit",
      rating: 5,
      comment: "I really liked the product. Recommended!",
    },
  ];

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found 😔</h1>

        <p>
          The product you are looking for does not exist.
        </p>

        <Link to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  const discount = product.oldPrice
    ? Math.round(
        ((product.oldPrice - product.price) /
          product.oldPrice) *
          100
      )
    : 0;

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!reviewText.trim()) {
      alert("Please write a review.");
      return;
    }

    alert("Thank you! Your review has been submitted.");

    setReviewText("");
    setSelectedRating(5);
  };

  return (
    <div className="product-details-page">

      {/* PRODUCT DETAILS */}

      <div className="product-details">

        {/* IMAGE */}

        <div className="product-image-section">

          <div className="product-main-image">
            {product.image}
          </div>

        </div>

        {/* INFORMATION */}

        <div className="product-info">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="product-rating">

            <span className="stars">
              {"★".repeat(
                Math.round(product.rating)
              )}
            </span>

            <span>
              {product.rating}
            </span>

            <span>
              ({product.reviews} reviews)
            </span>

          </div>

          <p className="product-description">
            {product.description}
          </p>

          <div className="price-section">

            <span className="current-price">
              ₹{product.price.toLocaleString()}
            </span>

            {product.oldPrice && (
              <>
                <span className="old-price">
                  ₹{product.oldPrice.toLocaleString()}
                </span>

                <span className="discount">
                  {discount}% OFF
                </span>
              </>
            )}

          </div>

          <p
            className={
              product.stock > 0
                ? "stock available"
                : "stock unavailable"
            }
          >
            {product.stock > 0
              ? `✓ ${product.stock} items available`
              : "✕ Out of stock"}
          </p>

          <div className="product-actions">

            <button
              className="add-cart-btn"
              disabled={product.stock === 0}
              onClick={() =>
                alert("Product added to cart!")
              }
            >
              Add to Cart
            </button>

            <button
              className="wishlist-btn"
              onClick={() =>
                alert("Added to wishlist!")
              }
            >
              ♡ Wishlist
            </button>

          </div>

          {/* PRODUCT INFORMATION */}

          <div className="product-specifications">

            <h3>Product Information</h3>

            <div className="spec-row">
              <span>Brand</span>
              <strong>{product.brand}</strong>
            </div>

            <div className="spec-row">
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>

            <div className="spec-row">
              <span>Availability</span>
              <strong>
                {product.stock > 0
                  ? "In Stock"
                  : "Out of Stock"}
              </strong>
            </div>

          </div>

        </div>

      </div>

      {/* REVIEWS */}

      <section className="reviews-section">

        <h2>Customer Reviews ⭐</h2>

        <div className="reviews-layout">

          {/* EXISTING REVIEWS */}

          <div className="reviews-list">

            {reviews.map((review) => (
              <div
                className="review-card"
                key={review.id}
              >

                <div className="review-header">

                  <strong>
                    {review.name}
                  </strong>

                  <span className="review-stars">
                    {"★".repeat(review.rating)}
                  </span>

                </div>

                <p>{review.comment}</p>

              </div>
            ))}

          </div>

          {/* WRITE REVIEW */}

          <div className="write-review">

            <h3>Write a Review</h3>

            <form onSubmit={handleReviewSubmit}>

              <label>Your Rating</label>

              <div className="rating-selector">

                {[1, 2, 3, 4, 5].map(
                  (number) => (
                    <button
                      type="button"
                      key={number}
                      className={
                        number <= selectedRating
                          ? "rating-star selected"
                          : "rating-star"
                      }
                      onClick={() =>
                        setSelectedRating(number)
                      }
                    >
                      ★
                    </button>
                  )
                )}

              </div>

              <label>Your Review</label>

              <textarea
                value={reviewText}
                onChange={(e) =>
                  setReviewText(e.target.value)
                }
                placeholder="Write your review..."
                rows="5"
              />

              <button
                type="submit"
                className="submit-review"
              >
                Submit Review
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* RELATED PRODUCTS */}

      {relatedProducts.length > 0 && (
        <section className="related-section">

          <h2>You May Also Like</h2>

          <div className="related-products">

            {relatedProducts.map((item) => (
              <Link
                to={`/products/${item.id}`}
                className="related-card"
                key={item.id}
              >

                <div className="related-image">
                  {item.image}
                </div>

                <h3>{item.name}</h3>

                <p>
                  ₹{item.price.toLocaleString()}
                </p>

              </Link>
            ))}

          </div>

        </section>
      )}

      {/* BACK BUTTON */}

      <div className="back-products">
        <Link to="/products">
          ← Back to Products
        </Link>
      </div>

    </div>
  );
}

export default ProductDetails;