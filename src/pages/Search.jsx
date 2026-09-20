import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/products";
import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");

  const results = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="search-page">

      <h1>Search Products 🔎</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      {query && (
        <p className="search-result-text">
          {results.length} product(s) found
        </p>
      )}

      <div className="search-results">

        {results.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="search-result-card"
          >
            <span>
              {product.image}
            </span>

            <div>
              <h2>{product.name}</h2>

              <p>{product.category}</p>

              <strong>
                ₹{product.price.toLocaleString("en-IN")}
              </strong>
            </div>
          </Link>
        ))}

      </div>

      {query && results.length === 0 && (
        <div className="no-search-results">
          <h2>No products found</h2>
          <p>Try another search.</p>
        </div>
      )}

    </div>
  );
}

export default Search;