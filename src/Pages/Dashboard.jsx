import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Marquee from "react-fast-marquee";


const Dashboard = () => {
    const { user } = use(AuthContext);
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome</h1>
                    <h1 className="text-3xl font-bold text-blue-500"> Mr. {user.displayName}</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;