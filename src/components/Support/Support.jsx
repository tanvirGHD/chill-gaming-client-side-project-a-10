import React from 'react';
import { Link} from 'react-router-dom';

const Support = () => {

  return (
    <section className=" text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Need Help? We're Here for You!</h2>
        <p className="text-center text-gray-300 mb-8">
          If you’re experiencing any issues or have questions about our games, feel free to reach out to us.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Contact via Email */}
          <div className="bg-[#222747] p-6 rounded-lg shadow-lg flex flex-col items-center">
            <span className="text-4xl text-blue-400 mb-4">📧</span>
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-gray-300 mb-4 text-center">
              Send us an email at <span className="text-blue-400">support@gamingworld.com</span> and we'll get back to you!
            </p>
            <a
              href="mailto:support@gamingworld.com"
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md"
            >
              Email Us
            </a>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#222747] p-6 rounded-lg shadow-lg flex flex-col items-center">
            <span className="text-4xl text-yellow-400 mb-4">❓</span>
            <h3 className="text-xl font-semibold mb-2">FAQs</h3>
            <p className="text-gray-300 mb-4 text-center">
              Find answers to commonly asked questions in our FAQ section.
            </p>
            <Link to="/faq">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md"
            >
              View FAQs
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
