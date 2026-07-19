import { useEffect, useRef, useState } from "react";
import "./ProductSlider.css";

function ProductSlider() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const slideRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const slideLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-wrapper">
      <button className="left-btn" onClick={slideLeft}>
        &#10094;
      </button>

      <div className="product-slider" ref={scrollRef}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <h3 className="text-center mt-2">{product.title}</h3>

            <p className=" text-center">{product.description}</p>

            <h4 className="text-center">${product.price}</h4>

            <button className="btn btn-success ">Buy Now</button>
          </div>
        ))}
      </div>

      <button className="right-btn btn" onClick={slideRight}>
        &#10095;
      </button>
    </div>
  );
}

export default ProductSlider;