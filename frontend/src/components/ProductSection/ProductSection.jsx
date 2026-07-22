import { useRef } from "react";
import ProductSlider from "../ProductSlider/ProductSlider";

const ProductSection = () => {

     const products = [
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5},
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5},
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5},
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5},
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5},
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5},
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5},
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5},
        { name:"demo1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",rating:5}
    ]

    const scrollref = useRef(null)

    const handleNext = ()=>{
       scrollref.current.scrollBy({left:300,behavior: 'smooth'})
    }
    const handlePrev = ()=>{
        scrollref.current.scrollBy({left:-300,behavior: 'smooth'})
    }
    return ( 
        <div className="product-section w-100">
           <div className="d-flex justify-content-between w-100" style={{padding:"25px 50px 0"}}>
                <h4>Section title</h4>
                <div>
                    <button className="arrow arrow-left" onClick={handlePrev}>
                    <i class="bi bi-arrow-left-short"></i></button>
                    <button className="arrow arrow-right" onClick={handleNext}>
                    <i class="bi bi-arrow-right-short"></i></button>
                </div>
           </div>
          <ProductSlider products={products} scrollref={scrollref}/>
            
        </div>
     );
}
 
export default ProductSection;