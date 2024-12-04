import React from 'react';

const Register = () => {
    return (
    <div class="flex items-center justify-center md:py-24 bg-gray-100">
        <div class="card bg-white w-full max-w-lg shadow-2xl rounded-lg p-8">
          <h2 class="text-3xl font-bold text-gray-700 text-center ">Register</h2>
          <form class="space-y-6">
            {/* Username Field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text font-medium text-gray-700">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                class="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
             {/* Email Field  */}
            <div class="form-control">
              <label class="label">
                <span class="label-text font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            {/* Password Field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text font-medium text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                class="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
             {/* Photo URL Field  */}
            <div class="form-control">
              <label class="label">
                <span class="label-text font-medium text-gray-700">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Enter your photo URL"
                class="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
             {/* Submit Button  */}
            <div class="form-control">
              <button type="submit" class="btn bg-pink-500 hover:bg-pink-600 text-white text-lg w-full">
                Register
              </button>
            </div>
          </form>
        </div>
    </div>
    );
};

export default Register;