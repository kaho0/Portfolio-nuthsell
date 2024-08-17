import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
const HeroSection = () => {
  return (
    <div className="bg-white rounded-2xl h-[600px] flex items-center justify-between p-10 mt-5">
      {/* Left Side: Text Content */}
      <div className="w-1/2 space-y-6">
        <motion.h1
          className="text-4xl font-semibold text-black"
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
          I am <span className="font-bold text-[#EDA751]">Mynuddin Chisty</span>, a passionate Full Stack Developer specializing in modern web technologies.
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="flex space-x-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1-rlGkbIp7QdzI22Qe9MwzvD40FiddYfR/view?usp=sharing"
              download
              className="bg-[#EDA751]  text-white px-6 py-3 rounded-lg shadow-lg font-semibold flex items-center"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
            <a
              href="mailto:your-email@example.com"
              className="bg-transparent border border-[#EDA751]  text-[#EDA751] px-6 py-3 rounded-lg shadow-lg font-semibold flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Send Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Picture */}
      <motion.div
        className="w-1/2 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <img src='images/vecteezy_working-on-web-and-development-illustration_.jpg'></img>
      </motion.div>
    </div>
  );
}

export default HeroSection;
