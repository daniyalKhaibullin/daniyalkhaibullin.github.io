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
      I am an upcoming and dedicated programmer specializing in Generative AI and NLP, currently studying at Eberhard Karls Universität Tübingen. I am studying to specialize in NLP as well as generative AI, building a strong foundation in both theoretical linguistics and practical AI applications.
    </p>
    
    <p className="text-gray-600 leading-relaxed mt-4">
      While I'm still building my professional experience, I'm eager to learn and grow in the industry. I approach every opportunity with enthusiasm and a strong desire to contribute meaningfully to projects while expanding my skills in AI, machine learning, and software development. I also have a passion for frontend and backend development, enjoying working with React, Django, Express, and Node.js.
    </p>
    
    <p className="text-gray-600 leading-relaxed mt-4">
      I'm actively seeking opportunities to apply my academic knowledge in real-world scenarios and am committed to continuous learning. My goal is to catch up with the ever-growing field of tech, especially with generative AI, to be able to theoretically understand it, as well as apply it in the industry, or any other field/market to generate revenue and leverage the power of AI. (To be fair, sometimes I dabble in vibe coding, but I try not to abuse it.)
    </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600 font-medium">Entry Level</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Projects</h3>
              <p className="text-gray-600 font-medium">3 completed</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Focus</h3>
              <p className="text-gray-600 font-medium">AI & NLP</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learning</h3>
              <p className="text-gray-600 font-medium">Always</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}