import Lottie from "lottie-react";
import signUpLottie from '../../../public/assets/sign-up.json'
import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="hero min-h-screen w-11/12 mx-auto">
            <div className="hero-content flex px-0 w-full">
                <div className="card w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <p className="mt-2 text-black">Don't have an account? <Link to="/login" className="link-hover font-bold text-blue-600 bg-white px-1 rounded-lg">Login</Link></p>
                    </form>
                </div>
                <div className="hidden md:flex w-1/2 max-h-[400px]">
                    <Lottie animationData={signUpLottie}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default SignUp;