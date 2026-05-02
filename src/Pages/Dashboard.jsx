import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import 'animate.css';



const Dashboard = () => {
    const { user } = use(AuthContext);
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center ">
                <div className="max-w-md space-y-3">
                    <h1 className="text-5xl font-bold">Welcome</h1>
                    <h1 className="text-3xl font-bold text-blue-500 animate__animated animate__backInLeft "> Mr. {user.displayName}</h1>
                    <Link to="/" className="btn btn-primary">Update Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;