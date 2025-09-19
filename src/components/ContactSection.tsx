import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <iframe
              title="Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.0478515625%2C48.5224609375%2C9.0576171875%2C48.5322265625&layer=mapnik&marker=48.52734375%2C9.052734375"
              className="rounded-2xl"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent pointer-events-none"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 shadow-professional"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Tübingen, Germany</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <div className="space-y-2">
                  <div>
                    <a 
                      href="mailto:dankhaibullin@gmail.com" 
                      className="text-primary-600 hover:text-primary-700 block transition-colors"
                    >
                      dankhaibullin@gmail.com
                    </a>
                  </div>
                  <div>
                    <a 
                      href="mailto:daniyal.khaibullin@student.uni-tuebingen.de" 
                      className="text-primary-600 hover:text-primary-700 block transition-colors"
                    >
                      daniyal.khaibullin@student.uni-tuebingen.de
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+34613424901" className="text-primary-600 hover:text-primary-700">
                  +34 613 424 901
                </a>
              </div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary text-white px-8 py-3 rounded-lg font-medium"
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}