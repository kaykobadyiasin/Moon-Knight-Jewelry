import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="min-h-96 my-20 bg-primary flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-secondary mb-6">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-secondary mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Your Name"
                        />
                    </div>
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
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-secondary mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="********"
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-secondary-100 text-white p-2 rounded hover:bg-opacity-80 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                        Alredy have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;