import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from '../../../assets/Logo2.png'

const Footer = () => {
    return (
        <>
            <footer className="bg-secondary-100 text-white py-12 lg:px-0 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <img src={logo} alt="Brand Logo" className="w-full" />
                    </div>
                    <p className="text-gray-400">Elevate your style with our exquisite jewelry collections.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">EXPLORE</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/allJewelry" className="text-lg hover:underline">
                                Shop Jewelry
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-lg hover:underline">
                                About Us
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
                    <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
                    <div className="flex items-center space-x-2 text-lg">
                        <Icon icon="ic:baseline-phone" />
                        <p className="text-gray-400">+88 01888000000</p>
                    </div>
                    <div className="flex items-center space-x-2 text-lg">
                        <Icon icon="tabler:mail-filled" />
                        <p className="text-gray-400">moonknightjewelry@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-2 text-lg mt-2">
                        <Icon icon="mdi:location" />
                        <p className="text-gray-400">Address: KA-244, Kuril, Progoti Shoroni, Dhaka</p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="text-center py-5 bg-primary-100 text-white font-medium">
            <p>&copy; 2023 Moon Knight Jewelry. All Rights Reserved.</p>
        </div>
        </>
    );
};

export default Footer;
