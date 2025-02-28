import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Top Navigation Links */}
   

        {/* Section Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center md:ml-50 md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <a href="/About" className="block text-gray-400 hover:text-white transition">About Us</a>
            <a href="/Service" className="block text-gray-400 hover:text-white transition">Services</a>
            <a href="#" className="block text-gray-400 hover:text-white transition">Features</a>
          </div>
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <a href="#" className="block text-gray-400 hover:text-white transition">Resources</a>
            <a href="#" className="block text-gray-400 hover:text-white transition">Conditions</a>
            <a href="#" className="block text-gray-400 hover:text-white transition">Opportunities</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow</h3>
            <a href="#" className="block text-gray-400 hover:text-white transition">Instagram</a>
            <a href="#" className="block text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="block text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="block text-gray-400 hover:text-white transition">Link din</a>

          </div>
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <a href="#" className="block text-gray-400 hover:text-white transition">Email</a>
            <a href="#" className="block text-gray-400 hover:text-white transition">Mobile No</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 animate-bounce mt-6">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition text-2xl">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition text-2xl">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition text-2xl">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="text-xl mt-6 text-gray-400">@{new Date().getFullYear()}  All rights reserved.</p>
        <p>Created By Sumit Patel</p>
      </div>
    </footer>
  );
};

export default Footer;
