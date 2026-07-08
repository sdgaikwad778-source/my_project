import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetailPage() {
  const [product, setProduct] = useState({})
  const{id} = useParams();

  useEffect(() => {
    fetch('https://dummyjson.com/products/' + id)
      .then(res => res.json())
      .then(res => {
        setProduct(res); 
      })
  }, []); 

  

  return (
    <>
     <div className="container mt-5">
        <div className="row">
            <div className="col-6">
                {
                    product?.images?.map(img =>(
                        <img src={img} alt="" className="img-fluid"/>
                    ))
                }
            </div>
            <div className="col-6">
              {
                product?.reviews?.map(r =>(
                   <div className=" border-bottom p-3">
                     <p>{r.reviewerName}</p>
                     <p>{r.reviewerEmail}</p>
                     <p>{
                       Array.from({length:r.rating}).map(n =>(
                            <span><i class="bi bi-star"></i></span>
                        ))
                        }
                        </p>
                   </div>
                ))
              }
            </div>
        </div>
     </div>
    </>
  );
}

export default ProductDetailPage;