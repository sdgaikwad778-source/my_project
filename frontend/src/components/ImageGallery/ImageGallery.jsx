import "./imagegallery.css";
const ImageGallery = () => {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLONE63wqUtkVwpE9hfW3zPOx8Q_Qzcz1uYaq0I6V1nwthM1Hmbn4VN5j&s=10",
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Coke.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSDTecJNW-0B9H-JlIkRdQK9mt9ugsL3pSW-GbiFQyopCnjVsoYIXHWc&s=10",
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Beverage_Cup_Pepsi.jpg",
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Bottle_Coke.jpg",
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Bottle_Water.jpg"
    ]
    
    const handlePrev = () =>{

    }

    const handleNext = () =>{

    }

    
    return (  
        <>
           <div className="image-gallery-container">
    <div className="preview-image">
        <img src={images[0]} alt="" />
    </div>

    <div className="thumbnail-list">
        <button className="arrow arrow-left" onClick={handlePrev}>
            <i className="bi bi-arrow-left-short"></i>
        </button>

        <button className="arrow arrow-right" onClick={handleNext}>
            <i className="bi bi-arrow-right-short"></i>
        </button>

        {images.map((img, index) => (
            <img key={index} className="thumbnail" src={img} alt="" />
        ))}
    </div>
</div>
        </>
    );
}
 
export default ImageGallery;