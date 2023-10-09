import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const Layout = () => {


    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;