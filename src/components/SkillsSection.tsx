import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CodeBlock from './CodeBlock';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeSnippet: string;
  githubUrl?: string;
  imageUrl?: string;
  features: string[];
  contributions: string[];
}

const projects: Project[] = [
  {
    title: "LinguaKWIC",
    description: `LinguaKWIC is a versatile tool designed for searching and analyzing linguistic data efficiently. It supports both English and German languages, providing seamless integration with Wikipedia for enriched data retrieval and analysis.`,
    features: [
      "Browse Files: Easily browse and upload your files using the 'Browse File' button.",
      "Wikipedia Integration: Paste a Wikipedia link or search for a specific topic using our advanced search button. We'll take care of the rest!",
      "Advanced Search: Search for tokens, lemmas, posTags, or a combination of them. You can even perform case-sensitive searches!",
      "Data Export: Save your search results and analyses as XML files for future reference.",
      "Real-Time Updates: Experience seamless real-time data processing and display."
    ],
    technologies: ["Java", "Python", "JSoup", "Swing", "Maven", "XML"],
    contributions: [
      "Developed `WikipediaScraper.java` using JSoup to extract and parse data from Wikipedia pages.",
      "Implemented `XMLWriter.java` to save scraped data as XML files, ensuring structured and accessible data storage.",
      "Authored the `pom.xml` file to manage project dependencies and build processes with Maven.",
      "Assisted in designing and developing the GUI using Java Swing, enhancing user experience with intuitive controls and real-time data display."
    ],
    codeSnippet: `/**
 * Wikipedia scraper implementation
 */
public class WikipediaScraper {
    private Document document;
    
    /**
     * Connects to Wikipedia and scrapes content
     */
    public void connectToWikipedia(String url) throws IOException {
        this.document = Jsoup.connect(url).get();
        scrapeWikipedia();
    }
    
    private void scrapeWikipedia() {
        // Extract main content
        Elements paragraphs = document.select("#mw-content-text p");
        // Process content
        processContent(paragraphs);
    }
}`,
    imageUrl: "/assets/images/linguakwic.png",
    githubUrl: "https://github.com/daniyalKhaibullin/LinguaKWIC"
  },
  {
    title: "Restalife Website",
    description: `Developed and maintained the official website for 'Restalife' using WordPress, ensuring optimal performance and SEO. Managed database configurations with phpMyAdmin and collaborated with various plugins to enhance functionality.`,
    features: [
      "Custom Database Management: Created and managed databases using phpMyAdmin to support website functionalities.",
      "Plugin Integration: Worked extensively with SEO Press, codeless editors, and other essential plugins to enhance website capabilities.",
      "Performance Optimization: Improved website load times and responsiveness through front-end optimizations.",
      "SEO Enhancements: Implemented SEO strategies to increase website visibility and search engine rankings.",
      "Migration Management: Successfully migrated the website from one hosting platform to another with minimal downtime."
    ],
    technologies: ["WordPress", "PHP", "MySQL", "phpMyAdmin", "SEO Press", "Codeless Editors", "Plugins"],
    contributions: [
      "Configured and optimized MySQL databases using phpMyAdmin to ensure data integrity and performance.",
      "Customized PHP files to tailor website functionalities, while maintaining WordPress standards.",
      "Integrated and managed various plugins, including SEO Press and codeless editors, to enhance site features without extensive coding.",
      "Optimized front-end elements to improve website performance and user experience.",
      "Executed seamless migration of the website between hosting platforms, ensuring data consistency and uptime."
    ],
    codeSnippet: `<?php
/**
 * Theme setup and customization
 */
add_action('after_setup_theme', function() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    
    // Register navigation menus
    register_nav_menus([
        'primary' => __('Primary Menu', 'restalife'),
        'footer'  => __('Footer Menu', 'restalife')
    ]);
    
    // Add custom image sizes
    add_image_size('restalife-featured', 1200, 600, true);
});`,
    imageUrl: "/assets/images/restalife.png",
    githubUrl: "https://restalife.ru"
  },
  {
    title: "Coffee Shop Website",
    description: `Developed a modern, responsive coffee shop website with an intuitive user interface, online ordering system, and dynamic menu management. The website features smooth parallax effects and interactive elements to enhance user engagement.`,
    features: [
      "Responsive Design: Fully responsive layout that works seamlessly across all devices",
      "Dynamic Menu: Interactive menu system with real-time updates",
      "Online Ordering: Integrated ordering system with cart functionality",
      "Parallax Effects: Smooth scrolling and parallax animations for enhanced visual appeal",
      "User Authentication: Secure login and registration system"
    ],
    technologies: ["React", "Bootstrap", "Node.js", "CSS3", "HTML5"],
    contributions: [
      "Designed and implemented the responsive user interface using React and Bootstrap",
      "Created custom animations and parallax effects for enhanced user experience",
      "Implemented user authentication and session management",
      "Developed the shopping cart and order management system",
      "Optimized performance and loading times"
    ],
    codeSnippet: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="wrapper">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <motion.a 
            className="navbar-brand"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
          >
            <img 
              src={logo} 
              alt="Coffee Shop Logo" 
              className="brand-logo"
            />
          </motion.a>
          
          <motion.button
            className="navbar-toggler"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span className="navbar-toggler-icon" />
          </motion.button>
          
          {/* Navigation items */}
          <div className={\`collapse navbar-collapse \${isMenuOpen ? 'show' : ''}\`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}`,
    imageUrl: "/assets/images/coffee-shop.png"
  }
];

export default function SkillsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Experience</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              style={{ y: y }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                {project.imageUrl && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <CodeBlock 
                  code={project.codeSnippet} 
                  language={project.title.includes("LinguaKWIC") ? "java" : 
                           project.title.includes("Restalife") ? "php" : "javascript"}
                />

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <span>View on GitHub</span>
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                )}
                
                {!project.githubUrl && (
                  <p className="text-gray-500 italic">Private project - Code not publicly available</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}