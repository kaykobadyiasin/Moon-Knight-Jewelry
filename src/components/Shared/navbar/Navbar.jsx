
import { Icon } from "@iconify/react";
import logo from '../../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const leftNavMenuData = [
        { label: "HOME", path: "/" },
        { label: "ABOUT US", path: "/about" },
        { label: "ALL JEWELRY", path: "/allJewelry" },
        { label: "MY JEWELRY", path: "/about" },
        { label: "ADD JEWELRY", path: "/about" },
        // { label: "BLOGS", path: "/about" },
    ];

    const rightNavMenuData = [
        {
            label: "BLOGS",
            path: "/catalogue",
        },
    ];

    const [isToggle, setIsToggle] = useState(false);


    const handleToggle = () => {
        setIsToggle(!isToggle)
    }


    return (
        <div>
            <nav className="">
                <div className=" bg-primary-100 p-4 text-white">
                    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
                        <div className="mb-4 lg:mb-0">
                            <p className="font-semibold">FREE SHIPPING FOR ORDERS OVER £50</p>
                        </div>
                        <div className="flex md:flex-row flex-col lg:gap-20 md:gap-20 gap-5 items-center">
                            <div className="space-x-6 font-semibold menu">
                                <NavLink to="/" className="hover:text-secondary-100 transition-all duration-200">
                                    My Account
                                </NavLink>
                                <NavLink to="/contact" className="hover:text-secondary-100 transition-all duration-200">
                                    Contact Us
                                </NavLink>
                                <NavLink to="/cart" className="hover:text-secondary-100 transition-all duration-200">
                                    Cart
                                </NavLink>
                                <NavLink to="/login" className="hover:text-secondary-100 transition-all duration-200">
                                    Log In
                                </NavLink>
                            </div>
                            <div className="flex space-x-5">
                                <Link to="/">
                                    <Icon icon="ri:facebook-fill" className="text-xl hover:text-secondary-100 transition-all duration-200" />
                                </Link>
                                <Link to="/">
                                    <Icon icon="mdi:instagram" className="text-xl hover:text-secondary-100 transition-all duration-200" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div className="container mx-auto my-5">
                    <div className="flex lg:flex-row md:flex-col flex-col justify-between items-center w-full mt-4 lg:mt-0">
                        <div className="flex lg:flex-row md:flex-row flex-col items-center space-x-6 md:space-y-0 space-y-6">
                            {/* Logo */}
                            <Link to='/'>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="lg:w-8/12 md:w-8/12 w-12/12 lg:mx-0 md:mx-0 mx-auto lg:rounded-lg"
                                />
                            </Link>
                            {/* Search Bar (you can use an input field here) */}

                            <form className="flex items-center w-10/12">
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Icon icon="ic:baseline-search" />
                                    </div>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 " placeholder="Search ..." />
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-secondary-100 rounded-lg border  hover:bg-primary-100 focus:outline-none transition-all duration-200">
                                    <Icon icon="ic:baseline-search" className="text-xl" />
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>

                        </div>
                        <div className="flex items-center space-x-4 lg:mt-0 mt-5 order-last">
                            {/* Call Us Now */}
                            {/* <div className="flex items-start space-x-2 w-full">
                                <Icon icon="solar:phone-linear" className="text-3xl" />
                                <p className="font-semibold">Call Us Now <br /> <span className="text-xl font-bold">+880 147258369</span></p>
                            </div> */}
                            {/* User Login Icon */}
                            <Link to="/login" className="hover:text-primary-100 transition-all duration-200">
                                <Icon icon="mdi:account" className="text-3xl" />
                            </Link>
                            {/* Cart Icon */}
                            <Link to="/cart" className="hover:text-primary-100 transition-all duration-200">
                                <Icon icon="mdi:cart" className="text-3xl" />
                            </Link>
                            {/* toggol Icon */}
                            <button onClick={handleToggle} className="lg:hidden cursor-pointer hover:text-primary-100 transition-all duration-200">
                                <Icon icon="ph:list-bold" className="text-3xl" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* third row  */}
                <div className={isToggle ? `container mx-auto my-8` : `container mx-auto my-8 lg:block hidden`} >
                    <div className="lg:flex justify-between w-full mt-4 lg:mt-0">
                        <div className="Navmenu flex flex-col lg:flex-row lg:space-x-10 items-center lg:space-y-0 md:space-y-5 space-y-5 text-sm font-semibold">
                            {leftNavMenuData.map((item, index) =>
                                typeof item === "object" ? (
                                    <NavLink
                                        key={index}
                                        to={item.path}
                                        className="hover:text-primary-100 transition-all duration-200"
                                    >
                                        {item.label}
                                    </NavLink>
                                ) : (
                                    <Link key={index} to="/" className="hover:text-gray-300">
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="Navmenu relative flex  lg:mt-0 text-sm font-semibold justify-center mt-5">
                            {rightNavMenuData.map((item, index) =>
                                typeof item === "object" ? (
                                    <NavLink
                                        key={index}
                                        to={item.path}
                                        className=" hover:text-primary-100 transition-all duration-200"
                                    >
                                        {item.label}
                                    </NavLink>
                                ) : (
                                    <Link key={index} to="/" className="hover:text-gray-300">
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>

            </nav >
        </div >
    );
};

export default Navbar;
