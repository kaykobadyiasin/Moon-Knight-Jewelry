import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="bg-secondary-100 mt-20 text-white py-12 lg:px-0 px-5">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
                        <div className="flex items-center space-x-2 text-lg">
                            <Icon icon="ic:baseline-phone" />
                            <p className="text-secondary-200">+44 7393 509734</p>
                        </div>
                        <div className="flex items-center space-x-2 text-lg">
                            <Icon icon="tabler:mail-filled" />
                            <p className="text-secondary-200">branditfashionuk@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-2 text-lg mt-2">
                            <Icon icon="mdi:location" />
                            <p className="text-secondary-200">Address: 24 STOCKINGSTONE ROAD, LUTON LU2 7NB</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">QUICK LINKS</h2>
                        <ul className="space-y-2 text-secondary-200">
                            <li>
                                <Link to="/about" className="text-lg hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-lg hover:underline">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-lg hover:underline">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/termsConditions" className="text-lg hover:underline">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-lg hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h2 className="text-2xl font-bold mb-4">IMPORTANT INFO</h2>
                        <p className="text-lg mb-3 font-semibold">
                            Temporary Opening Hours
                        </p>
                        <p className="text-lg text-secondary-200">24/7 hours Online Shop</p>
                    </div>
                </div>
            </footer>
            <div className="text-center py-5 bg-primary-100 text-white font-medium">
                <p>Copyright 2023 © Brandit Fashion Stich. All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Footer;
