import Link from 'next/link';
import React from 'react';

const notPage = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">

      {/* Big 404 */}
      <h1 className="text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-2 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform">
          Go Back Home
        </button>
      </Link>

      {/* Extra style element */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
    </div>
	);
};

export default notPage;