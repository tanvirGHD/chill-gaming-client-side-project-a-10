// import React, { useState, useEffect } from 'react';

// const LoadingSpinner = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false); // Hide spinner after 3 seconds
//     }, 3000);

//     return () => clearTimeout(timer); // Cleanup timer
//   }, []);

//   if (!isVisible) return null; // Hide spinner if not visible

//   return (
//     <div className="flex justify-center items-center">
//       <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-500 border-gray-200" role="status">
//         <span className="text-6xl font-bold">Loading.....</span>
//       </div>
//     </div>
//   );
// };

// export default LoadingSpinner;
