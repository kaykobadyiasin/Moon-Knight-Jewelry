import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Home = () => {

    const [jewelrys, setJewelrys] = useState();

    useEffect(() => {
        fetch('https://jewelry-server-p35a67yxl-kaykobadyiasin.vercel.app/jewelrys')
            .then(res => res.json())
            .then(data => setJewelrys(data))
    }, [])

    return (
        <div>
            <Banner />
            <div className="container mx-auto my-20">
                <div>
                    <p className="bg-primary-100 text-center py-4 text-2xl rounded-md text-white xl:mx-0 lg:mx-5 md:mx-5 mx-5">Appointments: Book Now</p>
                </div>

                {/* category text  */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 xl:mx-0 lg:mx-5 md:mx-5 mx-5 animate__animated animate__fadeIn animate__slower">

                    {
                        jewelrys?.slice(0, 6).map(jewelry => <>
                            <div key={jewelry?._id}>
                                <Link to='/allJewelry'>
                                    <div className="relative productCatalogue">
                                        <img src={jewelry?.image} className="w-full border-[2px] shadow-lg border-dotted h-96 object-cover animation-border" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;