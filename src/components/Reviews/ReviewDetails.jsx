

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const ReviewDetails = () => {
  const reviews = useLoaderData();


  const handleAddToWatchlist = () => {
    let savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    savedWatchlist.push(reviews);
    localStorage.setItem("watchlist", JSON.stringify(savedWatchlist));
  };

  return (
    <div className="bg-pink-100 md:py-20">
      <div className="p-6 max-w-lg mx-auto ">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={reviews.gameCover}
            alt={reviews.gameTitle}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">{reviews.gameTitle}</h3>
          <p className="text-gray-600 mb-2">
            <strong>Published:</strong> {reviews.publishingYear}
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Review:</strong> {reviews.reviewDescription}
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Rating:</strong> {reviews.rating} / 5
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Genre:</strong> {reviews.genre}
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Text:</strong> {reviews.text}
          </p>
          <div className="text-center">
            <Link
              to="/watchList"
              onClick={handleAddToWatchlist}
              className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <FaBookmark className="h-5 w-5 mr-2" />
              Add to WatchList
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
