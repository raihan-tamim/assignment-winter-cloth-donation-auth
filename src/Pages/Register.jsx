import { Link } from "react-router";


const Register = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto ">
            <h1 className="text-3xl font-bold text-center mt-10">Register now!</h1>
            <form className="card-body">
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                
                <div className="form-control my-3">
                    <p>Already have an account? Please <Link to='/login' className="text-secondary font-bold hover:underline">Login</Link></p>
                    <button type="submit" className="btn mt-2 btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;