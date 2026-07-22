import { useState } from "react"
import "./imagecarousel.css"
const ImageCarousel = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://img.magnific.com/premium-psd/x-standee-banner-mockup_196898-1932.jpg?semt=ais_hybrid&w=740&q=80",
        "https://www.mockupcloud.com/uploads/thumbs/images/2025/03/08/AI_banner_COVER_envato_1-1170x780.jpeg"
    ]

    const handleNext = ()=>{
        if(currentIndex<images.length-1){
            setCurrentIndex(currentIndex+1)
        }else{
             setCurrentIndex(0)
        }
        
    }
    const handlePrev = ()=>{
         if(currentIndex>0){
            setCurrentIndex(currentIndex-1)
         }else{
            setCurrentIndex(images.length-1)
         }
    }
    return ( 
        <>
           <div className="carousel-container">
             <button className="arrow arrow-right" onClick={handleNext}>
                <i class="bi bi-arrow-right-short"></i></button>
             <button className="arrow arrow-left" onClick={handlePrev}>
                <i class="bi bi-arrow-left-short"></i></button>
              <div className="carousel-slide">
                    <img src={images[currentIndex]} alt="" srcset="" />
              </div>
           </div>
        </>
     );
}
 
export default ImageCarousel;