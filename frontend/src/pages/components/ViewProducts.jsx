import { useEffect, useState } from "react";

function ViewProducts()
{
    const[products, Setproducts] = useState([])

   useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(res => {
            Setproducts(res.products);
        });
}, []);

    

    
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-8 offset-2">
                   <div className="d-flex  mb-2">
                   </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(p =>(
                                    <tr>
                                <img src={p.thumbnail} alt={p.title} width="150" />
                                <td>{p.title}</td>
                                <td>{p.description}</td>
                                <td>{p.price}</td>
                            </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default ViewProducts;