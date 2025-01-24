import Lottie from "lottie-react";
import loginLottie from '../../../public/assets/login.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {

    const axiosPublic = useAxiosPublic();

    const { userLogin, setUser, handleGoogleSignUp, setLoading } = useContext(AuthContext);

    const [error, setError] = useState({});

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignOnClick = (e) => {
        e.preventDefault();
        handleGoogleSignUp()
            .then((result) => {
                const user = result.user;
                setUser(user);
                const userInfo = {
                    userName: user.displayName,
                    userEmail: user.email,
                    userRole: "user",
                }
                axiosPublic.post('/users', userInfo)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Successfully Sign in With Your Google",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => navigate(from, {replace: true}), 1500);
            })
            .catch((error) => {
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: error.message,
                });
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        userLogin(email, password).then((result) => {
            const user = result.user;
            setUser(user);
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Successfully Login",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => navigate("/"), 1500);
        })
            .catch((err) => {
                setError({ ...error, login: err.code });
                setLoading(false);
            });
    }

    return (
        <div className="hero min-h-screen w-11/12 mx-auto">
            <div className="hero-content flex px-0 w-full">
                <div className="card w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>

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

                        {
                            error.login && (
                                <label className="label">
                                    <p className="text-red-600">{error.login}</p>
                                </label>
                            )
                        }

                        <div className="form-control mt-6 gap-4">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <button onClick={handleGoogleSignOnClick} className="btn btn-neutral">Sign in with Google</button>
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