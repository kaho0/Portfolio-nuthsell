import { motion } from 'framer-motion';
import FloatingImage from '../Animation/Floater';

const HeroSection = () => {
  return (
    <div className="bg-white rounded-xl h-[600px] flex items-center justify-between p-10 mt-5">
      {/* Left Side: Text Content */}
      <div className="w-1/2 space-y-6">
        <motion.h1 
          className="text-5xl font-extrabold text-black"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hi,Im chisty
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl max-w-md text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          I am <span className="font-bold text-blue-600">Mynuddin Chisty</span>, a passionate Full Stack Developer specializing in modern web technologies.
        </motion.p>

        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Side: Picture */}
      <motion.div
        className="w-1/2 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
             <FloatingImage imageSrc="../../public/images/vecteezy_app-development-concept-with-laptop_11634356.jpg" altText="Floating Image" />

      </motion.div>
    </div>
  );
}

export default HeroSection;
