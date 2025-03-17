import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Handcrafted Haven</h1>
        <p className="text-xl mb-8">A digital marketplace for unique, handmade treasures crafted by talented artisans.</p>
        <a
          href="#explore"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 py-3 px-6 rounded-full font-semibold"
        >
          Explore Now
        </a>
      </section>

      {/* About Section */}
      <section id="explore" className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">What is Handcrafted Haven?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Handcrafted Haven is an innovative web application designed to connect artisans and crafters with customers who value the beauty and uniqueness of handmade items. Our platform offers a virtual marketplace where creators can showcase and sell their works, fostering a community of passionate makers and conscious consumers.
        </p>
        <a
          href="#features"
          className="text-blue-500 font-semibold hover:underline"
        >
          Learn more about the platform
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Showcase Your Art</h3>
            <p>Artisans can create detailed profiles and display their handmade items for a global audience.</p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Secure E-commerce</h3>
            <p>Our platform provides secure and easy-to-use payment solutions to support your sales.</p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Foster a Community</h3>
            <p>Join a community of like-minded individuals passionate about handmade creations and sustainability.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center bg-blue-500 text-white">
        <h2 className="text-3xl font-bold mb-6">Join the Handmade Movement</h2>
        <p className="text-lg mb-8">Whether you're a creator or a shopper, Handcrafted Haven connects you to a world of unique, handmade treasures.</p>
        <a
          href="/signup"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 py-3 px-6 rounded-full font-semibold"
        >
          Get Started Today
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2025 Handcrafted Haven. All rights reserved.</p>
      </footer>
    </div>
  );


};





export default Home;

