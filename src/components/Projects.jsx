import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my skills, projects, and contact information.',
      link: 'https://jamaluddin-portfolio07.netlify.app',
    },
    {
      title: 'Simple Gallery',
      description: 'An online store with features like product search, cart management, and payment gateway integration.',
      link: 'https://simplegallery01.netlify.app/',
    },
    {
      title: 'Spotify clone',
      description: 'An online store with features like product search, cart management, and payment gateway integration.',
      link: 'https://spotify-clone-ochre-tau.vercel.app/',
    },
    {
      title: 'Amazon clone',
      description: 'A full-stack application for creating, reading, updating, and deleting blog posts.',
      link: 'https://amazon2-o-jk.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-r  to-purple-500 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
