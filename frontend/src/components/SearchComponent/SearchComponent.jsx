import { useEffect, useState } from "react";
import "./SearchComponent.css";

const MOCK_PRODUCTS = [
  { id: 1, title: "Apple iPhone 15 Pro", category: "Electronics", price: "$999" },
  { id: 2, title: "Apple MacBook Pro M3", category: "Electronics", price: "$1999" },
  { id: 3, title: "Samsung Galaxy S24 Ultra", category: "Electronics", price: "$1199" },
  { id: 4, title: "Sony WH-1000XM5 Headphones", category: "Audio", price: "$399" },
  { id: 5, title: "Logitech MX Master 3S Mouse", category: "Accessories", price: "$99" },
  { id: 6, title: "Dell UltraSharp 27", category: "Monitors", price: "$499" },
];

function SearchComponent() {
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const uniqueCategories = [];

    MOCK_PRODUCTS.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category);
      }
    });

    setCategories(uniqueCategories);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    if (value === "") {
      setResults([]);
      return;
    }

    const filteredProducts = MOCK_PRODUCTS.filter((product) =>
      product.title.toLowerCase().includes(value)
    );

    setResults(filteredProducts);
  };

  return (
    <div className="search-container">

      <select className="mt-2">
        <option>All Categories</option>

        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch} className="mt-2"
      />

      <ul>
        {results.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> <br />
            {product.category} | {product.price}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SearchComponent;