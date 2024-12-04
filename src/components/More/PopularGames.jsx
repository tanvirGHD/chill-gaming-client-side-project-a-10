
import React from "react";

const popularGames = [
  { title: "The Legend of Zelda", rating: "5/5", imageUrl: "https://images.pexels.com/photos/1234573/pexels-photo-1234573.jpeg" },
  { title: "Call of Duty", rating: "4.7/5", imageUrl: "https://images.pexels.com/photos/1234574/pexels-photo-1234574.jpeg" },
  { title: "FIFA 2024", rating: "4.8/5", imageUrl: "https://images.pexels.com/photos/1234575/pexels-photo-1234575.jpeg" },
];

const PopularGames = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Popular Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularGames.map((game, index) => (
          <div key={index} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={game.imageUrl} alt={game.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{game.title}</h2>
              <p>Rating: {game.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
