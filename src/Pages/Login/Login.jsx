import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [hideShow, setHideShow] = useState()

    const hideShowToggol = () => {
        setHideShow(!hideShow)
    }


    return (
        <div className="min-h-96 my-20 bg-primary flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-secondary mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-secondary mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-secondary mb-2">
                            Password
                        </label>
                        <input
                            type={hideShow ? `password` : `text`}
                            id="password"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="********"
                        />
                        <span onClick={hideShowToggol} className="cursor-pointer absolute right-3 top-[45px]">
                            {hideShow ? <Icon icon="mdi:eye-off" className="text-xl" /> : <Icon icon="mdi:eye" className="text-xl" />}
                        </span>
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-secondary-100 text-white p-2 rounded hover:bg-opacity-80 transition duration-300"
                        >
                            Log In
                        </button>
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                        Do not have an account? <Link to="/signUp" className="text-blue-600">Sign up</Link>
                    </p>
                </form>
                <div className="flex justify-center items-center mt-5">
                    <div><button><Icon icon="devicon:google" className="text-3xl" /></button></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
