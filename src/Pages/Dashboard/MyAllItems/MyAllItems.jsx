import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const MyAllItems = () => {

    const [jewelrys, setJewelrys] = useState();

    useEffect(() => {
        fetch('../../../../public/http://localhost:5000/jewelrys')
            .then(res => res.json())
            .then(data => setJewelrys(data))
    }, [])


    return (
        <div>
            <div>
                <h2 className="text-2xl mb-5 font-semibold uppercase">My All Items</h2>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jewelrys?.map(jewelry =>
                                    <tr key={jewelry._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-lg dark:text-white">
                                            {jewelry?.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            <img src={jewelry?.image} className='w-20 rounded-lg' alt="" />
                                        </td>
                                        <td className="px-6 py-4 font-semibold">
                                            <span className='text-2xl'>৳</span> {jewelry?.price}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyAllItems;