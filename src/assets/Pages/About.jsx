const About = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white text-center py-16 px-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Learn more about our product & our success.
          </p>
        </section>
  
        {/* About Section */}
        <section className="max-w-4xl mx-auto my-12 p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-3xl font-semibold text-center">Our Product</h2>
          <p className="mt-4 text-gray-700 text-center">
            We provide the best products like ice cream, Maharajapan, cold coffee, cold coco, etc.
          </p>
        </section>
  
        {/* Team Section */}
        <section className="max-w-6xl mx-auto  p-6">
          <h2 className="text-3xl font-semibold text-center text-white">Meet the Team</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[ 
              { name: "Dilip Patel", role: "CEO & Founder", src: "s2.jpg" },
              { name: "Manendra Patel", role: "Employee", src: "s3.jpg" },
              { name: "Sumit Patel", role: "Web Developer", src: "s4.jpg" },
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-6 shadow-md rounded-lg text-center transform transition duration-300 hover:scale-105 "
              >
                <img 
                  src={member.src} 
                  alt={member.name} 
                  className="w-40 h-70 rounded-full mx-auto object-cover border-4 border-blue-500 transition duration-300"
                />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};
  
export default About;