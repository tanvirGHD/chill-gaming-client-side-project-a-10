
import React from "react";

const upcomingGames = [
  { title: "Game 1", releaseDate: "January 2025", imageUrl: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg" },
  { title: "Game 2", releaseDate: "February 2025", imageUrl: "https://images.pexels.com/photos/1234568/pexels-photo-1234568.jpeg" },
  { title: "Game 3", releaseDate: "March 2025", imageUrl: "https://images.pexels.com/photos/1234569/pexels-photo-1234569.jpeg" },
];

const UpcomingGames = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upcoming Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingGames.map((game, index) => (
          <div key={index} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={game.imageUrl} alt={game.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{game.title}</h2>
              <p>Release Date: {game.releaseDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingGames;
