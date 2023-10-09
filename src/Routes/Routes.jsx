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
import AllJewelry from "../Pages/AllJewelry/AllJewelry";
import MyJewelry from "../Pages/MyJewelry/MyJewelry";
import AddJewelry from "../Pages/AddJewelry/AddJewelry";
import Dashboard from "../Layout/Dashboard";
import AllItems from "../Pages/Dashboard/AllItems/AllItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import MyAllItems from "../Pages/Dashboard/MyAllItems/MyAllItems";
import ManageMyItems from "../Pages/Dashboard/ManageMyItems/ManageMyItems";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/allJewelry',
                element: <AllJewelry />
            },
            {
                path: '/myJewelry',
                element: <MyJewelry />
            },
            {
                path: '/addJewelry',
                element: <AddJewelry />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'termsConditions',
                element: <TermsConditions />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
            // Admin 
            {
                path: 'allItems',
                element: <AllItems/>
            },
            {
                path: 'manageItems',
                element: <ManageItems/>
            },
            {
                path: 'addItems',
                element: <AddItems/>
            },

            // user 
            {
                path: 'allMyItems',
                element: <MyAllItems/>
            },
            {
                path: 'manageMyItems',
                element: <ManageMyItems/>
            },

        ]
    },
    {
        path: '*',
        element: <Error />
    },
])

export default router;