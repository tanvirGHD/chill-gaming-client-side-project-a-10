import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import registerLottieData from '../../assets/Animation - 1736180117426.json'
import Lottie from "lottie-react";

const Register = () => {
  const { createNewUser, manageProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        manageProfile(name, photo)
          .then(() => {
            // Now that the profile is updated, proceed with navigation
            const newUser = { name, email, photo };

            // Save new user info to DB
            fetch("https://assignment-10-server-side-eta-eight.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("User created in DB", data);
                if (data.insertedId) {
                  Swal.fire({
                    title: "Success",
                    text: "Do you want to continue?",
                    icon: "success",
                    confirmButtonText: "Ok",
                  }).then(() => {
                    navigate("/");
                  });
                }
              })
              .catch((err) => {
                console.log("Error saving user to DB", err);
                setError("Failed to save user to the database.");
              });
          })
          .catch((err) => {
            setError("Failed to update profile.");
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center md:py-20  px-4 space-y-6 md:space-y-0 md:space-x-6">
      <div className="card bg-white my-5 dark:bg-[#3e4369] dark:text-white w-full max-w-lg shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold dark:text-white text-gray-700 text-center">
          Register
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Username Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium dark:text-white text-gray-700">
                Username
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your username"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium dark:text-white text-gray-700">
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
          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium dark:text-white text-gray-700">
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
          </div>
          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium dark:text-white text-gray-700">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-white text-lg w-full"
            >
              Register
            </button>
          </div>
          <h2 className="text-center text-lg dark:text-white text-gray-700 font-bold">
            Already have an account?{" "}
            <span className="text-red-500 font-bold">
              <Link to="/login">Login</Link>
            </span>
          </h2>
        </form>
      </div>
        {/* Animation Section */}
        <div className="w-full md:w-1/2 order-first md:order-last">
        <Lottie
          animationData={registerLottieData}
          className="w-full h-[250px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Register;


