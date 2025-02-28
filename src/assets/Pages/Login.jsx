

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-700">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Log in</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
          
            <a href="#" className="text-indigo-600 pl-2 text-sm hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 animate-pulse text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Log in
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">Do not have an account? <a href="/Register" className="text-indigo-600 ">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
