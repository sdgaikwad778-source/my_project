import MainNav from "./components/MainNav";
import CategoryBar from "./components/CategoryBar";
import MainSlider from "./components/MainSlider";
import ProductSection from "./components/ProductSection";
import ProductSlider from "../common/components/product_slider/ProductSlider";
import BannerSlider from "../common/components/bannerslider/BannerSlider";

function HomePage()
{
    return(
        <>
        <MainNav/>
        <CategoryBar/>
        <MainSlider/>
        <ProductSlider/>
        <BannerSlider/>
        <ProductSlider/>
        <ProductSlider/>
        <ProductSection/>
        </>
    )
}

export default HomePage;