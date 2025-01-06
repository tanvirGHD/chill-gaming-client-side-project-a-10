
import React from "react";

const upcomingGames = [
  { title: "Candy Crush", releaseDate: "January 2025", imageUrl: "https://i.ibb.co.com/64vTy5G/side-view-gamer-sitting-chair.jpg" },
  { title: "Subway Surfers", releaseDate: "February 2025", imageUrl: "https://i.ibb.co.com/6J4hcT2/11.jpg" },
  { title: "Carrom", releaseDate: "March 2025", imageUrl: "https://i.ibb.co.com/5jrjPWw/12.jpg" },
];

const UpcomingGames = () => {
  return (
    <div className="w-10/12 mx-auto h-screen text-black">
      <h1 className="text-3xl font-bold m-5 text-pink-500">Upcoming Games</h1>
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
