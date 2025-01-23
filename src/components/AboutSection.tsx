import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose lg:prose-lg"
          >
            <p className="text-gray-600 leading-relaxed">
      I am an upcoming and dedicated NLP programmer specializing in computational linguistics. My academic journey, particularly DSA III, Statistical NLP, and Data Science for Linguists courses, have all equipped me with robust skills in data processing and corpus analysis in linguistics. This foundation allows me to develop and learn about building sophisticated language models and analytical tools that bridge the gap between linguistics and technology.
    </p>
    
    <p className="text-gray-600 leading-relaxed mt-4">
      Beyond my specialization in NLP, I have a passion for full-stack development, enjoying projects built with React and Django as a hobbyist. This blend of linguistic expertise and web development enables me to create comprehensive solutions that are both technically sound and linguistically informed.
    </p>
    
    <p className="text-gray-600 leading-relaxed mt-4">
      When I'm not immersed in coding or data analysis, you can find me exploring the latest technologies, contributing to open-source projects, or mentoring aspiring developers. I thrive on continuous learning and enjoy sharing my knowledge through technical writing and collaborative projects.
    </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600">1+ year</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Projects</h3>
              <p className="text-gray-600">2 completed</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clients</h3>
              <p className="text-gray-600">2 satisfied</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learning</h3>
              <p className="text-gray-600">Always</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}