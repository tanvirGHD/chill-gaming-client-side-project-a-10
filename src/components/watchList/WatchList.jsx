

import React, { useState, useEffect } from "react";

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

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (watchlist.length === 0) {
    return <div>No items in your WatchList yet.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto h-screen">
      <h2 className="text-2xl font-bold mb-4">My WatchList</h2>
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
          {watchlist.map((game, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={game.gameCover}
                  alt={game.gameTitle}
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{game.gameTitle}</td>
              <td className="border border-gray-300 px-4 py-2">{game.publishingYear}</td>
              <td className="border border-gray-300 px-4 py-2">{game.rating}</td>
              <td className="border border-gray-300 px-4 py-2">{game.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
