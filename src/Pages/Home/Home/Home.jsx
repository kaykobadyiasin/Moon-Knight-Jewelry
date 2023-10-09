import Banner from "../Banner/Banner";
import product1 from '../../../assets/products/image12.jpg'
import product2 from '../../../assets/products/image11.jpg'
import product3 from '../../../assets/products/image9.jpg'
import product4 from '../../../assets/products/image8.jpg'
import product5 from '../../../assets/products/image17.jpg'
import product6 from '../../../assets/products/image13.jpg'
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto my-20">
                <div>
                    <p className="bg-primary-100 text-center py-4 text-2xl rounded-md text-white xl:mx-0 lg:mx-5 md:mx-5 mx-5">Appointments: Book Now</p>
                </div>

                {/* category text  */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 xl:mx-0 lg:mx-5 md:mx-5 mx-5 animate__animated animate__fadeIn animate__slower">
                    <Link to='/allJewelry'>
                        <div className="relative productCatalogue">
                            <img src={product1} className="w-full border-[2px] shadow-lg border-dotted h-96 object-cover animation-border" alt="" />
                        </div>
                    </Link>
                    <Link to='/allJewelry'>
                        <div className="relative productCatalogue">
                            <img src={product2} className="w-full border-[2px] shadow-lg border-dotted h-96 object-cover animation-border" alt="" />
                        </div>
                    </Link>
                    <Link to='/allJewelry'>
                        <div className="relative productCatalogue">
                            <img src={product3} className="w-full border-[2px] shadow-lg border-dotted h-96 object-cover animation-border" alt="" />
                        </div>
                    </Link>
                    <Link to='/allJewelry'>
                        <div className="relative productCatalogue">
                            <img src={product4} className="w-full border-[2px] shadow-lg border-dotted h-96 object-cover animation-border" alt="" />
                        </div>
                    </Link>
                    <Link to='/allJewelry'>
                        <div className="relative productCatalogue">
                            <img src={product5} className="w-full border-[2px] shadow-lg border-dotted h-96 object-cover animation-border" alt="" />
                        </div>
                    </Link>
                    <Link to='/allJewelry'>
                        <div className="relative productCatalogue">
                            <img src={product6} className="w-full border-[2px] shadow-lg border-dotted h-96 object-cover animation-border" alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;