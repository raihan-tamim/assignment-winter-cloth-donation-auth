import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const { createUser, googleSignIn, updateUserProfile } = use(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            return setError('Must have an uppercase, a lowercase and minimum 6 character ');
        }
        setError('')
        createUser(email, password)
            .then(() => {
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
            }).catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn().then(() => {
            navigate('/')
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto ">
            <h1 className="text-3xl font-bold text-center mt-10">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input   name="password" type={showPassword? "text" : "password"} placeholder="Your password" className="input input-bordered" required />
                    <button onClick={()=>{setShowPassword(!showPassword)}} className="absolute right-5 top-12">{showPassword? <FaEyeSlash size={18} /> : <FaEye size={18} />}</button>
                    {error && <p className="text-sm text-red-500">{error} </p>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control my-3">
                    <p>Already have an account? Please <Link to='/login' className="text-secondary font-bold hover:underline">Login</Link></p>
                    <button type="submit" className="btn my-2 btn-primary">Register</button>
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;