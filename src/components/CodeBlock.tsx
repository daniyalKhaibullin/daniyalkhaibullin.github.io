// src/components/CodeBlock.tsx

import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Import core Prism first
import 'prismjs/prism';

// Then import dependencies
import 'prismjs/components/prism-clike'; // Required for PHP
import 'prismjs/components/prism-markup-templating'; // Added for PHP placeholders

// Then import languages
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';

interface CodeBlockProps {
  code: string;
  language: string;
  onClick?: () => void;
}

export default function CodeBlock({ code, language, onClick }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Normalize language name
      const normalizedLanguage =
        language.toLowerCase() === 'javascript' ? 'jsx' : language.toLowerCase();

      // Check if the language is loaded in Prism
      if (!Prism.languages[normalizedLanguage]) {
        console.warn(`Language '${normalizedLanguage}' not loaded in Prism`);
        // Fallback to plain text
        Prism.highlightElement(codeRef.current, false, () => {});
      } else {
        Prism.highlightElement(codeRef.current);
      }
    }
  }, [code, language]);

  return (
    <div 
      className={`bg-[#1e1e1e] rounded-lg p-4 mb-4 overflow-x-auto max-h-64 overflow-y-auto relative ${onClick ? 'cursor-pointer group hover:bg-[#2a2a2a] transition-colors duration-300' : ''}`}
      onClick={onClick}
    >
      <pre className="text-gray-300">
        <code
          ref={codeRef}
          className={`language-${language.toLowerCase()} text-xs font-mono`}
        >
          {code.trim()}
        </code>
      </pre>
      
      {onClick && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-3">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
