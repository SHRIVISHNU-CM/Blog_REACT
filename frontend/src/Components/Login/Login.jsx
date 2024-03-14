function Login() {
    return (
        <>
            <div className="card md:card-side shadow-md bg-base-200  ">
                <div className="card-title bg-purple-400 md:w-34 flex justify-center p-8 md:p-2">
                    <h1 className=" text-white">Welcome Back</h1>

                </div>
                <div className="card-body">
                    <h1 className="card-title ">SignIn</h1>
                    <form>
                        <label className="input input-bordered input-sm flex items-center gap-1 my-0.5">
                            Name
                            <input type="text" className="grow" placeholder="Enter here" />
                        </label>
                        <label className="input input-border input-sm  flex items-center gap-1 my-0.5">
                            Email:
                            <input type="text" className="grow" placeholder="Enter your Email" />
                        </label>
                        <label className="input input-bordered input-sm  flex items-center gap-1 my-0.5">
                            Password
                            <input type="password" className="grow" placeholder="Enter Your password" />
                        </label>
                        <div className="card-actions justify-center">
                        <button className="btn btn-warning btn-sm text-white">Signin</button>

                        </div>
                    </form>
                    <h2>Don't have an account? <span></span></h2>
                    <button className="btn btn-secondary btn-block btn-sm">Signup</button>
                </div>


            </div>
        </>
    )
}
export default Login;
