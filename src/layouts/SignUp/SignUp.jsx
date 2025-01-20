import Lottie from "lottie-react";
import signUpLottie from '../../../public/assets/sign-up.json'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState({});

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const nameCriteria = /^[A-Za-z\s]+$/;
        if (!nameCriteria.test(name)) {
            setError((prev) => ({ ...prev, name: "Name must not contain numbers or special characters." }));
            return;
        } else {
            setError((prev) => ({ ...prev, name: null }));
        }
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordCriteria.test(password)) {
            setError((prev) => ({ ...prev, password: "Password must contain at least 6 characters, including uppercase and lowercase letters.", }));
            return;
        } else {
            setError((prev) => ({ ...prev, password: null }));
        }

        createNewUser(email, password).then((result) => {
            const user = result.user;
            setUser(user);
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Signup Successful",
                showConfirmButton: false,
                timer: 1500
            });
            updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    setTimeout(() => navigate("/"), 1500);
                })
                .catch((err) => {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: err.message,
                    });
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                position: "top",
                icon: "error",
                title: errorCode || errorMessage,
            });
        });
    }


    return (
        <div className="hero min-h-screen w-11/12 mx-auto">
            <div className="hero-content flex px-0 w-full">
                <div className="card w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>

                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>

                        {
                            error.name && (
                                <label className="label">
                                    <p className="text-red-600">{error.name}</p>
                                </label>
                            )
                        }

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        {/* photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>

                        {error.password && (
                            <label className="label">
                                <p className="text-red-600">{error.password}</p>
                            </label>
                        )}

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