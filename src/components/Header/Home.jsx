import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Home = () => {
  const [color, setColor] = useState("text-pink-600");
  const [loading, setLoading] = useState(true);

  // Ensure reviews default to an empty array if data is not available
  const reviews = useLoaderData() || [];
  const maxReviewsToShow = 6;

  // State for active slide index
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
    }, 3000); // Slide change interval (3 seconds)

    // Delay loading spinner for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setLoading(false);
    }
  }, [reviews]);

  console.log(reviews);

  return (
    <div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            activeSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="/img/1.jpg"
            className="w-full md:h-[400px] object-cover"
            alt="Slide 1"
          />
          <div className="absolute top-0 bg-gray-300  left-0 w-full h-full bg-opacity-20 flex flex-col justify-center items-center text-center">
            <h2 className="mb:text-3xl text-2xl font-bold">
              Experience the Ultimate Gaming Adventure
            </h2>
            <p className="mt-4 md:text-lg text-sm">
              Dive into immersive worlds and engage in epic battles.
            </p>
            <p className="mt-2 md:text-sm text-xs">
              Join millions of gamers worldwide and conquer the game.
            </p>
          </div>
        </div>

        <div
          id="slide2"
          className={`carousel-item relative w-full ${
            activeSlide === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="/img/10.jpg"
            className="w-full md:h-[400px] object-cover"
            alt="Slide 2"
          />
          <div className="absolute top-0 bg-gray-300  left-0 w-full h-full bg-opacity-20 flex flex-col justify-center items-center text-center">
            <h2 className="mb:text-3xl text-2xl font-bold">
              Unleash Your Power in Virtual Worlds
            </h2>
            <p className="mt-4 md:text-lg text-sm">
              Unravel mysteries, explore hidden realms, and build your legacy.
            </p>
            <p className="mt-2 md:text-sm text-xs">
              Your adventure starts now. Are you ready for the challenge?
            </p>
          </div>
        </div>

        <div
          id="slide3"
          className={`carousel-item relative w-full ${
            activeSlide === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="/img/4.jpg"
            className="w-full md:h-[400px] object-cover"
            alt="Slide 3"
          />
          <div className="absolute top-0 bg-gray-300 text-white left-0 w-full h-full bg-opacity-20 flex flex-col justify-center items-center text-center">
            <h2 className="mb:text-3xl text-2xl font-bold">
              Level Up Your Gaming Experience
            </h2>
            <p className="mt-4 md:text-lg text-sm">
              Customize your hero and defeat legendary foes.
            </p>
            <p className="mt-2 md:text-sm text-xs">
              Be the champion in your gaming universe.
            </p>
          </div>
        </div>

        <div
          id="slide4"
          className={`carousel-item relative w-full ${
            activeSlide === 4 ? "block" : "hidden"
          }`}
        >
          <img
            src="/img/5.jpg"
            className="w-full md:h-[400px] object-cover"
            alt="Slide 4"
          />
          <div className="absolute top-0 bg-gray-300 text-white left-0 w-full h-full bg-opacity-30 flex flex-col justify-center items-center text-center">
            <h2 className="mb:text-3xl text-2xl font-bold">
              Embark on Epic Quests and Challenges
            </h2>
            <p className="mt-4 md:text-lg text-sm">
              Explore vast landscapes and defeat fearsome monsters.
            </p>
            <p className="mt-2 md:text-sm text-xs">
              Discover new worlds and forge alliances with other players.
            </p>
          </div>
        </div>
      </div>

      <h1
        className={`text-3xl md:text-5xl font-bold ${color} mt-10 text-center`}
      >
        <Typewriter
          words={[
            "Welcome to the Game!",
            "Choose your hero!",
            "Let the battle begin!",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={500}
        />
      </h1>

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      <div className="my-5 w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-pink-600 mb-5">Latest Game</h1>
        {!loading && Array.isArray(reviews) && reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviews.slice(0, maxReviewsToShow).map((review) => (
              <Fade key={review._id} direction="up" cascade>
                <div className="rounded-lg shadow-md p-4 mb-6 bg-white">
                  <img
                    src={review.gameCover}
                    alt={review.gameTitle}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-black">
                    {review.gameTitle}
                  </h3>
                  <p className="text-gray-600">
                    Published: {review.publishingYear}
                  </p>
                  <p className="text-gray-800 mt-2">
                    <strong>Review:</strong> {review.reviewDescription}
                  </p>
                  <p className="text-gray-800 mt-1">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={review.rating}
                      readOnly
                    />
                  </p>
                  <p className="text-gray-800 mt-1">
                    <strong>Genre:</strong> {review.genre}
                  </p>
                  <button className=" bg-pink-600 px-3 py-1 text-white mt-2 rounded-xl hover:underline">
                    <Link to={`/details/${review._id}`}>Explore Details</Link>
                  </button>
                </div>
              </Fade>
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-center text-gray-500">No reviews available.</p>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
