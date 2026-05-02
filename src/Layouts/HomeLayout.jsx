import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

import Nav from "../Components/Home/Nav";


import { useEffect } from "react";
import Aos from "aos";



const HomeLayout = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false, // 👈 IMPORTANT (so it can trigger again on scroll)
        });
    }, []);

    return (
        <div>
            <header className="fixed w-full top-0 z-10">
                <Nav className=""></Nav>
            </header>
            <main className="max-w-7xl mx-auto my-2 ">
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer className="max-w-7xl mx-auto" data-aos="flip-left">
                <Footer  ></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;