import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const MyJewelry = () => {

    const [myJewelrys, setMyJewelrys] = useState();

    useEffect(() => {
        fetch('https://jewelry-server-p35a67yxl-kaykobadyiasin.vercel.app/jewelrys')
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