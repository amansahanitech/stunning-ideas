const Contact = () => {
    return (
        <div className="bg-white">
        <div className="mx-auto py-8 px-4 bg-white w-screen min-h-screen lg:w-7/12 lg:mx-auto lg:flex lg:justify-start flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 text-gray-900 lg:flex lg:justify-center">
                Contact Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:place-items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Address</h2>
                    <p className="text-lg text-gray-800 mb-4">
                        The Stunning IDEAS<br />
                        Chhatrapti Sambhaji Nagar, Maharashtra, 431001
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                    <p className="text-lg text-gray-800 mb-4">
                        <strong>WhatsApp:</strong> <a href="https://wa.me/+917666920328">+91 7666920328</a><br />
                        <strong>Email:</strong> <a href="mailto:thestunningideas@gmail.com">thestunningideas@gmail.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+917666920328">+91 7666920328</a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;
