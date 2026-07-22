import "./productslider.css"

const ProductSlider = (props) => {

    return (
        <div className="scrollable-card-container" ref={props.scrollref}>
            {props.products.map(product=>(
                <div className="product-card">
                <img src={product.image}/>
                <div>
                    <h4>{product.name}</h4>
                    <h4>{product.rating}</h4>
                </div>
            </div>
            ))}
        </div>
      );
}
 
export default ProductSlider;