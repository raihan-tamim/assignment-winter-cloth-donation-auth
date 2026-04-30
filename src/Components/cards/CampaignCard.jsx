import { Link } from "react-router";


const CampaignCard = ({ data }) => {
    
    const{title, image,description, division, id} = data;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img className="w-full object-cover h-60"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className="font-bold">Division: {division}</p>
                <div className="card-actions justify-end">
                    <Link to={`/${id}`}  className="btn btn-primary">Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;