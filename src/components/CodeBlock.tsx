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
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
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
    <div className="bg-[#1e1e1e] rounded-lg p-6 mb-6 overflow-x-auto">
      <pre className="text-gray-300">
        <code
          ref={codeRef}
          className={`language-${language.toLowerCase()} text-sm font-mono`}
        >
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}
