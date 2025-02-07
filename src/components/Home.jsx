import React from 'react';
import ProfilePhoto from '../assets/profile-photo.jpg';

function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-6">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4x1 font-bold text-blue mb-4">Hi, I'm Md Jamaluddin</h1>
          <p className="italic mb-4">
            A passionate Full Stack Developer who crafts modern websites and applications. Skilled in React, Node.js, MongoDB, and Express. Let's build something amazing together!
          </p>
          <p className="italic mb-6">I thrive on turning ideas into real-world solutions.</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="./Md_Jamaluddin.pdf"
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="bg-green-600 py-2 px-4 rounded hover:bg-green-500 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Content (Profile Photo) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="w-48 h-48 rounded-full shadow-lg object-cover md:w-64 md:h-64"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
