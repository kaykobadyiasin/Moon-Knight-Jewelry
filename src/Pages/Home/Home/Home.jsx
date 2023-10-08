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
            <div className="container mx-auto my-10">
                <div>
                    <p className="bg-primary-100 text-center py-4 text-2xl rounded-md text-white xl:mx-0 lg:mx-5 md:mx-5 mx-5">Appointments: Book Now</p>
                </div>
                {/* category text  */}
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 my-10 xl:mx-0 lg:mx-5 md:mx-5 mx-5 animate__animated animate__fadeInRightBig">
                    <div className="py-5 px-5 bg-primary-100 rounded-md flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-white">Schoolwear</h3>
                        <button className="py-2 px-2 rounded-md mx-auto bg-white font-semibold hover:bg-secondary-100 hover:text-white transition-all duration-300"><Link to='/'>Shop Now</Link></button>
                    </div>
                    <div className="py-5 px-5 bg-primary-100 rounded-md flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-white">Workwear</h3>
                        <button className="py-2 px-2 rounded-md mx-auto bg-white font-semibold hover:bg-secondary-100 hover:text-white transition-all duration-300"><Link to='/'>Shop Now</Link></button>
                    </div>
                    <div className="py-5 px-5 bg-primary-100 rounded-md flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-white">Sports</h3>
                        <button className="py-2 px-2 rounded-md mx-auto bg-white font-semibold hover:bg-secondary-100 hover:text-white transition-all duration-300"><Link to='/'>Shop Now</Link></button>
                    </div>
                    <div className="py-5 px-5 bg-primary-100 rounded-md flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-white">E Scooter</h3>
                        <button className="py-2 px-2 rounded-md mx-auto bg-white font-semibold hover:bg-secondary-100 hover:text-white transition-all duration-300"><Link to='/'>Shop Now</Link></button>
                    </div>
                    <div className="py-5 px-5 bg-primary-100 rounded-md flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-white">Embroidered Polo Shirts</h3>
                        <button className="py-2 px-2 rounded-md mx-auto bg-white font-semibold hover:bg-secondary-100 hover:text-white transition-all duration-300"><Link to='/'>Shop Now</Link></button>
                    </div>
                    <div className="py-5 px-5 bg-primary-100 rounded-md flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-white">Jackets & Coats</h3>
                        <button className="py-2 px-2 rounded-md mx-auto bg-white font-semibold hover:bg-secondary-100 hover:text-white transition-all duration-300"><Link to='/'>Shop Now</Link></button>
                    </div>
                    <div className="py-5 px-5 bg-primary-100 rounded-md flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-white">Football</h3>
                        <button className="py-2 px-2 rounded-md mx-auto bg-white font-semibold hover:bg-secondary-100 hover:text-white transition-all duration-300"><Link to='/'>Shop Now</Link></button>
                    </div>
                    <div className="py-5 px-5 bg-primary-100 rounded-md flex flex-col ">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-white">Catalogues</h3>
                        <button className="py-2 px-2 rounded-md mx-auto bg-white font-semibold hover:bg-secondary-100 hover:text-white transition-all duration-300"><Link to='/catalogue'>Shop Now</Link></button>
                    </div>
                </div>
                {/* category text  */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 xl:mx-0 lg:mx-5 md:mx-5 mx-5 animate__animated animate__fadeInLeftBig">
                    <Link to='/'>
                        <div className="relative productCatalogue">
                            <img src={product1} className="w-full border-[12px] h-96 object-contain border-transparent animation-border" alt="" />
                            <div className="absolute top-24 border-r-2 border-y-2 bg-secondary-100 py-3 px-5 text-2xl font-semibold text-white min-w-4/12 text-center catalogueTitle">
                                <span>Workwear</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className="relative productCatalogue">
                            <img src={product2} className="w-full border-[12px] h-96 object-contain border-transparent animation-border" alt="" />
                            <div className="absolute top-24 border-r-2 border-y-2 bg-secondary-100 py-3 text-2xl font-semibold text-white min px-2 text-center catalogueTitle">
                                <span>Schoolwer</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className="relative productCatalogue">
                            <img src={product3} className="w-full border-[12px] h-96 object-contain border-transparent animation-border" alt="" />
                            <div className="absolute top-24 border-r-2 border-y-2 bg-secondary-100 py-3 text-2xl font-semibold text-white min px-2 text-center catalogueTitle">
                                <span>E Scooter</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className="relative productCatalogue">
                            <img src={product4} className="w-full border-[12px] h-96 object-contain border-transparent animation-border" alt="" />
                            <div className="absolute top-24 border-r-2 border-y-2 bg-secondary-100 py-3 text-2xl font-semibold text-white min px-2 text-center catalogueTitle">
                                <span>Sports</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className="relative productCatalogue">
                            <img src={product5} className="w-full border-[12px] h-96 object-contain border-transparent animation-border" alt="" />
                            <div className="absolute top-24 border-r-2 border-y-2 bg-secondary-100 py-3 text-2xl font-semibold text-white min px-2 text-center catalogueTitle">
                                <span>Jackets & Coats</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/catalogue'>
                        <div className="relative productCatalogue">
                            <img src={product6} className="w-full border-[12px] h-96 object-contain border-transparent animation-border" alt="" />
                            <div className="absolute top-24 border-r-2 border-y-2 bg-secondary-100 py-3 text-2xl font-semibold text-white min px-2 text-center catalogueTitle">
                                <span>Catalogues</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;