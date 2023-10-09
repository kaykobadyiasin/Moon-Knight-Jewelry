import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import Cart from "../Pages/Cart/Cart";
import TermsConditions from "../Pages/Terms&Conditions/TermsConditions";
import AllJewelry from "../Pages/Catalogue/AllJewelry";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/allJewelry',
                element: <AllJewelry/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: 'signUp',
                element: <SignUp/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'termsConditions',
                element: <TermsConditions/>
            },
            {
                path: '*',
                element: <Error/>
            },
        ]
    }
])

export default router;