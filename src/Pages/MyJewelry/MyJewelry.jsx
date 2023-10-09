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
import product17 from '../../assets/products/image17.jpg'
import { useEffect, useState } from "react";


const MyJewelry = () => {

    const [myJewelrys, setMyJewelrys] = useState();

    useEffect(() => {
        fetch('jewelry.json')
            .then(res => res.json())
            .then(data => setMyJewelrys(data))
    }, [])


    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 lg:mx-0 md:mx-5 mx-5 animate__animated animate__fadeIn" >

                {
                    myJewelrys?.map(jewelry => <>
                        <div key={jewelry._id}>
                            <Link to='/'>
                                <div className="relative">
                                    <img src={jewelry?.image} className="w-full p-2 border h-96 object-cover border-transparent animation-border" alt="" />
                                    <div className="flex items-center justify-between bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                                        <span>{jewelry?.name}</span>
                                        <span>{jewelry?.price}৳</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default MyJewelry;