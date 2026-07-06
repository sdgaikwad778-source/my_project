function SignIn()
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
            <div className="row align-items-center h-100">
                <div className="col-6 offset-3 border border-dark bg-light p-5">
                    <h4>Welcome Back!</h4>
                    <p className="text-muted">Please login into your account.</p>
                    <form onSubmit={handleSubmit}>
                         <input type="text" placeholder="Email" className="form-control border border-dark mb-3" name="email" required />
                         <input type="password" placeholder="Password" className="form-control border border-dark mb-3" name="password" required />
                         <input type="submit" value="Login" className="btn btn-dark w-100" />
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default SignIn;