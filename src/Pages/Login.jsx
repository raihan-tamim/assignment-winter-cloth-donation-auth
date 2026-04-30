import { Link } from "react-router";


const Login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto ">
            <h1 className="text-3xl font-bold text-center mt-10">Login now!</h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                
                <div className="form-control my-3">
                    <p>Don't have an account? Please <Link to='/register' className="text-secondary font-bold hover:underline">Register</Link></p>
                    <button type="submit" className="btn mt-2 btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;