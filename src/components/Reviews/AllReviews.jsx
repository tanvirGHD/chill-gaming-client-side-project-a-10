import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const reviews = useLoaderData();

  if (!reviews || reviews.length === 0) {
    return <p className="text-center text-gray-500">No reviews available.</p>;
  }

  return (
    <div className="p-4 bg-pink-100 h-screen">
      <h2 className="text-3xl font-bold mb-4">All Reviews</h2>
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
            <Link
              to={`/details/${review._id}`}
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
