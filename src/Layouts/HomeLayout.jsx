import Footer from "../Components/Footer/Footer";
import About from "../Components/Home/About";
import Banner from "../Components/Home/Banner";
import HowWeWorks from "../Components/Home/HowWeWorks";
import Nav from "../Components/Home/Nav";


const HomeLayout = () => {
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Nav></Nav>
            </header>
            <main className="max-w-7xl mx-auto my-2">
                <section className="space-y-8">
                    <Banner></Banner>
                    <About></About>
                    <HowWeWorks></HowWeWorks>
                </section>
                
            </main>
            <footer className="max-w-7xl mx-auto">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;