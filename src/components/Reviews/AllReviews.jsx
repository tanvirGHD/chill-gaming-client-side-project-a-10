
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const reviews = useLoaderData();

  
  const [selectedGenre, setSelectedGenre] = useState(""); 
  const [sortOption, setSortOption] = useState(""); 

  // Handle genre selection
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  // Handle sort option selection
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Filter reviews based on selected genre
  const filteredReviews = selectedGenre
    ? reviews.filter((review) => review.genre === selectedGenre)
    : reviews;

  // Sort reviews based on selected sort option
  const sortedReviews = filteredReviews.sort((a, b) => {
    if (sortOption === "ratingAsc") {
      return a.rating - b.rating; // Sort by rating ascending
    } else if (sortOption === "ratingDesc") {
      return b.rating - a.rating; // Sort by rating descending
    } else if (sortOption === "yearAsc") {
      return a.publishingYear - b.publishingYear; // Sort by year ascending
    } else if (sortOption === "yearDesc") {
      return b.publishingYear - a.publishingYear; // Sort by year descending
    }
    return 0; 
  });

  if (!sortedReviews || sortedReviews.length === 0) {
    return <p className="text-center text-gray-500">No reviews available.</p>;
  }

  // Get unique genres for the dropdown
  const genres = [
    ...new Set(reviews.map((review) => review.genre)), 
  ];

  return (
    <div className="p-4 bg-pink-100 ">
      <h2 className="text-3xl font-bold mb-4">All Reviews</h2>

      {/* Dropdown for genre filter */}
      <div className="mb-4 flex gap-4">
        <div>
          <label htmlFor="genre" className="mr-2 text-lg font-medium">
            Filter by Genre:
          </label>
          <select
            id="genre"
            value={selectedGenre}
            onChange={handleGenreChange}
            className="p-2 border rounded-md"
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for sort by options */}
        <div>
          <label htmlFor="sort" className="mr-2 text-lg font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 border rounded-md"
          >
            <option value="">Select Sorting</option>
            <option value="ratingAsc">Rating (Ascending)</option>
            <option value="ratingDesc">Rating (Descending)</option>
            <option value="yearAsc">Year (Ascending)</option>
            <option value="yearDesc">Year (Descending)</option>
          </select>
        </div>
      </div>

      {/* Display sorted and filtered reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedReviews.map((review) => (
          <Fade key={review._id} direction="up" cascade>
          <div key={review._id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={review.gameCover}
              alt={review.gameTitle}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{review.gameTitle}</h3>
            <p className="text-gray-600">Published: {review.publishingYear}</p>
            <p className="text-gray-800 mt-2">
              <strong>Review:</strong> {review.reviewDescription}
            </p>
            <p className="text-gray-800 mt-1">
              <strong>Rating:</strong> {review.rating} / 5
            </p>
            <p className="text-gray-800 mt-1">
              <strong>Genre:</strong> {review.genre}
            </p>
            <p className="text-gray-800 mt-1">
              <strong>Text:</strong> {review.text}
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
    </div>
  );
};

export default AllReviews;












