import 
 { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-lg dark:bg-gray-900 h-20 text-2xl">
      <div className="max-w-10xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
    
          <a href="#" className="text-2xl flex font-bold gap-2 dark:text-pink-600">
            Disha  <h1 className="text-white"> Dairy Dazz</h1>
          </a>

          <div className="hidden md:flex space-x-6 ">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 ml-140">
              Home
            </a>
            <a href="/About" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 ml-4">
              About
            </a>
            <a href="/Services" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 ml-4">
              Services
            </a>
            <a href="/Register" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 ml-4">
             Register
            </a>
            <a href="/Login" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 ml-4">
             Login
            </a>
            <a href="/Contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 ml-4">
             Contact
            </a>
          </div>

         <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute w-full left-0 top-16 shadow-lg z-50">
          <a href="/" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            Home
          </a>
          <a href="/About" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            About
          </a>
          <a href="/Service" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            Services
          </a>
          <a href="/Register" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            Register
          </a>
          <a href="/Login" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            Login
          </a>
          <a href="/Contact" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;