import React from "react";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md rounded-lg shadow-lg bg-white px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome back!</h1>
        <p className="text-gray-600 mb-6">Log in to your Linktree.</p>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email or Username
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="mt-8 text-sm text-gray-600">
          <p>
            Forgot password? <a href="#">Click here</a>
          </p>
          <p>
            Forgot username? <a href="#">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
