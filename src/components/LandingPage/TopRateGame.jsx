import React, { useState, useEffect } from 'react';

const TopRateGame = () => {
  const [games, setGames] = useState({
    topRatedGames: [],
    categories: {}
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch('/gaming.json')
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.log('Error loading JSON:', error));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredGames =
    selectedCategory === "All"
      ? games.topRatedGames
      : games.categories[selectedCategory] || [];

  return (
    <div className="container mx-auto px-4 mb-10">
      <h2 className="text-3xl font-bold text-pink-600 mb-5">Top Rated Games</h2>

      {/* Dropdown for category selection */}
      <div className="mb-6">
        <select
          className="bg-pink-500 text-white p-2 rounded-md"
          onChange={(e) => handleCategorySelect(e.target.value)}
          value={selectedCategory}
        >
          <option value="All">All Games</option>
          {Object.keys(games.categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Displaying the filtered games */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">{game.name}</h3>
              <p className="text-gray-500">{game.category}</p>
              <p className="text-lg font-bold text-black">{game.price}</p>
              <p className="text-sm text-black">{game.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">
                  {'⭐'.repeat(Math.round(game.rating))}
                </span>
                <span className="ml-2 text-gray-500">({game.rating})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRateGame;
