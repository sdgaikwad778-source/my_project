import { useRef } from "react";
import "./bannerslidestyle.css"

function BannerSlider()
{
    const banners = [
        {img:"https://www.beautypackaging.com/wp-content/uploads/sites/8/2024/11/883_main-3.jpg",
        },
         {img:"https://www.beautypackaging.com/wp-content/uploads/sites/8/2024/11/883_main-3.jpg",
    },
            {img:"https://www.beautypackaging.com/wp-content/uploads/sites/8/2024/11/883_main-3.jpg",
        },
         {img:"https://www.beautypackaging.com/wp-content/uploads/sites/8/2024/11/883_main-3.jpg",
    }


    ]

    const scrollRef = useRef(null)
    
    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
    
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    return(
        <>
        <div className="banner-container" ref={scrollRef}>
            <button className="btn-left"onClick={scrollLeft} >
                <i class="bi bi-arrow-left-circle"></i>
            </button>
            <button className="btn-right" onClick={scrollRight}>
                <i class="bi bi-arrow-right-circle"></i>
            </button>
           {
            banners.map(b =>(
                 <div className="banner">
                    <img src={b.img} alt="" />
                    <div className="caption">
                        <h5>{b.caption}</h5>
                    </div>
            </div>
            ))
           }
        </div>
        </>
    )
}
export default BannerSlider;