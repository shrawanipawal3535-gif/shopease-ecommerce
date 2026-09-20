import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

import "./Products.css";

function Products() {
  const [searchParams] = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState(categoryFromUrl);

  const [brand, setBrand] = useState("All");

  const [maxPrice, setMaxPrice] =
    useState("All");

  const [rating, setRating] =
    useState("All");

  const [stock, setStock] =
    useState("All");

  const [sort, setSort] =
    useState("default");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const brands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    /* Search */
    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    /* Category */
    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category === category
      );
    }

    /* Brand */
    if (brand !== "All") {
      result = result.filter(
        (product) =>
          product.brand === brand
      );
    }

    /* Price */
    if (maxPrice !== "All") {
      result = result.filter(
        (product) =>
          product.price <= Number(maxPrice)
      );
    }

    /* Rating */
    if (rating !== "All") {
      result = result.filter(
        (product) =>
          product.rating >= Number(rating)
      );
    }

    /* Stock */
    if (stock === "in-stock") {
      result = result.filter(
        (product) => product.stock > 0
      );
    }

    if (stock === "out-of-stock") {
      result = result.filter(
        (product) => product.stock === 0
      );
    }

    /* Sorting */
    if (sort === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating-high") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [
    search,
    category,
    brand,
    maxPrice,
    rating,
    stock,
    sort,
  ]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setMaxPrice("All");
    setRating("All");
    setStock("All");
    setSort("default");
  };

  return (
    <div className="products-page">

      <div className="products-header">

        <h1>All Products</h1>

        <p>
          Find the perfect products for you.
        </p>

      </div>

      {/* FILTER SECTION */}

      <div className="filters">

        {/* Search */}

        <div className="filter-group search-filter">

          <label>Search</label>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Category */}

        <div className="filter-group">

          <label>Category</label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Brand */}

        <div className="filter-group">

          <label>Brand</label>

          <select
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
          >
            {brands.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Price */}

        <div className="filter-group">

          <label>Maximum Price</label>

          <select
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
          >
            <option value="All">
              Any Price
            </option>

            <option value="1000">
              Under ₹1,000
            </option>

            <option value="5000">
              Under ₹5,000
            </option>

            <option value="10000">
              Under ₹10,000
            </option>

            <option value="50000">
              Under ₹50,000
            </option>
          </select>

        </div>

        {/* Rating */}

        <div className="filter-group">

          <label>Minimum Rating</label>

          <select
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
          >
            <option value="All">
              Any Rating
            </option>

            <option value="4">
              ⭐ 4+
            </option>

            <option value="4.5">
              ⭐ 4.5+
            </option>

            <option value="4.8">
              ⭐ 4.8+
            </option>
          </select>

        </div>

        {/* Stock */}

        <div className="filter-group">

          <label>Availability</label>

          <select
            value={stock}
            onChange={(e) =>
              setStock(e.target.value)
            }
          >
            <option value="All">
              All Products
            </option>

            <option value="in-stock">
              In Stock
            </option>

            <option value="out-of-stock">
              Out of Stock
            </option>
          </select>

        </div>

        {/* Sort */}

        <div className="filter-group">

          <label>Sort By</label>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="default">
              Default
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="rating-high">
              Highest Rated
            </option>

            <option value="name">
              Name A-Z
            </option>
          </select>

        </div>

        {/* Clear */}

        <button
          className="clear-filters"
          onClick={clearFilters}
        >
          Clear Filters
        </button>

      </div>

      {/* RESULT COUNT */}

      <div className="products-result">

        <strong>
          {filteredProducts.length}
        </strong>{" "}
        products found

      </div>

      {/* PRODUCTS */}

      {filteredProducts.length === 0 ? (

        <div className="no-products">

          <h2>No Products Found 😔</h2>

          <p>
            Try changing your filters.
          </p>

          <button
            onClick={clearFilters}
          >
            Clear Filters
          </button>

        </div>

      ) : (

        <div className="products-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      )}

    </div>
  );
}

export default Products;