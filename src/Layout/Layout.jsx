import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const Layout = () => {

    const location = useLocation();
    const errorPaths = ['*'];
    const shouldRenderNavbarAndFooter = !errorPaths.includes(location.pathname);

    return (
        <div>
            {shouldRenderNavbarAndFooter && <Navbar />}
            <Outlet />
            {shouldRenderNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Layout;