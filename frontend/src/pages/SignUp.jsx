function  SignUp()
{      
    const handleSubmit = (event) => {
    event.preventDefault();

    let formdata = new FormData(event.target);
    formdata = Object.fromEntries(formdata);

    console.log(formdata);

    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(formdata)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // });
}
    return(
        <>
        <div className="container vh-100">
            <div className="row h-100 align-items-center">
                <div className="col-6 offset-3 bg-light p-5 border border-dark">
                    <h4>Welcome User!</h4>
                    <p className="text-muted">Please fill your details below.</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" className="form-control mb-3 border-dark" name="name" required />
                        <input type="email" placeholder="Email" className="form-control mb-3 border-dark" name="email" required />
                        <input type="password" placeholder="Password" className="form-control mb-3 border-dark" name="password" required />
                        <input type="text" placeholder="Contact" className="form-control mb-3 border-dark" name="contact" required /> 
                        <input type="submit" value="Create Account" className="btn w-100 btn-dark" />  
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default SignUp;