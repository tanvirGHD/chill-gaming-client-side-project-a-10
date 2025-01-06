import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import loginLottieData from "../../assets/Animation - 1736180117426.json";
import Lottie from "lottie-react";

const Login = () => {
  const { userLogin, handleGoogleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

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
          navigate("/");
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

  const handleGoogleLoginClick = () => {
    handleGoogleLogin()
      .then(() => {
        navigate("/");
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
    <div className="flex flex-col md:flex-row-reverse items-center justify-center md:py-20 px-4 space-y-6 md:space-y-0 md:space-x-6">
      {/* Login Form Section */}
      <div className="card w-full max-w-sm shadow-2xl m-5 rounded-lg dark:bg-[#3e4369] bg-white">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-white text-center pt-3">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="card-body space-y-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700 dark:text-white">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700 dark:text-white">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
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
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-white text-lg"
            >
              Login
            </button>
          </div>
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
          <h2 className="text-center text-lg text-gray-600 dark:text-white font-bold">
            Don’t Have An Account?{" "}
            <span className="text-red-500 font-bold">
              <Link to="/register">Register</Link>
            </span>
          </h2>
        </form>
      </div>

      {/* Animation Section */}
      <div className="w-full md:w-1/2 order-first md:order-last">
        <Lottie
          animationData={loginLottieData}
          className="w-full h-[250px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Login;
