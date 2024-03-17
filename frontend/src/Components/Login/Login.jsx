import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
function Login() {
    const [username, Setname] = useState('')
    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')
    const navigate = useNavigate()
    const HandleSignin = (e) => {
        e.preventDefault()
        axios.post('https://blog-react-eujq.onrender.com/blog/signin', {
            username, email, password
        }).then(() => {
            console.log("your are signed in")
            navigate('/home')
        })

    }
    return (
        <>
            <div className="flex justify-center">
                <div className="card md:card-side shadow-md bg-base-200 ">
                    <div className="card-title bg-purple-400 md:w-34 flex justify-center p-8 md:p-2">
                        <h1 className=" text-white">Welcome To SignIn</h1>

                    </div>
                    <div className="card-body">
                        <h1 className="card-title ">SignIn</h1>
                        <form onSubmit={HandleSignin}>
                            <label className="input input-bordered input-md flex items-center gap-1 my-0.5">
                                Name
                                <input
                                    type="text"
                                    value={username}
                                    onChange={e => Setname(e.target.value)}

                                    className="grow"
                                    placeholder="Enter here" />
                            </label>
                            <label className="input input-border input-md  flex items-center gap-1 my-0.5">
                                Email:
                                <input
                                    type="text"
                                    value={email}
                                    onChange={e => Setemail(e.target.value)}
                                    className="grow"
                                    placeholder="Enter your Email" />
                            </label>
                            <label className="input input-bordered input-md  flex items-center gap-1 my-0.5">
                                Password
                                <input
                                    type="password"
                                    value={password}
                                    onChange={e => Setpassword(e.target.value)}
                                    className="grow"
                                    placeholder="Enter Your password" />
                            </label>
                            <div className="card-actions justify-center">
                                <button type="submit" className="btn btn-warning btn-sm text-white">Signin</button>

                            </div>
                        </form>
                        <h2>Don't have an account? <span></span></h2>
                        <Link to="/signup" className="btn btn-block btn-secondary btn-sm">
                            Signup
                        </Link>

                    </div>


                </div>
            </div>

        </>
    )
}
export default Login;
