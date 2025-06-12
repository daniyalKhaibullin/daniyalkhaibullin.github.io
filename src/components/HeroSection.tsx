import { motion } from 'framer-motion';
import profilePicture from '../assets/images/profile.png';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-primary-50">
      {/* Animated background elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary-400/20 to-indigo-400/20 blur-[100px] -z-10"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-l from-primary-300/20 to-purple-400/20 blur-[80px] -z-10"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Computational Linguist &  <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Aspiring Full-stack Developer</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg text-gray-600 mb-6"
              >
                Specializing in natural language processing, I'm passionate about building innovative digital experiences from concept to deployment.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl"
            >
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
