import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

function ProductSection() {
    const [products, setProducts] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };

    return (
        <section className="mt-3 bg-light py-4">
            <div className="container">

                {/* Heading & Buttons */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Products</h3>

                    <div>
                        <button
                            className="btn btn-outline-dark me-2"
                            onClick={scrollLeft}
                        >
                            <i className="bi bi-arrow-left-circle"></i>
                        </button>

                        <button
                            className="btn btn-outline-dark"
                            onClick={scrollRight}
                        >
                            <i className="bi bi-arrow-right-circle"></i>
                        </button>
                    </div>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="d-flex overflow-auto"
                    style={{
                        gap: "20px",
                        scrollBehavior: "smooth",
                        scrollbarWidth: "none",
                    }}
                >
                    {products.map((p) => (
                        <div
                            key={p.id}
                            style={{
                                minWidth: "18rem",
                                flexShrink: 0,
                            }}
                        >
                            <Link
                                to={"/product/details/" + p.id}
                                className="text-decoration-none text-dark"
                            >
                                <div className="card h-100 p-3">
                                    <img
                                        src={p.thumbnail}
                                        alt={p.title}
                                        className="card-img-top"
                                        style={{
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <div className="card-body">
                                        <h5>{p.title}</h5>
                                        <p className="fw-bold">${p.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ProductSection;