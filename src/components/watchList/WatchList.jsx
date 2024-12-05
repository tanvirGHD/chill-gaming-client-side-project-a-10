import React from "react";
import { useLocation } from "react-router-dom";

const WatchList = () => {
  const location = useLocation();
  const reviews = location.state; // Receiving reviews data

  if (!reviews) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl text-red-500">No items in your Watchlist yet.</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Watchlist</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Game Cover</th>
            <th className="border border-gray-300 px-4 py-2">Game Title</th>
            <th className="border border-gray-300 px-4 py-2">Publishing Year</th>
            <th className="border border-gray-300 px-4 py-2">Rating</th>
            <th className="border border-gray-300 px-4 py-2">Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              <img
                src={reviews.gameCover}
                alt={reviews.gameTitle}
                className="h-16 w-16 object-cover"
              />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {reviews.gameTitle}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {reviews.publishingYear}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {reviews.rating}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {reviews.genre}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
