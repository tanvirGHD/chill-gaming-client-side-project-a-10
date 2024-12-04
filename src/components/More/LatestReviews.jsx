
import React from "react";

const latestReviews = [
  { title: "Amazing Action RPG", rating: "4.5/5", imageUrl: "https://images.pexels.com/photos/1234570/pexels-photo-1234570.jpeg" },
  { title: "Sports Simulation", rating: "3.8/5", imageUrl: "https://images.pexels.com/photos/1234571/pexels-photo-1234571.jpeg" },
  { title: "Puzzle Game", rating: "5/5", imageUrl: "https://images.pexels.com/photos/1234572/pexels-photo-1234572.jpeg" },
];

const LatestReviews = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Latest Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestReviews.map((review, index) => (
          <div key={index} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={review.imageUrl} alt={review.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{review.title}</h2>
              <p>Rating: {review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestReviews;