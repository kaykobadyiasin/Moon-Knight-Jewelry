import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/navbar/navbar";
import Footer from "../components/Shared/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;