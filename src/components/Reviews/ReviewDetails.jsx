// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const ReviewDetails = () => {
//     const review = useLoaderData();
//     console.log(review)

//     return (
//         <div className="p-6 bg-white rounded-lg shadow-md">
//             <h2>Reviews {review.length}</h2>
//             <img
//                 src={review.gameCover}
//                 alt={review.gameTitle}
//                 className="w-full h-64 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-2xl font-bold mb-2">{review.gameTitle}</h2>
//             <p className="text-gray-600">Published: {review.publishingYear}</p>
//             <p className="text-gray-800 mt-2">
//                 <strong>Review:</strong> {review.reviewDescription}
//             </p>
//             <p className="text-gray-800 mt-1">
//                 <strong>Rating:</strong> {review.rating} / 5
//             </p>
//             <p className="text-gray-800 mt-1">
//                 <strong>Genre:</strong> {review.genre}
//             </p>
//             <p className="text-gray-800 mt-1">
//                 <strong>Text:</strong> {review.text}
//             </p>
//         </div>
//     );
// };

// export default ReviewDetails;
