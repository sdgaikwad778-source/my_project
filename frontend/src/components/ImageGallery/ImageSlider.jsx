import { useRef } from "react"
import "./imagegallary.css"

const ImageSlider = (props) => {

    const scrollref = useRef(null);

    const handlePrev =()=>{
              scrollref.current.scrollBy({
            left:-150,
            behavior: "smooth"
         })
    }
    const handleNext =()=>{
         scrollref.current.scrollBy({
            left:150,
            behavior: "smooth"
         })
    }

    return (
        <div className="thumbnail-list-container" >
                <div>
                    <button className="arrow arrow-left" onClick={handlePrev}>
                    <i class="bi bi-arrow-left-short"></i></button>
                    <button className="arrow arrow-right" onClick={handleNext}>
                    <i class="bi bi-arrow-right-short"></i></button>
                </div>
                <div className="thumbnail-list" ref={scrollref}>
                    {props.images.map((img,index)=>(
                        <img className="thumbnail" src={img} alt="" onClick={()=>props.setCurrentIndex(index)} />
                    ))}
                </div>
           
        </div>
      );
}
 
export default ImageSlider;