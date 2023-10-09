import PageBanner from "../../components/PageBanner/PageBanner";


const Contact = () => {
    return (
        <div>
            <PageBanner image={'https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} title={'Contact Us'} subtitle={'Moon Night Jewelry.'} />

            <div className="py-10">

                <iframe className="w-full h-72" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1420865011564!2d90.4216643759737!3d23.8135459863481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1696768911833!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" ></iframe>
            </div>

            <div className="bg-gradient-to-b py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h1 className="text-4xl font-semibold mb-8">Get in Touch</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                            <p className="space-y-5">
                                <p><strong>Email:</strong> moonknightjewelry@gmail.com</p>
                                <p><strong>Phone:</strong> +88 01888000000</p>
                                <p><strong>Address:</strong> KA-244, Kuril, Progoti Shoroni, Dhaka</p>
                                <p><strong>Opening Hours: </strong>
                                <br />
                                    <br />
                                    Sunday
                                    11 AM-8 PM,
                                    <br />
                                    <br />
                                    Monday
                                    11 AM-8 PM,
                                    <br />
                                    <br />
                                    Tuesday
                                    11 AM-8 PM,
                                    <br />
                                    <br />
                                    Wednesday
                                    Closed,
                                    <br />
                                    <br />
                                    Thursday
                                    11 AM-8 PM,
                                    <br />
                                    <br />
                                    Friday
                                    11 AM-9 PM,
                                    <br />
                                    <br />
                                    Saturday
                                    10:45 AM-8 PM,</p>
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