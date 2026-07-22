import NavBar from "../components/NavBar/NavBar";
import ImageCarousel from "../components/ImageCarouselLarge/ImageCarousel";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ProductSection from "../components/ProductSection/ProductSection";
import SearchComponent from "../components/SearchComponent/SearchComponent";
const HomePage = () => {
    return ( 
        <>
              <NavBar />
      <ImageCarousel />
      <ImageGallery />
      <ProductSection />
        </> 
        
    );
}
 
export default HomePage;