import React from 'react'

function Login() {
  return (
<div className="flex items-center justify-center h-[90vh] bg-green-800">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center cursor-default">Login</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username or Email or Phone Number"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-900"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-green-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 cursor-default">
            Don't have an account?{" "}
            <a href="#" className="text-green-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login