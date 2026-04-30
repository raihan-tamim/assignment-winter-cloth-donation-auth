
import Banner from '../Components/Home/Banner';
import About from '../Components/Home/About';
import HowWeWorks from '../Components/Home/HowWeWorks';

const Home = () => {
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <About></About>
            <HowWeWorks></HowWeWorks>
        </div>

    );
};

export default Home;