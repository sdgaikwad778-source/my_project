import { useEffect, useState } from "react";
import { Link } from "react-router";


function ProductSection() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res.products);
            });
    }, []);

    return (
        <section className="mt-3 bg-light">
            <div className="container p-4">
                <div className="row g-1">
                    {products.map(p => (
                        <div className="col-3">
                           <Link to = {"/product/details/" + p.id} >
                                <div className="card p-3 h-100" style={{width:"18rem"}}>
                                <img src={p.thumbnail} alt={p.title} className="img-fluid" style={{width:"300px", height:"200px"}} />
                                <h4>{p.title}</h4>
                                <p>${p.price}</p>
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