import React from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllReviews = () => {
  const reviews = useLoaderData();
  console.log(reviews)


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Reviews: {reviews.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={review.gameCover}
              alt={review.gameTitle}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{review.gameTitle}</h3>
            <p className="text-gray-600">Published: {review.publishingYear}</p>
            <p className="text-gray-800 mt-2">
              <strong>Review:</strong> {review.reviewDescription}
            </p>
            <p className="text-gray-800 mt-1">
              <strong>Rating:</strong> {review.rating} / 5
            </p>
            <p className="text-gray-800 mt-1">
              <strong>Genre:</strong> {review.genre}
            </p>
            <p className="text-gray-800 mt-1">
              <strong>Text:</strong> {review.text}
            </p>
            {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  <Link to="reviewDetails">Explore Details</Link>
                  </button> */}
            <Link
            //   to={`/allReviews/reviewDetails/${review._id}`}
              className="mt-4 text-blue-500 hover:underline"
            >
              Explore Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AllReviews;
