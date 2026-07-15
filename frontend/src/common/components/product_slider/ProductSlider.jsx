import { useRef } from "react";
import "./productslider.css"

function ProductSlider()
{
    const products = [
  { id: 1, name: 'Product A', price: '$20', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfXrbQX3aHCDfRiqzBKuJgdmthPgXPZ6yl7E4kjEOXA&s=10" },
  { id: 2, name: 'Product B', price: '$35', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfXrbQX3aHCDfRiqzBKuJgdmthPgXPZ6yl7E4kjEOXA&s=10" },
  { id: 3, name: 'Product C', price: '$50', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfXrbQX3aHCDfRiqzBKuJgdmthPgXPZ6yl7E4kjEOXA&s=10" },
  { id: 4, name: 'Product D', price: '$15', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfXrbQX3aHCDfRiqzBKuJgdmthPgXPZ6yl7E4kjEOXA&s=10" },
   { id: 4, name: 'Product D', price: '$15', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfXrbQX3aHCDfRiqzBKuJgdmthPgXPZ6yl7E4kjEOXA&s=10" },
    { id: 4, name: 'Product D', price: '$15', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfXrbQX3aHCDfRiqzBKuJgdmthPgXPZ6yl7E4kjEOXA&s=10" },
];
const scrollRef = useRef(null)

const scrollLeft = () => {
  scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollRight = () => {
  scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
};
    return(
        <>
       <section className="p-5">
         <div className="d-flex justify-content-between mt-3">
            <h1>
                Hot Deals !
            </h1>
           <div>
            <button onClick={scrollLeft} className="btn fs-3"><i class="bi bi-arrow-left-circle"></i></button>
               <button onClick={scrollRight} className="btn fs-3"><i class="bi bi-arrow-right-circle"></i></button>
           </div>
        </div>
        <div className="scroll-container" ref={scrollRef}>
           {
            products.map(p =>(
                 <div  className="productcard">
                    <img src={p.img} alt="" />
                <h4>{p.name}</h4>
                <p>{p.price}</p>
            </div>
            ))
           }
        </div>
       </section>
        </>
    )
}
export default ProductSlider;