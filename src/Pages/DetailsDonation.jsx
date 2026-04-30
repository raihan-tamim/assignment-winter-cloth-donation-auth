import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import DonateField from "../Components/DonateField";


const DetailsDonation = () => {
    const [data, setData] = useState([])
    const { title, image, description, division, contactInfo, status } = data;
    const allData = useLoaderData();
    const { id } = useParams()
    // console.log(id, allData)
    useEffect(() => {
        const filteredData = allData.find(data => data.id == id);
        console.log(filteredData)
        setData(filteredData);
    }, [id, allData])

    return (
        <div>
            <h1 className="md:text-5xl text-2xl font-bold text-center text-blue-500">"With your love" <br /> --Thousands of families will be warm this winter--</h1>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className="font-bold">Division: {division}</p>
                    <p className="font-bold">Contact : {contactInfo}</p>
                    <p className={`font-bold ${status==='active'?'text-green-500' : 'text-red-400'}`}>Status : {status}</p>
                </div>
                <figure>
                    <img className="h-[600px] w-full object-cover"
                        src={image}
                        alt="Shoes" />
                </figure>
            </div>
            <div className="my-8">
                <DonateField></DonateField>
            </div>

        </div>
    );
};

export default DetailsDonation;