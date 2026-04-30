

const About = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>About us</h1>
            <div className='md:flex p-5 gap-8'>
                <img className='md:w-1/2  rounded-lg' src="https://img-cdn.publive.online/fit-in/1200x675/english-betterindia/media/media_files/uploads/2016/12/Kashmir-distribution-of-quilts-and-blankets-e1482925412990.jpg" alt="" />
                <div className='flex-1 md:pl-12 md:pt-6'>
                    <div className='flex flex-col items-start justify-center '>
                        <h1 className='text-2xl font-bold text-blue-400 w-2/3'>“When the cold wind makes people cry, we listen to stories of warmth.”</h1>
                        <p className='w-4/5'>Standing beside the poor and cold-affected people of the country is our main goal. This winter, through your small help, we can bring smiles to many people’s faces. With your support, we deliver warm clothes to helpless people in remote villages. A single piece of clothing can bring a smile to someone’s face. This initiative not only helps protect them from the cold but also builds a bridge of humanity for them.</p>
                        <br />
                        <p className='w-4/5'>Every donation or piece of clothing you provide reaches those who truly need it. Let’s come together and stand beside people affected by the cold.</p>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between p-5 mt-10 gap-10">
                <div className="space-y-2 w-1/3">
                    <h1 className='text-2xl font-bold text-blue-400 w-2/3'>12 +</h1>
                    <p className='w-4/5'>Years of Experience</p>
                    <hr />
                </div>
                <div className="space-y-2 w-1/3">
                    <h1 className='text-2xl font-bold text-blue-400 w-2/3'>23 +</h1>
                    <p className='w-4/5'>District networks</p>
                    <hr />
                </div>
                <div className="space-y-2 w-1/3">
                    <h1 className='text-2xl font-bold text-blue-400 w-2/3'>2.5Lakhs +</h1>
                    <p className='w-4/5'>Cloths given to people</p>
                    <hr />
                </div>
                
            </div>
        </div>
    );
};

export default About;