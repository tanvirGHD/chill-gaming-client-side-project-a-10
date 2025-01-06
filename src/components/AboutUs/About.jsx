import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 ">
      <h2 className="text-4xl font-bold text-pink-600 mb-5">About Chill Gaming</h2>
      <p className="text-lg dark:text-gray-700 text-white mb-4">
        Welcome to <strong>Chill Gaming</strong>, your ultimate destination for all things gaming! Whether you're a casual player or a hardcore gamer, our platform is designed to offer you the best gaming experience. With a vast collection of top-rated games, exclusive content, and a seamless browsing experience, we aim to bring the gaming world right to your fingertips.
      </p>
      <p className="text-lg dark:text-gray-700 text-white mb-4">
        At Gaming Heaven, we believe that gaming is more than just a pastime—it's a passion. That's why we strive to provide a diverse range of games across different categories, including action, adventure, RPGs, and much more. Our easy-to-use interface allows you to explore new games, check out reviews, and discover hidden gems with just a few clicks.
      </p>
      <h3 className="text-2xl font-semibold text-pink-500 mb-3">What We Offer:</h3>
      <ul className="list-disc pl-6 text-lg dark:text-gray-700 text-white mb-6">
        <li>A wide selection of games across various genres.</li>
        <li>Exclusive game discounts and deals.</li>
        <li>A user-friendly platform to browse and discover new games.</li>
        <li>Secure and reliable payment options for a smooth purchasing experience.</li>
      </ul>
      <p className="text-lg dark:text-gray-700 text-white">
        Join us and become a part of our growing community of gamers. Experience the best of gaming with <strong>Gaming Heaven</strong> today!
      </p>
    </div>
  );
};

export default About;
