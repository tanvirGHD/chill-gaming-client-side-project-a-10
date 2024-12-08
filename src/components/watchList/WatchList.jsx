

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      setWatchlist(savedWatchlist);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (index) => {
    // Show SweetAlert2 confirmation before deleting
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33", 
      cancelButtonColor: "#3085d6", l
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, remove the game from watchlist
        const updatedWatchlist = watchlist.filter((_, i) => i !== index);
        setWatchlist(updatedWatchlist);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        Swal.fire("Deleted!", "Your game has been deleted.", "success");
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (watchlist.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        No items in your WatchList yet.
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto h-screen overflow-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">My WatchList</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Game Cover</th>
              <th className="border border-gray-300 px-4 py-2">Game Title</th>
              <th className="border border-gray-300 px-4 py-2">Publishing Year</th>
              <th className="border border-gray-300 px-4 py-2">Rating</th>
              <th className="border border-gray-300 px-4 py-2">Genre</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((game, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <img
                    src={game.gameCover}
                    alt={game.gameTitle}
                    className="h-16 w-16 object-cover mx-auto"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">{game.gameTitle}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{game.publishingYear}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{game.rating}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{game.genre}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {/* Pink delete button */}
                  <button
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
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

export default WatchList;
