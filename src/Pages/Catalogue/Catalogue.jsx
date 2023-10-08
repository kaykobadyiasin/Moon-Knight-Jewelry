import { Link } from "react-router-dom";
import product16 from '../../assets/products/image16.jpg'
import product2 from '../../assets/products/image2.jpg'
import product3 from '../../assets/products/image3.jpg'
import product4 from '../../assets/products/image4.jpg'
import product5 from '../../assets/products/image5.jpg'
import product6 from '../../assets/products/image6.jpg'
import product7 from '../../assets/products/image7.jpg'
import product8 from '../../assets/products/image8.jpg'
import product9 from '../../assets/products/image9.jpg'
import product11 from '../../assets/products/image11.jpg'
import product12 from '../../assets/products/image12.jpg'
import product13 from '../../assets/products/image13.jpg'
import product14 from '../../assets/products/image14.jpg'

const Catalogue = () => {
    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-5 my-10 lg:mx-0 md:mx-5 mx-5" >
                <Link to='/'>
                    <div className="relative ">
                        <img src={product16} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Workwear</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product2} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Schoolwer</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product3} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>E Scooter</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product4} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Sports</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product5} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Jackets & Coats</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product6} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Catalogues</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product7} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Catalogues</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product8} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Catalogues</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product9} className="w-full p-2 border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Catalogues</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product11} className="w-ful border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Catalogues</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product12} className="w-ful border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Catalogues</span>
                        </div>
                    </div>
                </Link>
                <Link to='/catalogue'>
                    <div className="relative">
                        <img src={product13} className="w-ful border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Catalogues</span>
                        </div>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="relative">
                        <img src={product14} className="w-ful border h-96 object-contain border-transparent animation-border" alt="" />
                        <div className=" bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                            <span>Catalogues</span>
                        </div>
                    </div>
                </Link>
            </div >
        </div>
    );
};

export default Catalogue;