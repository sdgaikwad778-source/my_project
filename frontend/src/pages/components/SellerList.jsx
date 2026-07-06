import { useEffect, useState } from "react";

function SellerList()
{
    const[product, setProduct] = useState([])
   useEffect(() =>{
     fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => {
        setProduct(res.products)
    })
   },[])
    return (
        <>
        <div className="container mt-4">
            <div className="row g-2">
              {
                product.map(p=> (
                      <div className="col-4">
                    <div className="card text-center" style={{width:"400px"}}>
                        <h4>{p.title}</h4>
                        <p>{p.description}</p>
                        <p>{p.price}</p>
                    </div>
                </div>
                ))
              }
            </div>
        </div>
        </>
    )
}
export default SellerList;