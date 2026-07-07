import { useEffect, useState } from "react";

function CategoryBar() {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/category-list")
            .then(res => res.json())
            .then(res => setProducts(res));
    }, []);

    return (
        <section className="bg-light">
            <div className="container" style={{height:"200px", overflow:"hidden"}}>
                <div className="row h-100" style={{overflow:"scroll"}}>
                    {product.map((p) => (
                        <div className="col-3 g-3">
                            <div className="card p-3">
                                <p>{p}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryBar;