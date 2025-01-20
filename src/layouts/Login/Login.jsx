import Lottie from "lottie-react";
import loginLottie from '../../../public/assets/login.json'
import { Link } from "react-router-dom";

const Login = () => {








    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        // userLogin(email, password).then((result) => {
        //     const user = result.user;
        //     setUser(user);
        //     toast.success("Successfully Login", {
        //         position: "top-center",
        //         autoClose: 2000,
        //     });
        //     setTimeout(() => navigate("/"), 2000);
        // }).catch((err) => {
        //     setError({ ...error, login: err.code });
        //     setLoading(false);
        // });
    }

    return (
        <div className="hero min-h-screen w-11/12 mx-auto">
            <div className="hero-content flex px-0 w-full">
                <div className="card w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 gap-4">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <button className="btn btn-neutral">Sign in with Google</button>
                        </div>
                        <p className="mt-2 text-black">Don't have an account? <Link to="/sign-up" className="link-hover font-bold text-blue-600 bg-white px-1 rounded-lg">Sign Up</Link></p>
                    </form>
                </div>
                <div className="hidden md:flex w-1/2 max-h-[500px]">
                    <Lottie animationData={loginLottie}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Login;