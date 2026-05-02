import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

import Nav from "../Components/Home/Nav";


const HomeLayout = () => {
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Nav></Nav>
            </header>
            <main className="max-w-7xl mx-auto my-2 ">
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer className="max-w-7xl mx-auto">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;