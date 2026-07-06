function AddNewBrand()
{
    const handleChange = (event) => {
        event.preventDefault();
        
    }
    
    return(
        <>
      <div className="container-fluid p-0 mt-4">
        <div className="row align-items-center">
            <div className="col-5 offset-3 p-4 border border-dark">
                <h4>Add The Brand</h4>
                <form onSubmit={handleChange}>
                    <input type="text" placeholder="Name" className="form-control mt-3 border border-dark" name="name" required/>
                    <textarea name="textarea" id="" className="form-control mt-3" placeholder="Product Description" ></textarea>
                    <input type="text" placeholder="Price" className="form-control mt-3 border border-dark" name="price" required/>
                    <label className="mt-3 w-100 ">Select Category:</label>
                    <select className="form-control" name="select" id="">
                        <option value="">--select--</option>
                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="watches">Watches</option>
                    </select>
                    <label className="mt-3 w-100 ">Select Brand:</label>
                    <select className="form-control" name="select" id="">
                        <option value="">--select--</option>
                        <option value="mobile">Samsung</option>
                        <option value="laptop">Apple</option>
                        <option value="watches">Nothing</option>
                    </select>
                    <div className="border bg-light mt-3 p-3">
                        <label className="w-100 mt-3">Upload Product Images:-</label>
                    <input type="file" className="form-control" name="image[]" />
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-dark w-100 rounded mt-3"/>
                </form>
            </div>
        </div>
      </div>
        </>
    )
}

export default AddNewBrand;