import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/navbar/navbar";
import Footer from "../components/Shared/Footer/Footer";



const Layout = () => {

    const location = useLocation();
  const shouldRenderNavbarAndFooter = location.pathname !== '*';

    return (
        <div>
           {shouldRenderNavbarAndFooter && <Navbar/>}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;