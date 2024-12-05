
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
const navigate = useNavigate();
  const reviews = useLoaderData();
  console.log(reviews)
  const {_id, text, email, publishingYear,reviewDescription, gameTitle, gameCover,genre, rating } = reviews;


  const handleUpdateReview = event => {
    event.preventDefault();
    const form = event.target;

    const gameCover = form.gameCover.value;
    const gameTitle = form.gameTitle.value;
    const publishingYear = form.publishingYear.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const text = form.name.value;

    const updatedReview = {gameCover, gameTitle, publishingYear, reviewDescription, rating, genre, email, text}


    // send data to the server
    fetch(`http://localhost:5000/review/${_id}`,{
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(updatedReview)
    })
    .then(res => res.json())
    .then(data=> {
        console.log(data)
        if(data.modifiedCount){
          Swal.fire({
            title: 'Success',
            text: 'Review Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          .then(() => {
            navigate("/myReviews"); 
          });
        }
    })
  }

  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
      <form onSubmit={handleUpdateReview} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-pink-500 text-2xl font-bold mb-4 text-center">
          Update Review : {gameTitle}
        </h2>
        <div className="mb-4">
          <label className="block text-pink-500 font-medium mb-1">
            Game Cover Image (URL)
          </label>
          <input
            type="url"
            name="gameCover"
            defaultValue={gameCover}
            className="w-full border border-pink-300 rounded p-2"
            placeholder="Enter cover image URL"
            required
          />
        </div>

        {/* Game Title and Publishing Year (Side by Side) */}
        <div className="flex gap-4 mb-4">
          {/* Game Title */}
          <div className="flex-1">
            <label className="block text-pink-500 font-medium mb-1">
              Game Title
            </label>
            <input
              type="text"
              name="gameTitle"
              defaultValue={gameTitle}
              className="w-full border border-pink-300 rounded p-2"
              placeholder="Enter game title"
              required
            />
          </div>

          {/* Publishing Year */}
          <div className="flex-1">
            <label className="block text-pink-500 font-medium mb-1">
              Publishing Year
            </label>
            <select
              name="publishingYear"
              defaultValue={publishingYear}
              className="w-full border border-pink-300 rounded p-2"
              required
            >
              <option value="" disabled>
                Select a year
              </option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </select>
          </div>
        </div>

        {/* Review Description AND Rating (Side by Side) */}
        <div className="flex gap-4 mb-4">
          {/* Review Description */}
          <div className="flex-1">
            <label className="block text-pink-500 font-medium mb-1">
              Review Description
            </label>
            <textarea
              name="reviewDescription"
              defaultValue={reviewDescription}
              className="w-72 border border-pink-300 rounded p-2"
              placeholder="Write your detailed review"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Rating */}
          <div className="w-3/5 ml-2">
            <label className="block text-pink-500 font-medium mb-1">
              Rating (1-5)
            </label>
            <input
              type="number"
              name="rating"
              defaultValue={rating}
              className="w-full border border-pink-300 rounded p-2"
              placeholder="Enter rating (1-5)"
              min="1"
              max="5"
              required
            />
          </div>
        </div>

        {/* Genre and User Email (Side by Side) */}
        <div className="flex gap-4 mb-4">
          {/* Genre */}
          <div className="flex-1">
            <label className="block text-pink-500 font-medium mb-1">
              Genre
            </label>
            <select
              name="genre"
              defaultValue={genre}
              className="w-full border border-pink-300 rounded p-2"
              required
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>

          {/* User Email */}
          <div className="flex-1">
            <label className="block text-pink-500 font-medium mb-1">
              User Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              className="w-full border border-pink-300 rounded p-2 bg-gray-100"
              placeholder="User email"
              required
            />
          </div>
        </div>

        {/* User Name */}
        <div className="mb-4">
          <label className="block text-pink-500 font-medium mb-1">
            User Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={text}
            className="w-full border border-pink-300 rounded p-2 bg-gray-100"
            placeholder="User name"
            required
          />
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Update Now!"
          className="w-full bg-pink-500 text-white font-bold py-2 rounded hover:bg-pink-600"
        />
      </form>
    </div>
  );
};

export default UpdateReview;
