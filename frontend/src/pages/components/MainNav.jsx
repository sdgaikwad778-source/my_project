function MainNav()
{
    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col">
                <nav className="d-flex py-2  justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                        <h4 className="me-3 mt-1">ShopKart</h4>
                        <div className="w-100">
                            <input type="text" placeholder="Search Products" className="form-control w-75 border border-dark" />
                        </div>
                    </div>
                    
                    <div className="d-flex gap-3 align-items-cente">
                        <p className="fw-bold mt-3">Profile</p>
                        <p className="fw-bold mt-3">Name</p>
                    </div>
                </nav>
                </div>
            </div>
        </div>
        </>
    )
}
export default MainNav;