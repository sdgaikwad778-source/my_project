import SearchComponent from "../SearchComponent/SearchComponent";

function Navbar() {
  return (
    <nav className="container-fluid px-1 py-0 border-bottom">
      <div className="row align-items-center">

        <div className="col-2">
          <h2 className="ms-2">ShopKart</h2>
        </div>

        <div className="col-8">
          <SearchComponent />
        </div>

        <div className="col-2 text-end">
          <i className="bi bi-cart3 fs-3 me-3"></i>
          <i className="bi bi-person-circle fs-3"></i>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;