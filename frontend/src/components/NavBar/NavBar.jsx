import SearchComponent from "../SearchComponent/SearchComponent";
import "./navbar.css"

const Navbar = () => {
    return ( 
        <nav className="nav-container">
         <div className="">
            <div className="row align-items-center">
                <div className="col-2">
                    <h4>Shopkart</h4>
                </div>
                <div className="col-6">
                    <SearchComponent/>
                </div>
                <div className="col-4">
                    <ul className="list-unstyled d-flex fs-2 justify-content-end">
                        <li className="me-5"><i class="bi bi-cart4 "></i></li>
                        <li className="me-3"><i class="bi bi-person-circle"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        </nav>
     );
}
 
export default Navbar;