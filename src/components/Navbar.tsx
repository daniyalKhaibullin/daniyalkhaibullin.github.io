import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsVisible(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      style={{ opacity }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/75 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Portfolio</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">About</button>
              <button onClick={() => scrollToSection('experiences')} className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Projects & Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}