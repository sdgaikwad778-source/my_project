import { useState } from "react";
import "./imagecarousel.css";

function ImageCarousel() {

    const images = [
        "https://www.lab111.nl/wp-content/uploads/2024/08/Delon-Banner-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoSmpCHkNqQ84IHMwhixc8NdZnfcstQBLsOpGgUlcRnEFoDru4nqxWLM&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-zJrKuVmzg2wU2zaTUM6YR0kQMQewB84pBQO74MopwV6HkZwuj4i9Uk&s=10"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - 1);
        }
    };

    return (
        <div className="carousel-container">

            <button className="arrow arrow-left" onClick={handlePrev}>
                <i className="bi bi-arrow-left-short"></i>
            </button>

            <div className="carousel-slide">
                <img src={images[currentIndex]} alt="Carousel" />
            </div>

            <button className="arrow arrow-right" onClick={handleNext}>
                <i className="bi bi-arrow-right-short"></i>
            </button>

        </div>
    );
}

export default ImageCarousel;