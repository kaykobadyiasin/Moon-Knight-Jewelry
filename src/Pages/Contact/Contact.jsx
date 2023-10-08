import PageBanner from "../../components/PageBanner/PageBanner";


const Contact = () => {
    return (
        <div>
            <PageBanner image={'https://images.unsplash.com/photo-1569173675610-42c361a86e37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80'} title={'Contact Us'} subtitle={'Brandit Fashion Ltd.'} />

            <div className="py-10">
                <iframe className="w-full h-72" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.282768396495!2d-0.4034770402359132!3d51.89230360334377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487648351849a143%3A0xdd5c9d2fcf423af0!2s24%20Stockingstone%20Rd%2C%20Luton%20LU2%207NB%2C%20UK!5e0!3m2!1sen!2sbd!4v1696672017367!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" ></iframe>
            </div>

            <div className="bg-gradient-to-b py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h1 className="text-4xl font-semibold mb-8">Get in Touch</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                            <p className="space-y-5">
                                <p><strong>Email:</strong> brandituk@gmail.com</p>
                                <p><strong>Phone:</strong> +44 7393 509734</p>
                                <p><strong>Address:</strong> 24 STOCKINGSTONE ROAD, LUTON LU2 7NB</p>
                                <p><strong>Opening Hours: </strong>
                                24/7 Online Shop</p>
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Name*</label>
                                    <input type="text" required className="w-full bg-gray-100 rounded-md px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Email*</label>
                                    <input type="email" required className="w-full bg-gray-100 rounded-md px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Phone Number*</label>
                                    <input type="text" required className="w-full bg-gray-100 rounded-md px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Message*</label>
                                    <textarea required className="w-full bg-gray-100 rounded-md px-3 py-2" rows="5"></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-primary-100 hover:bg-secondary-100 transition-all duration-300 text-white font-semibold px-4 py-2 rounded-md w-full"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;