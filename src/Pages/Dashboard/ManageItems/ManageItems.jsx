
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const ManageItems = () => {

    const [jewelrys, setJewelrys] = useState();

    useEffect(() => {
        fetch('../../../../public/https://jewelry-server-p35a67yxl-kaykobadyiasin.vercel.app/jewelrys')
            .then(res => res.json())
            .then(data => setJewelrys(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl mb-5 font-semibold uppercase">Manage Items</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jewelrys?.map(jewelry =>
                                <tr key={jewelry._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="text-lg px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {jewelry?.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        <span className='text-2xl'>৳</span> {jewelry?.price}
                                    </td>
                                    <td className="px-6 py-4 flex gap-5 text-xl">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Icon icon="tabler:edit" /></a>
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Icon icon="fluent-mdl2:delete" /></a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;