
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin, handleGoogleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Success",
          text: "Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          navigate("/"); // Navigate to home page
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Please provide a valid email and password.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  // Handle Google login
  const handleGoogleLoginClick = () => {
    handleGoogleLogin()
      .then(() => {
        navigate("/"); // Navigate to home page after successful Google login
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message || "Google login failed.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="flex items-center justify-center md:py-52 bg-pink-100">
      <div className="card bg-white w-full max-w-sm shadow-2xl rounded-lg">
        <h2 className="text-3xl font-bold text-gray-700 text-center pt-3">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="card-body space-y-3">
          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt text-pink-500 hover:underline"
              >
                Forgot password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-white text-lg"
            >
              Login
            </button>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLoginClick}
            className="flex items-center justify-center border text-green-600 py-2 px-4 rounded-lg font-bold space-x-2"
          >
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/?size=100&id=JvOSspDsPpwP&format=png&color=000000"
              alt="Google Icon"
            />
            <span>Google Login</span>
          </button>

          {/* Register Link */}
          <h2 className="text-center text-lg font-bold">
            Don’t Have An Account?{" "}
            <span className="text-red-500 font-bold">
              <Link to="/register">Register</Link>
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
