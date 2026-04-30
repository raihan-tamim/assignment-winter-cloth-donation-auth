import { useLoaderData } from "react-router";

import CampaignCard from "../Components/cards/CampaignCard";


const DonationCampaign = () => {
    const allData = useLoaderData();
    // console.log(data)
    return (
        <div>
            <h1 className="md:text-5xl text-2xl font-bold text-center text-blue-500">Our last year - <br /> Donation Campaign</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-8">
                {
                    allData.map(data=><CampaignCard key={data.id} data={data}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default DonationCampaign;