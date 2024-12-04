import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
const ReviewDetails = () => {
  const review = useLoaderData();

  return (
    <div className="p-6 w-5/12 mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={review.gameCover}
          alt={review.gameTitle}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">{review.gameTitle}</h3>
            <p className="text-gray-600 mt-2">
              <strong>Published:</strong> {review.publishingYear}
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Review:</strong> {review.reviewDescription}
            </p>
          </div>
          <div>
            <p className="text-gray-800 mt-2">
              <strong>Rating:</strong> {review.rating} / 5
            </p>
            <p className="text-gray-800 mt-2">
              <strong>Genre:</strong> {review.genre}
            </p>
            <p className="text-gray-800 mt-2">
              <strong>Text:</strong> {review.text}
            </p>
          </div>
            <div>
            <p>
              <a>
                <FaBookmark className="h-8 w-8 ml-2"></FaBookmark>
                <p className="text-xs text-center">Watchlist</p>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
