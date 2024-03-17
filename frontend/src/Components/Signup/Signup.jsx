import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Signup() {
    const [username, Setname] = useState('')
    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')
    const [mobile, Setmobile] = useState('')
    const HandleSignup = (e) => {
        e.preventDefault()

        axios.post('https://blog-react-one-beta.vercel.app/blog/signup', {
            username, email, password, mobile
        }).then(() => console.log('signuped')
        )

    }
    useEffect(() => {
        HandleSignup
    }, [])
    return (
        <>
            <div className="flex justify-center">
                <div className="card md:card-side shadow-md bg-base-200 ">
                    <div className="card-title bg-purple-400 md:w-34 flex justify-center p-8 md:p-2">
                        <h1 className=" text-white">Welcome TO SignUp</h1>

                    </div>
                    <div className="card-body">
                        <h1 className="card-title ">SignUp</h1>
                        <form onSubmit={HandleSignup}>
                            <label className="input input-bordered input-sm flex items-center gap-1 my-0.5">
                                Name
                                <input
                                    type="text"
                                    value={username}
                                    onChange={e => Setname(e.target.value)}
                                    className="grow"
                                    placeholder="Enter here" />
                            </label>
                            <label className="input input-border input-sm  flex items-center gap-1 my-0.5">
                                Email:
                                <input
                                    type="text"
                                    value={email}
                                    onChange={e => Setemail(e.target.value)}
                                    className="grow"
                                    placeholder="Enter your Email" />
                            </label>
                            <label className="input input-bordered input-sm  flex items-center gap-1 my-0.5">
                                Password
                                <input
                                    type="password"
                                    value={password}
                                    onChange={e => Setpassword(e.target.value)}
                                    lassName="grow"
                                    placeholder="Enter Your password" />
                            </label>
                            <label className="input input-bordered input-sm flex items-center gap-1 my-0.5">
                                Mobile:
                                <input
                                    type="Number"
                                    value={mobile}
                                    onChange={e => Setmobile(e.target.value)}
                                    className="grow"
                                    placeholder="Enter Mobile Number" />
                            </label>
                            <div className="card-actions justify-center">
                                <button type="submit" className="btn btn-warning btn-sm text-white">SignUp</button>

                            </div>
                        </form>
                        <h2>Already have an account? <span></span></h2>
                        <Link to="/signin" className="btn btn-block btn-secondary btn-sm">SignIn</Link>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Signup