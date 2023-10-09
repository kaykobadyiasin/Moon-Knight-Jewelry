import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllJewelry = () => {

    const [jewelrys, setJewelrys] = useState();

    useEffect(() => {
        fetch('jewelry.json')
            .then(res => res.json())
            .then(data => setJewelrys(data))
    }, [])

    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 my-10 lg:mx-0 md:mx-5 mx-5 animate__animated animate__fadeIn" >
                {
                    jewelrys?.map(jewelry => <>
                        <div key={jewelry._id}>
                            <Link to='/'>
                                <div className="relative">
                                    <img src={jewelry?.image} className="w-full p-2 border h-96 object-cover border-transparent animation-border" alt="" />
                                    <div className="flex items-center justify-between bg-secondary-100 py-3 px-5 text-xl font-normal text-white ">
                                        <span>{jewelry?.name}</span>
                                        <span><span className='text-2xl'>৳</span> {jewelry?.price}</span>
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

export default AllJewelry;