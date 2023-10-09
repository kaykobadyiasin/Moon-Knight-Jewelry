import { useState } from "react";


const AddItems = () => {

    const [jewelryData, setJewelryData] = useState({
        image: '',
        name: '',
        price: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJewelryData({
            ...jewelryData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(jewelryData);
    };

    return (
        <div>
            <h2 className="text-2xl mb-5 font-semibold uppercase">Add Items</h2>
            <div className="w-full  mx-auto my-10">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Image URL"
                            name="image"
                            value={jewelryData.image}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-5">
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Jewelry Name"
                                name="name"
                                value={jewelryData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                placeholder="Price"
                                name="price"
                                value={jewelryData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Jewelry Description"
                            name="description"
                            value={jewelryData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-secondary-100 hover:bg-opacity-80  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add Jewelry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;