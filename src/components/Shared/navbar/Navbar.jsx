import { Icon } from "@iconify/react";
import logo from '../../../assets/logo.jpg'
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const leftNavMenuData = [
        { label: "HOME", path: "/" },
        { label: "ABOUT US", path: "/about" },
        { label: "SCHOOLWEAR", path: "/" },
        { label: "WORKWEAR", path: "/" },
        { label: "SPORTS", path: "/" },
        { label: "E SCOOTER", path: "/" },
        { label: "CONTACT US", path: "/contact" },
    ];

    const rightNavMenuData = [
        {
            label: "CATALOGUES",
            path: "/",
            dropdownItems: [{ label: "CONTACT US", path: "/contact" }, { label: "CONTACT US", path: "/contact" }, { label: "CONTACT US", path: "/contact" }],
        },
    ];

    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <div>
            <nav className="">
                <div className=" bg-primary-100 p-4 text-white">
                    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
                        <div className="mb-4 lg:mb-0">
                            <p className="font-semibold">FREE SHIPPING FOR ORDERS OVER £50</p>
                        </div>
                        <div className=" lg:flex gap-20 items-center">
                            <div className="space-x-6 font-semibold">
                                <Link to="/" className="hover:text-secondary-100 transition-all duration-200">
                                    My Account
                                </Link>
                                <Link to="/" className="hover:text-secondary-100 transition-all duration-200">
                                    Contact Us
                                </Link>
                                <Link to="/" className="hover:text-secondary-100 transition-all duration-200">
                                    Cart
                                </Link>
                                <Link to="/" className="hover:text-secondary-100 transition-all duration-200">
                                    Log In
                                </Link>
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
                    <div className="flex justify-between items-center w-full mt-4 lg:mt-0 ">
                        <div className="flex items-center space-x-6">
                            {/* Logo */}
                            <Link to='/'>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-full rounded-sm"
                                />
                            </Link>
                            {/* Search Bar (you can use an input field here) */}
                            <input
                                type="text"
                                placeholder="Search"
                                className="py-2 px-5 border rounded-full w-full"
                            />
                            {/* Call Us Now */}
                            <div className="flex items-start space-x-2 w-full">
                                <Icon icon="solar:phone-linear" className="text-3xl" />
                                <p className="font-semibold">Call Us Now <br /> <span className="text-xl font-bold">+880 147258369</span></p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* User Login Icon */}
                            <Link to="/">
                                <Icon icon="mdi:account" className="text-3xl" />
                            </Link>
                            {/* Cart Icon */}
                            <Link to="/">
                                <Icon icon="mdi:cart" className="text-3xl" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* third row  */}
                <div className="container mx-auto my-8">
                    <div className="lg:flex justify-between w-full mt-4 lg:mt-0">
                        <div className="flex flex-col lg:flex-row lg:space-x-10 text-sm font-semibold">
                            {leftNavMenuData.map((item, index) =>
                                typeof item === "object" ? (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="hover:text-primary-100 transition-all duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <Link key={index} to="/" className="hover:text-gray-300">
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="relative mt-2 lg:mt-0 text-sm font-semibold">
                            {rightNavMenuData.map((item, index) =>
                                typeof item === "object" ? (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        onMouseEnter={toggleDropdown}
                                        onMouseLeave={toggleDropdown}
                                        className=" hover:text-primary-100 transition-all duration-200"
                                    >
                                        {item.label}
                                        {isDropdownOpen && (
                                            <div className="absolute z-40 left-0 mt-0 bg-white border border-gray-300 w-36">
                                                <ul>
                                                    {rightNavMenuData[0].dropdownItems.map((item, index) => (
                                                        <li key={index} className="p-2 hover:bg-gray-100">
                                                            <Link to={item.path}>{item.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </Link>
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
