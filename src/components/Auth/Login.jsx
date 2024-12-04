import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
<div class="flex items-center justify-center md:py-52 bg-gray-100">
  <div class="card bg-white w-full max-w-sm shadow-2xl rounded-lg">
    <h2 class="text-3xl font-bold text-gray-700 text-center pt-3">Login</h2>
    <form class="card-body space-y-3">
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
        <label class="label">
          <a href="#" class="label-text-alt text-pink-500 hover:underline">
            Forgot password?
          </a>
        </label>
      </div>
      <div class="form-control">
        <button type="submit" class="btn bg-pink-500 hover:bg-pink-600 text-white text-lg">
          Login
        </button>
      </div>
    </form>
  </div>
</div>


  );
};

export default Login;
