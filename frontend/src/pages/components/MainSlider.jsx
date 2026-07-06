function MainSlider()
{
    return(
        <>
        <div className="container-fluid mt-3">
            <div className="row">
                <div id="carouselExample" class="carousel slide" style={{height:"70vh",overflow:"hidden"}}>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNMaTf8GeB3hKscuQxWDpjhL2fPZx2jjxIIsOa4G4C-Pgs6rlt_xf-LRL&s=10" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi9dSVJwq39Y4YCMS6Q0phVnHsoqJUWHD97j_bpMlbScmQx5ilEYQ3Sw&s=10" class="d-block w-100" alt="..."/>
                     </div>
                       <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgjFjpY_kpHTIY9Ej2MzdYGnFq0LovnJf16ItyCqnKg&s" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
        </div>
        </>
    )
}
export default MainSlider;