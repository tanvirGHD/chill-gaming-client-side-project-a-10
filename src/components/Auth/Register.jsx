// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import Swal from "sweetalert2";

// const Register = () => {
//   const {createUser} = useContext(AuthContext)

//   const handleRegister = event => {
//     event.preventDefault();
//     const form = event.target;

//     // const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     // const photo = form.photo.value;

//     console.log( email, password);

//     createUser(email, password)
//     .then(result=> {

//       console.log('User create a fire base',result.user);
//       // const createdAt = result?.user?.metadata?.creationTime;

//       // const newUser = {name, email,photo,createdAt}
//       const newUser = { email}

//       //save new user info to db
//       fetch('http://localhost:5000/users', {
//         method: 'POST',
//         headers: {
//           'content-type' : 'application/json'
//         },
//         body:JSON.stringify(newUser)

//       })
//       .then(res => res.json())
//       .then(data=>{
//         console.log('user created to db', data)
//         if(data.insertedId){
//           Swal.fire({
//             title: 'Success',
//             text: 'Do you want to continue',
//             icon: 'success',
//             confirmButtonText: 'Cool'
//           })
//         }
//       })

//     })
//     .catch(error =>{
//       console.log('Error',error.message)
//     })

//   }

//     return (
//     <div class="flex items-center justify-center md:py-24 bg-gray-100">
//         <div class="card bg-white w-full max-w-lg shadow-2xl rounded-lg p-8">
//           <h2 class="text-3xl font-bold text-gray-700 text-center">Register</h2>
//           <form onSubmit={handleRegister} class="space-y-6">
//             {/* Username Field */}
//             <div class="form-control">
//               <label class="label">
//                 <span class="label-text font-medium text-gray-700">Username</span>
//               </label>
//               <input
//                 type="text"
//                 name='name'
//                 placeholder="Enter your username"
//                 class="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//                 required
//               />
//             </div>
//              {/* Email Field  */}
//             <div class="form-control">
//               <label class="label">
//                 <span class="label-text font-medium text-gray-700">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name='email'
//                 placeholder="Enter your email"
//                 class="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//                 required
//               />
//             </div>
//             {/* Password Field */}
//             <div class="form-control">
//               <label class="label">
//                 <span class="label-text font-medium text-gray-700">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name='password'
//                 placeholder="Enter your password"
//                 class="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//                 required
//               />
//             </div>
//              {/* Photo URL Field  */}
//             <div class="form-control">
//               <label class="label">
//                 <span class="label-text font-medium text-gray-700">Photo URL</span>
//               </label>
//               <input
//                 type="url"
//                 name='photo'
//                 placeholder="Enter your photo URL"
//                 class="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//                 required
//               />
//             </div>
//              {/* Submit Button  */}
//             <div class="form-control">
//               <button type="submit" class="btn bg-pink-500 hover:bg-pink-600 text-white text-lg w-full">
//                 Register
//               </button>
//             </div>
//           </form>
//         </div>
//     </div>
//     );
// };

// export default Register;

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const photo = form.photo.value;

    console.log(email, password);

    createNewUser(email, password)
      .then((result) => {
        console.log("User created in Firebase", result.user);
        const user = result.user;
        setUser(user)
        // const createdAt = result?.user?.metadata?.creationTime;

        // const newUser = {name, email,photo}
        const newUser = { email };

        // Save new user info to DB
        fetch("http://localhost:5000/users", {
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
                text: "Do you want to continue",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  return (
    <div className="flex items-center justify-center md:py-24 bg-gray-100">
      <div className="card bg-white w-full max-w-lg shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-700 text-center">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Username Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
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
          {/* Password Field */}
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
          </div>
          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
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
          <h2 className="text-center text-lg font-bold">
            Already have An Accout? Plaese{" "}
            <span className="text-red-500 font-bold">
              <Link to="/login">Login</Link>
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Register;
