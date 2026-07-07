import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetailPage() {
  const [product, setProduct] = useState({})
  const{id} = useParams();

  useEffect(() => {
    fetch('https://dummyjson.com/products/' + id)
      .then(res => res.json())
      .then(data => {
        setProduct(data); 
      })
  }, []); 

  

  return (
    <>
      <div className="container mt-5 bg-light">
        <div className="row">
             <div className="col-6">
            <img src={product.images} alt={product.title} className="img-fluid" />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
             <h3>{product.title}</h3>
            <p className="text-center ">{product.description}</p>
            <div className="d-flex justify-content-between w-75">
                <button className="btn btn-success w-50 me-3">{product.price}</button>
                <button className="btn btn-success w-50 ">{product.rating}</button>
            </div>
            <label htmlFor="">Brand</label>
            <p className="mt-3">{product.brand}</p>
          </div>
         </div>
      </div>
    </>
  );
}

export default ProductDetailPage;