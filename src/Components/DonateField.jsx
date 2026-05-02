import { BiSolidDonateHeart } from "react-icons/bi";
import { Bounce, toast } from "react-toastify";

const DonateField = () => {
    const handleSubmit = e => {
        e.preventDefault();
        toast.success('“ Thank you ! We will reach your destination soon”.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        e.target.reset();
    }
    return (
        <div className="">
            <h1 className="md:text-5xl text-2xl font-bold flex justify-center  text-blue-500">
                <BiSolidDonateHeart /> Donate Here</h1>
            <form onSubmit={handleSubmit} className="card-body mx-auto md:w-1/2 w-2/3">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity of items</span>
                    </label>
                    <input type="text" placeholder=" 1, 2, 3, .......!" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Item Type</span>
                    </label>
                    <input type="text" placeholder="sweater, jackets, blankets" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <input type="text" placeholder="Enter Your Address" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Give us your important opinion and advice</span>
                    </label>
                    <textarea className="textarea textarea-accent" placeholder="Additional notes"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn  btn-primary">Donate</button>
                </div>
            </form>
        </div>
    );
};

export default DonateField;