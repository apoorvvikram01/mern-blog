import React from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Importing Google icon

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side of the signup page (hidden on small screens) */}
      <div className="hidden md:flex w-1/2 bg-gray-100 p-8 md:p-16 justify-center">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
            BlogApp
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Welcome to BlogApp! Sign up to create and share your stories.
          </p>
        </div>
      </div>

      {/* Right side (signup form) */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center px-8 py-16 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Sign Up
          </h2>

          {/* Form starts here */}
          <form className="w-full">
            {/* Username */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Username"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="name@example.com"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Password"
              />
            </div>

            {/* Sign in with Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 mb-4 text-sm font-semibold bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-red-500 hover:text-white transition-colors duration-300"
            >
              <FcGoogle className="mr-2" size={24} />
              Sign in with Google
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-md focus:outline-none"
            >
              Sign Up
            </button>
          </form>
          {/* Form ends here */}

          {/* Already signed in link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/sign-in"
              className="text-indigo-600 hover:underline"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

