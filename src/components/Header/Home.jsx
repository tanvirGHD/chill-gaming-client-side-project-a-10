import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  const [color, setColor] = useState("text-pink-600");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) =>
        prevColor === "text-pink-600" ? "text-blue-500" : "text-pink-600"
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="carousel w-full">
      <h2>Hi</h2>
        <div id="slide1" className="carousel-item relative w-full">
          
          <img
            src="https://i.ibb.co.com/6w8zHgw/1.jpg"
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
            src="https://i.ibb.co.com/Gs4MHDY/2.jpg"
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
            src="https://i.ibb.co.com/0XVd7X5/3.jpg"
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
            src="https://i.ibb.co.com/64vTy5G/side-view-gamer-sitting-chair.jpg"
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
    </div>
  );
};

export default Home;





