import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="relative flex min-h-screen bg-white overflow-hidden">
      {/* Header (existing code) */}
      <header className="flex items-center justify-between px-10 py-3 border-b border-solid border-[#f0f2f5]">
        {/* ...header content as in the original HTML */}
      </header>

      <main className="flex flex-col flex-grow justify-center px-40">
        <div className="max-w-[512px] w-full mx-auto rounded-xl p-8 bg-gray-100 shadow-md">
          <h1 className="text-2xl font-medium text-center mb-4">Forgot your password?</h1>
          <p className="text-gray-600 text-base text-center">
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </p>

          <form className="mt-6 flex flex-col gap-4">
            <div className="flex items-center rounded-lg bg-white border border-gray-300 px-3 py-2 focus-within:border-blue-500 focus-within:outline-none">
              <svg
                className="h-6 w-6 text-gray-400 mr-2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l16 16m-16 0l16 -16"
                />
              </svg>
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow border-none outline-none text-gray-700 focus:ring-0"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-blue-500 text-white font-medium text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send reset link
            </button>
          </form>

          <p className="text-gray-600 text-sm text-center mt-4">
            Check your spam or junk folder if you don't see the email in your inbox.
          </p>

          <div className="flex items-center justify-center mt-6 gap-4">
            <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-200 text-gray-500 font-medium text-base hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
              Try another way
            </button>
            <Link to="/login" className="flex items-center justify-center px-4 py-2 rounded-lg bg-transparent text-blue-500 font-medium text-base hover:underline focus:outline-none">
              Back to sign in
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;