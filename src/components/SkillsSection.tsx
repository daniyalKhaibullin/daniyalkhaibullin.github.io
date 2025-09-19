import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import CodeBlock from './CodeBlock';
import ImageCarousel from './ImageCarousel';
import Modal from './Modal';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeSnippet: string;
  githubUrl?: string;
  imageUrl?: string;
  images?: string[];
  features: string[];
  contributions: string[];
  websiteUrl?: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Language Learning Platform",
    description: `Intelligent conversational language tutor with real-time streaming, metadata extraction, and adaptive learning algorithms. Built with TypeScript, Express.js, and Supabase for seamless user experience and efficient vocabulary management.`,
    features: [
      "Real-time streaming responses with ChatGPT-like experience using Server-Sent Events",
      "Intelligent metadata extraction from AI responses for automatic vocabulary management",
      "Contextual conversation state management with adaptive teaching algorithms",
      "Multi-language support with PostgreSQL database optimization",
      "Automatic word saving with spaced repetition learning system",
      "RESTful API architecture with Express.js and TypeScript"
    ],
    technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Server-Sent Events", "AI/ML"],
    contributions: [
      "Designed and implemented advanced LLM service architecture with contextual response generation",
      "Built real-time streaming API using Server-Sent Events for seamless user interaction",
      "Developed intelligent metadata extraction system for automatic vocabulary management",
      "Created comprehensive PostgreSQL schema for user profiles and conversation management",
      "Implemented adaptive learning algorithms with spaced repetition functionality"
    ],
    codeSnippet: `interface LLMResponse {
  message: string;
  metadata?: {
    saveWord?: {
      word: string;
      definition: string;
      partOfSpeech?: string;
      pronunciation?: string;
      ipa?: string;
      examples: string[];
    };
    lessonContext?: string;
    action?: 'add_word' | 'create_lesson' | 'practice_vocabulary';
  };
}

export class LLMService {
  private static readonly SYSTEM_PROMPT = \`
  You are Talki, a friendly language tutor. Your rules:
  
  1. Teaching Style:
  - Use clear, simple language (adjust for user's level)
  - Mix explanations with practice questions
  - Correct mistakes gently with examples
  
  2. Word Saving:
  When explaining important vocabulary, include metadata in your response like:
  {
    "metadata": {
      "saveWord": {
        "word": "palabra",
        "definition": "definition in the language",
        "examples": ["example sentences"]
      }
    }
  }
  \`;
}`,
    images: ["/assets/images/main-page.png", "/assets/images/auth-page.png"]
  },
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
    githubUrl: "https://github.com/daniyalKhaibullin/Group-3KWIC_Project"
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
    websiteUrl: "https://restalife.ru"
  }
];

export default function SkillsSection() {
  const containerRef = useRef(null);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const [modalCode, setModalCode] = useState<{ code: string; language: string; title: string } | null>(null);
  
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
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {project.images && project.images.length > 0 ? (
                  <div className="mb-4">
                    <ImageCarousel 
                      images={project.images} 
                      alt={project.title}
                      className="rounded-lg overflow-hidden"
                    />
                  </div>
                ) : project.imageUrl ? (
                  <div 
                    className="mb-4 rounded-lg overflow-hidden cursor-pointer group relative"
                    onClick={() => setModalImage({ src: project.imageUrl!, alt: project.title })}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto object-cover max-h-80 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <CodeBlock 
                  code={project.codeSnippet} 
                  language={project.title.includes("AI-Powered") ? "typescript" :
                           project.title.includes("LinguaKWIC") ? "java" : 
                           project.title.includes("Restalife") ? "php" : "javascript"}
                  onClick={() => setModalCode({ 
                    code: project.codeSnippet, 
                    language: project.title.includes("AI-Powered") ? "typescript" :
                             project.title.includes("LinguaKWIC") ? "java" : 
                             project.title.includes("Restalife") ? "php" : "javascript",
                    title: project.title 
                  })}
                />

                <div className="flex gap-4 mt-6">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                  )}
                  
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
                
                {!project.githubUrl && !project.websiteUrl && (
                  <p className="text-gray-500 italic mt-4">Private project - Code not publicly available</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Modal 
        isOpen={modalImage !== null} 
        onClose={() => setModalImage(null)}
        title={modalImage?.alt}
      >
        {modalImage && (
          <img
            src={modalImage.src}
            alt={modalImage.alt}
            className="max-w-full max-h-[70vh] object-contain rounded-lg"
          />
        )}
      </Modal>

      {/* Code Modal */}
      <Modal 
        isOpen={modalCode !== null} 
        onClose={() => setModalCode(null)}
        title={`${modalCode?.title} - Code`}
      >
        {modalCode && (
          <div className="bg-[#1e1e1e] rounded-lg p-6 overflow-x-auto">
            <pre className="text-gray-300">
              <code className={`language-${modalCode.language.toLowerCase()} text-sm font-mono`}>
                {modalCode.code.trim()}
              </code>
            </pre>
          </div>
        )}
      </Modal>
    </section>
  );
}