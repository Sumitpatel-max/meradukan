import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-lg border border-white/20">
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Contact Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <User className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 p-3 border border-gray-300 rounded-lg bg-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-600"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 p-3 border border-gray-300 rounded-lg bg-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-600"
              required
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-3 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-12 p-3 border border-gray-300 rounded-lg bg-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-600 h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
