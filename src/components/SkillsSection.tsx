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
    title: "Playtomic-to-Xero Financial Pipeline",
    description: "An automated, serverless Node.js pipeline that extracts padel club transaction data from the Playtomic API and reconciles it into draft sales invoices in Xero. Hosted live on Render with secure token handling via Supabase.",
    features: [
      "Automated extraction of club payments paced to Playtomic's API rate limits",
      "Machine-readable ontology framework (YAML/JSON) for complex financial categorization",
      "Secure API token handling and authentication stored in a Supabase backend",
      "Implementation of 300+ automated Jest tests to ensure strict financial data integrity",
      "Dynamic VAT basis calculations and card fee reconciliation based on service dates"
    ],
    technologies: ["Node.js", "Render", "Supabase", "REST APIs", "Jest", "YAML", "Xero API"],
    contributions: [
      "Architected the entire serverless infrastructure and deployed on Render",
      "Engineered the transformation logic mapping Playtomic product types to Xero accounts",
      "Designed the full test suite ensuring zero-loss financial reconciliation",
      "Implemented seamless error-handling and audit trail generation for accounting transparency"
    ],
    codeSnippet: `// Example representation of pipeline routing logic
async function processClubMonth(clubId, targetMonth) {
  try {
    // 1. Pull club payments straight from Playtomic
    const rawPayments = await fetchPlaytomicData(clubId, targetMonth, rateLimiter);
    
    // 2. Categorize into invoice lines using YAML ontology rules
    const categorizedLines = await transformPaymentsToInvoice(rawPayments, ontologyRules);
    
    // 3. Post the draft invoice into the club's Xero organization
    const xeroDraft = await postToXero(clubId, categorizedLines);
    
    return generateAuditTrail(xeroDraft, "POSTED");
  } catch (error) {
    handlePipelineException(error, clubId);
  }
}`,
    images: ["/assets/images/playtomic-2.png", "/assets/images/playtomic-3.png"],
    websiteUrl: "https://playtomic-xero-pipeline.onrender.com"
  },
  {
    title: "Max Planck Data Management Architecture",
    description: "A full-stack internal management application developed for the Max Planck Institute's data team. Designed to supersede third-party tools (Asana) to seamlessly assign, label, and route incoming motion-capture data.",
    features: [
      "React Vite and TypeScript frontend for rapid, responsive data tagging",
      "Python FastAPI backend connected to an SQLite database for reliable data querying",
      "Nginx reverse proxy configuration for secure, optimized web traffic routing",
      "Containerized deployment to the internal Max Planck cluster using Docker and Portainer",
      "AI-accelerated development cycle utilizing Claude Code for workflow optimization"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "SQLite", "Docker", "Nginx"],
    contributions: [
      "Developed the interactive GUI for markerless data capture analysis",
      "Configured the Nginx server blocks and handled system architecture networking",
      "Authored docker-compose.yml files and managed container deployment via Portainer",
      "Integrated SQL databases for robust data tracking across the research team"
    ],
    codeSnippet: `# Docker Compose configuration for internal cluster deployment
version: '3.8'
services:
  frontend:
    build: ./client
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: always

  backend:
    build: ./api
    environment:
      - DATABASE_URL=sqlite:///./data/mpi_internal.db
    ports:
      - "8000:8000"
    volumes:
      - mpi_data:/app/data
    restart: always

volumes:
  mpi_data:`,
  },
  {
    title: "AI-Powered Language Learning Platform",
    description: "Intelligent conversational language tutor with real-time streaming, metadata extraction, and adaptive learning algorithms. Built with TypeScript, Express.js, and Supabase for seamless user experience.",
    features: [
      "Real-time streaming responses with ChatGPT-like experience using Server-Sent Events",
      "Intelligent metadata extraction from AI responses for automatic vocabulary management",
      "Contextual conversation state management with adaptive teaching algorithms",
      "Multi-language support with PostgreSQL database optimization",
      "RESTful API architecture with Express.js and TypeScript"
    ],
    technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Supabase", "AI/ML"],
    contributions: [
      "Designed and implemented advanced LLM service architecture with contextual generation",
      "Built real-time streaming API using Server-Sent Events",
      "Developed intelligent metadata extraction system for automatic vocabulary management"
    ],
    codeSnippet: `interface LLMResponse {
  message: string;
  metadata?: {
    saveWord?: {
      word: string;
      definition: string;
      examples: string[];
    };
    action?: 'add_word' | 'create_lesson';
  };
}

export class LLMService {
  private static readonly SYSTEM_PROMPT = \`
  You are an adaptive language tutor. Your rules:
  1. Use clear, simple language adjusted to the user's level.
  2. Embed vocabulary metadata in JSON format for the system to extract automatically.
  \`;
}`,
    images: ["/assets/images/main-page.png", "/assets/images/auth-page.png"]
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Architecture</h2>
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
                  language={project.title.includes("Pipeline") ? "javascript" :
                           project.title.includes("Max Planck") ? "yaml" : "typescript"}
                  onClick={() => setModalCode({ 
                    code: project.codeSnippet, 
                    language: project.title.includes("Pipeline") ? "javascript" :
                             project.title.includes("Max Planck") ? "yaml" : "typescript",
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
                      <span>Visit Live Service</span>
                    </a>
                  )}
                </div>
                
                {!project.githubUrl && !project.websiteUrl && (
                  <p className="text-gray-500 italic mt-4">Internal infrastructure - Code not publicly available</p>
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
        title={`${modalCode?.title} - Architecture`}
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