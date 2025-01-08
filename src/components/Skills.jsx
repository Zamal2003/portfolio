import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      bgColor: 'bg-red-500',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.75 3h18.5c.966 0 1.75.784 1.75 1.75v30.5a1.75 1.75 0 0 1-1.75 1.75H10.75a1.75 1.75 0 0 1-1.75-1.75V4.75C9 3.784 9.784 3 10.75 3z"
            fill="#E44D26"
          />
          <path
            d="M18.04 22.566l-.413 2.542h-4.29l.456-2.542H8.63l1.993-12.07h10.9l1.986 12.07h-4.3z"
            fill="#F16529"
          />
        </svg>
      ),
    },
    {
      name: 'CSS',
      bgColor: 'bg-blue-500',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.75 3h18.5c.966 0 1.75.784 1.75 1.75v30.5a1.75 1.75 0 0 1-1.75 1.75H10.75a1.75 1.75 0 0 1-1.75-1.75V4.75C9 3.784 9.784 3 10.75 3z"
            fill="#1572B6"
          />
          <path
            d="M18.04 22.566l-.413 2.542h-4.29l.456-2.542H8.63l1.993-12.07h10.9l1.986 12.07h-4.3z"
            fill="#33A9DC"
          />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      bgColor: 'bg-yellow-500',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.75 3h18.5c.966 0 1.75.784 1.75 1.75v30.5a1.75 1.75 0 0 1-1.75 1.75H10.75a1.75 1.75 0 0 1-1.75-1.75V4.75C9 3.784 9.784 3 10.75 3z"
            fill="#F7DF1E"
          />
          <path
            d="M18.04 22.566l-.413 2.542h-4.29l.456-2.542H8.63l1.993-12.07h10.9l1.986 12.07h-4.3z"
            fill="#323330"
          />
        </svg>
      ),
    },
    {
      name: 'React',
      bgColor: 'bg-blue-600',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="3" fill="#61DAFB" />
          <path
            fill="#61DAFB"
            d="M20 23.5c-5.888 0-10.5-4.612-10.5-10.5S14.112 2.5 20 2.5s10.5 4.612 10.5 10.5-4.612 10.5-10.5 10.5zm0-17C15.03 6.5 10.5 11.03 10.5 16.5s4.53 10 9.5 10 9.5-4.53 9.5-10-4.53-10-9.5-10z"
          />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      bgColor: 'bg-green-500',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.75 3h18.5c.966 0 1.75.784 1.75 1.75v30.5a1.75 1.75 0 0 1-1.75 1.75H10.75a1.75 1.75 0 0 1-1.75-1.75V4.75C9 3.784 9.784 3 10.75 3z"
            fill="#8CC84B"
          />
          <path
            d="M16.896 25.086c0-.027.017-.05.017-.076 0-.03-.017-.058-.017-.087V10.04h4.187v15.003c0 .03-.017.057-.017.087s.017.049.017.076z"
            fill="#6CC24A"
          />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      bgColor: 'bg-green-700',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.75 3h18.5c.966 0 1.75.784 1.75 1.75v30.5a1.75 1.75 0 0 1-1.75 1.75H10.75a1.75 1.75 0 0 1-1.75-1.75V4.75C9 3.784 9.784 3 10.75 3z"
            fill="#4DB33D"
          />
          <path
            d="M18.182 16.566l-.228 2.493h-4.137l.294-2.493h-5.332l.263-2.493h9.609l.348 2.493h-5.127z"
            fill="#2D6A3F"
          />
        </svg>
      ),
    },
    {
      name: 'Postman',
      bgColor: 'bg-orange-500',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.75 3h18.5c.966 0 1.75.784 1.75 1.75v30.5a1.75 1.75 0 0 1-1.75 1.75H10.75a1.75 1.75 0 0 1-1.75-1.75V4.75C9 3.784 9.784 3 10.75 3z"
            fill="#FF6C37"
          />
          <path
            d="M25 21.5c-.687 0-1.312-.25-1.781-.688-.469-.437-.75-.984-.75-1.562s.281-1.125.75-1.562c.469-.438 1.094-.688 1.781-.688s1.312.25 1.781.688c.469.437.75.984.75 1.562s-.281 1.125-.75 1.562c-.469.438-1.094.688-1.781.688z"
            fill="#DA5024"
          />
        </svg>
      ),
    },
    {
      name: 'Git',
      bgColor: 'bg-orange-500',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.75 3h18.5c.966 0 1.75.784 1.75 1.75v30.5a1.75 1.75 0 0 1-1.75 1.75H10.75a1.75 1.75 0 0 1-1.75-1.75V4.75C9 3.784 9.784 3 10.75 3z"
            fill="#FF6C37"
          />
          <path
            d="M25 21.5c-.687 0-1.312-.25-1.781-.688-.469-.437-.75-.984-.75-1.562s.281-1.125.75-1.562c.469-.438 1.094-.688 1.781-.688s1.312.25 1.781.688c.469.437.75.984.75 1.562s-.281 1.125-.75 1.562c-.469.438-1.094.688-1.781.688z"
            fill="#DA5024"
          />
        </svg>
      ),
    },
    {
      name: 'Github',
      bgColor: 'bg-orange-500',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.75 3h18.5c.966 0 1.75.784 1.75 1.75v30.5a1.75 1.75 0 0 1-1.75 1.75H10.75a1.75 1.75 0 0 1-1.75-1.75V4.75C9 3.784 9.784 3 10.75 3z"
            fill="#FF6C37"
          />
          <path
            d="M25 21.5c-.687 0-1.312-.25-1.781-.688-.469-.437-.75-.984-.75-1.562s.281-1.125.75-1.562c.469-.438 1.094-.688 1.781-.688s1.312.25 1.781.688c.469.437.75.984.75 1.562s-.281 1.125-.75 1.562c-.469.438-1.094.688-1.781.688z"
            fill="#DA5024"
          />
        </svg>
      ),
    },
  ];

  return (
    <div id="skills" className="my-16">
      <h2 className="text-center text-2xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 rounded-full ${skill.bgColor} text-white flex items-center justify-center flex-col`}
          >
            {skill.icon}
            <span className="mt-4">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
