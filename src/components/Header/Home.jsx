import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { FaMoon, FaSun } from "react-icons/fa"; // For light/dark toggle icons

const Home = () => {
  const [color, setColor] = useState("text-pink-600");
  const [theme, setTheme] = useState("light"); // "light" or "dark"
  const reviews = useLoaderData();
  console.log(reviews)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) =>
        prevColor === "text-pink-600" ? "text-blue-500" : "text-pink-600"
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`p-5 ${theme === "light" ? "bg-pink-100" : "bg-pink-200"}`}>
      <div className="flex justify-end mb-4">
        <button onClick={toggleTheme} className="text-2xl">
          {theme === "light" ? (
            <FaMoon className="text-yellow-500" />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </button>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/6w8zHgw/1.jpg"
            className="w-full md:h-[500px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Gs4MHDY/2.jpg"
            className="w-full md:h-[500px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/0XVd7X5/3.jpg"
            className="w-full md:h-[500px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/64vTy5G/side-view-gamer-sitting-chair.jpg"
            className="w-full md:h-[500px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <h1 className={`text-3xl md:text-6xl font-bold ${color} mt-10 text-center`}>
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

      <div className="mt-16">
        {reviews && reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Fade key={review._id} direction="up" cascade>
                <div
                  key={review._id}
                  className={`rounded-lg shadow-md p-4 mb-6 ${
                    theme === "light" ? "bg-white" : "bg-gray-200"
                  }`}
                >
                  <img
                    src={review.gameCover}
                    alt={review.gameTitle}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold">{review.gameTitle}</h3>
                  <p className="text-gray-600">
                    Published: {review.publishingYear}
                  </p>
                  <p className="text-gray-800 mt-2">
                    <strong>Review:</strong> {review.reviewDescription}
                  </p>
                  <p className="text-gray-800 mt-1">
                    <strong>Rating:</strong> {review.rating} / 5
                  </p>
                  <p className="text-gray-800 mt-1">
                    <strong>Genre:</strong> {review.genre}
                  </p>
                  <Link
                    to={`/details/${review._id}`}
                    className="mt-4 text-blue-500 hover:underline"
                  >
                    Explore Details
                  </Link>
                </div>
              </Fade>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
