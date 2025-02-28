const services = [
    {
      title: "Fast Delivery",
      description: "Get your orders delivered quickly and safely to your doorstep.",
      icon: "🚚",
    },
    {
      title: "Quality Products",
      description: "We offer a wide range of high-quality products at great prices.",
      icon: "🛍️",
    },
    {
      title: "7869289722 Customer Support",
      description: "Our team is here to help you anytime, day or night.",
      icon: "📞",
    },
    
];

const ServicePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto mt-10 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
                <p className="mt-4 text-lg text-gray-200">
                    We offer top-notch services to enhance your shopping experience.
                </p>
            </div>

            <div className=" grid gap-8 sm:grid-cols-2 mt-40 lg:grid-cols-3 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                        <div className="text-5xl">{service.icon}</div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
