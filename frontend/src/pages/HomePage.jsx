import ImageCarousel from "../components/ImageCarouselLarge/ImageCarousel";
import Navbar from "../components/NavBar/NavBar";
import ProductSlider from "../components/ProductSlider/ProductSlider";


const HomePage = () => {
    return ( 
        <>
          <Navbar/>  
          <ImageCarousel/>
          <ProductSlider/>
        </> 
        
    );
}
 
export default HomePage;