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
              I am a software engineer and computational linguist currently completing my degree at Eberhard Karls Universität Tübingen. I bridge the gap between theoretical linguistics and high-performance software architecture, specializing in NLP and Generative AI applications.
            </p>
            
            <p className="text-gray-600 leading-relaxed mt-4">
              My recent work involves deploying production-grade systems, from processing complex biomechanical motion-capture data at the Max Planck Institute to architecting serverless financial reconciliation pipelines for commercial sports clubs. I am highly proficient across the modern stack, utilizing React, TypeScript, Node.js, and Python FastAPI, backed by robust Docker and cloud deployments.
            </p>
            
            <p className="text-gray-600 leading-relaxed mt-4">
              I am deeply interested in exploring ontology-based SaaS solutions and leveraging AI agents to automate complex workflows. By integrating tools like Claude Code into my development lifecycle, I focus on shipping efficient, secure, and scalable digital infrastructure.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Focus</h3>
              <p className="text-gray-600 font-medium">Data Pipelines & Full-Stack</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deployments</h3>
              <p className="text-gray-600 font-medium">Docker, Render, Max Planck Cluster</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Specialty</h3>
              <p className="text-gray-600 font-medium">AI & System Architecture</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600 font-medium">Computational Linguistics</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}