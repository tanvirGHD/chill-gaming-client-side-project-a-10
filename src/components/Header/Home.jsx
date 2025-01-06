

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import "@smastrom/react-rating/style.css";  
import { Rating } from "@smastrom/react-rating";

const Home = () => {
  const [color, setColor] = useState("text-pink-600");
  const [loading, setLoading] = useState(true);
  const reviews = useLoaderData();
  const maxReviewsToShow = 6;

  // State for active slide index
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1)); // Change slide every 2-3 seconds
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
    <div className="p-5">
      <div className="carousel w-full">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            activeSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="/img/1.jpg"
            className="w-full md:h-[500px] object-cover"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
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
            className="w-full md:h-[500px] object-cover"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
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
            className="w-full md:h-[500px] object-cover"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
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
            className="w-full md:h-[500px] object-cover"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <h1
        className={`text-3xl md:text-6xl font-bold ${color} mt-10 text-center`}
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

      <div className="my-16">
        <h1 className="text-3xl font-bold text-pink-600 mb-5">Latest Game</h1>
        {!loading && reviews && reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviews.slice(0, maxReviewsToShow).map((review) => (
              <Fade key={review._id} direction="up" cascade>
                <div className="rounded-lg shadow-md p-4 mb-6 bg-white">
                  <img
                    src={review.gameCover}
                    alt={review.gameTitle}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-black">{review.gameTitle}</h3>
                  <p className="text-gray-600">
                    Published: {review.publishingYear}
                  </p>
                  <p className="text-gray-800 mt-2">
                    <strong>Review:</strong> {review.reviewDescription}
                  </p>
                  <p className="text-gray-800 mt-1">
                  <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
                  </p>
                  <p className="text-gray-800 mt-1">
                    <strong>Genre:</strong> {review.genre}
                  </p>
                  <button className=" bg-pink-600 px-3 py-1  text-white mt-2 rounded-xl hover:underline">
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
