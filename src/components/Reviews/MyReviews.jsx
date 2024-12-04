// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

// const MyReviews = () => {
//   const loadedUsers = useLoaderData();
//   const [users, setUsers] = useState(loadedUsers);

//   const handelUserDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         //delete form the database
//         fetch(`http://localhost:5000/users/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount) {
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success",
//               });

//               const remainingUsers = users.filter(user => user._id !== id)
//               setUsers(remainingUsers);
//             }
//           });
//       }
//     });
//   };



//   return (
//     <div>
//       <h2 className="text-center text-3xl">My Reviews: {users.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* Table Header */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Photo</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           {/* Table Body */}
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <th>{index + 1}</th>
//                 <td>
//                   <div className="avatar">
//                     <div className="mask mask-squircle h-12 w-12">
//                       <img
//                         src={user.photo || "https://via.placeholder.com/150"}
//                         alt="User Avatar"
//                       />
//                     </div>
//                   </div>
//                 </td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <div className="">
//                   <button>
//                     <img
//                       className="h-10 w-10"
//                       src="https://img.icons8.com/?size=100&id=tTY6SQky7exq&format=png&color=000000"
//                       alt=""
//                     />
//                   </button>
//                   <button onClick={() => handelUserDelete(user._id)}>
//                     <img
//                       className="h-10 w-10"
//                       src="https://img.icons8.com/?size=100&id=119057&format=png&color=000000"
//                       alt=""
//                     />
//                   </button>
//                 </div>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyReviews;















import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);

  const handelUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete from the database
        fetch(`http://localhost:5000/review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingReview = reviews.filter((review) => review._id !== id);
              setReviews(remainingReview);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center text-3xl">My Reviews: {reviews.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>GameTitle</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {reviews.map((review, index) => (
              <tr key={review._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="h-12 w-12">
                      <img
                      className="rounded-full"
                        src={review.gameCover || "https://via.placeholder.com/150"}
                        alt="User Avatar"
                      />
                    </div>
                  </div>
                </td>
                <td>{review.text}</td>
                <td>{review.email}</td>
                <td>{review.gameTitle}</td>
                <td>{review.rating}</td>
                <td>
                  <button>
                    <img
                      className="h-10 w-10"
                      src="https://img.icons8.com/?size=100&id=tTY6SQky7exq&format=png&color=000000"
                      alt=""
                    />
                  </button>
                  <button onClick={() => handelUserDelete(review._id)}>
                    <img
                      className="h-10 w-10"
                      src="https://img.icons8.com/?size=100&id=119057&format=png&color=000000"
                      alt=""
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;