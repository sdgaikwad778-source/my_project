import { Outlet, Link } from "react-router";

function AdminDashboard() {
    return (
        <>
            <div className="container-fluid p-0 overflow-ho">
                <nav className="bg-secondary px-3 py-2 d-flex justify-content-between">
                    <h4 className="text-white fw-bold">Shopkart</h4>
                    <h4 className="text-white">Settings</h4>
                </nav>

                <div className="row">
                    <div className="col-3 bg-dark text-white min-vh-100 p-4">
                        <h3>Admin Dashboard</h3>

                        <ul className="list-unstyled list-group">
                            <li
                                className="fs-5 list-group-item my-2"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseExample"
                            >
                                User
                            </li>

                            <div className="collapse" id="collapseExample">
                                <li className="fs-5 list-group-item ms-3 text-decoration-none">
                                    <Link to="/admin/dashboard/customers">
                                        Customers
                                    </Link>
                                </li>

                                <li className="fs-5 list-group-item ms-3">
                                    <Link to="/admin/dashboard/sellers">
                                        Sellers
                                    </Link>
                                </li>
                            </div>

                            <li
                                className="fs-5 list-group-item my-2"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseProducts"
                            >
                                Products
                            </li>

                            <div className="collapse" id="collapseProducts">
                                <li className="fs-5 list-group-item ms-3 text-decoration-none">
                                    <Link to="/admin/dashboard/products/new">
                                        Add New Product
                                    </Link>
                                </li>

                                <li className="fs-5 list-group-item ms-3">
                                    <Link to="/admin/dashboard/products">
                                        View Products
                                    </Link>
                                </li>
                            </div>
                            <li className="fs-5 list-group-item my-2">
                                Categories
                            </li>
                            <div>
                                
                            </div>
                           
                            <li
                                className="fs-5 list-group-item my-2"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseCategory"
                            >
                                Brands
                            </li>

                            <div className="collapse" id="collapseCategory">
                                <li className="fs-5 list-group-item ms-3 text-decoration-none">
                                    <Link to="/admin/dashboard/brands/new">
                                        Add New Brand
                                    </Link>
                                </li>

                                <li className="fs-5 list-group-item ms-3">
                                    <Link to="/admin/dashboard/brands">
                                        Brand
                                    </Link>
                                </li>
                            </div>

                        </ul>
                    </div>

                    <div className="col">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;