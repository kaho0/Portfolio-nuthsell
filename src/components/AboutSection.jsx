import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaReddit } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const AboutSection = () => {
  return (
    <section className="bg-white rounded-2xl h-auto mt-2 md:mt-5 px-6 sm:px-10 md:px-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 sm:py-8 md:py-12 lg:py-16 xl:gap-16">
        <img
          src="images/vecteezy_code-hacker-vector-icon-design_21261938.jpg"
          width={320}
          height={300}
          alt="Mynuddin Chisty"
          className="rounded-lg mx-auto sm:w-64 sm:h-auto md:w-80 lg:w-96"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EDA751] mb-4 text-center md:text-left">About Me</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            Hello! I'm Mynuddin Chisty, a student with a focus on web technologies and aspiring to be a software developer.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
            <li>Full stack developer with 1+ year of experience.</li>
            <li>Student of Computer Science Engineering, first year.</li>
            <li>Learning Machine Learning and exploring Open Source.</li>
            <li>Open Source enthusiast and contributor.</li>
          </ul>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/mynuddin-chisty17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin size={25} sm:size={30} />
            </a>
            <a
              href="https://github.com/chistym17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900"
            >
              <FaGithub size={25} sm:size={30} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaTwitter size={25} sm:size={30} />
            </a>
            <a
              href="https://www.reddit.com/user/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800"
            >
              <FaReddit size={25} sm:size={30} />
            </a>
            <a
              href="https://leetcode.com/u/chistym17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-600"
            >
              <SiLeetcode size={25} sm:size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
