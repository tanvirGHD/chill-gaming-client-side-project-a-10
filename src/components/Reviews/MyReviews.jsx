
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);

  //Delete 
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
        fetch(`https://assignment-10-server-side-eta-eight.vercel.app/review/${id}`, {
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

  //update


  return (
    <div className="bg-pink-100 h-screen">
      <h2 className="font-bold p-3 text-3xl">My Reviews</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Review</th>
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
                <td>{review.reviewDescription}</td>
                <td>{review.gameTitle}</td>
                <td>{review.rating}</td>
                <td>
                  <Link to={`/updateReview/${review._id}`}>
                  <button>
                    <img
                      className="h-10 w-10"
                      src="https://img.icons8.com/?size=100&id=tTY6SQky7exq&format=png&color=000000"
                      alt=""
                    />
                  </button>
                  </Link>
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









