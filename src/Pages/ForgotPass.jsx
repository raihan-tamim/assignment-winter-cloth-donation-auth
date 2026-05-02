import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";


const ForgotPass = () => {
    const { forgetPass } = use(AuthContext);
    const handleReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email)

        forgetPass(email)
            .then(() => {
                // Password reset email sent!
                // ..
                toast('email sent')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }
    return (

        <div>
            <form onSubmit={handleReset}>
                <div className="border flex flex-col max-w-sm mx-auto p-5 rounded-lg shadow-lg">
                    <label className="text-xl my-3"> Email</label>
                    <input type="email" className=" border-2 px-4 py-2 " name="email" placeholder="Your email" required />
                    <button type="submit" className="btn btn-secondary my-3">Reset Password</button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPass;