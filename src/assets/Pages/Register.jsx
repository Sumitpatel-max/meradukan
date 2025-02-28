export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl animate-bounce font-bold text-center text-gray-800 mb-6">
          Sign an Account
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              placeholder="Your Password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile</label>
            <input 
              type="tel" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              placeholder="Your Mobile Number"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r animate-pulse from-blue-500 to-purple-500 text-white p-3 rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105"
          >
            Submit
          </button>
        </form>
     <div className=" text-center">
     <p className="text-center mt-4">Have an account? <a href="/Login" className="text-blue-600">  Log in</a></p>
     </div>
      </div>
    </div>
  );
}
