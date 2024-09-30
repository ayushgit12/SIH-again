import ParticlesBg from "particles-bg";
import React from "react";

const Home = () => {
  // Logout function (for demonstration purposes)
  const handleLogout = () => {
    // Perform logout operations here, like clearing user session
    console.log("User logged out");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      {/* Background Particles */}
      <ParticlesBg
        type="circle"
        bg={{ zIndex: 0, position: "absolute", top: 0 }}
      />

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Logout
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-8 max-w-3xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-6">
          Welcome to My Home Page
        </h1>

        <p className="text-2xl mb-8">
          This is a simple, elegant, and modern home page design that captures
          attention and delivers a clear message. Explore the content and enjoy
          the experience!
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Explore Now
          </a>
          <a
            onClick={() => {
              localStorage.removeItem("token");
            }}
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
