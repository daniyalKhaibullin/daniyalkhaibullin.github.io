import { useEffect, useState } from 'react';

export default function DebugHero() {
  const [mounted, setMounted] = useState(false);
  const timestamp = Date.now();

  useEffect(() => {
    setMounted(true);
    // Force browser to show the most recent version by adding a URL parameter
    console.log(`DebugHero mounted at ${new Date().toISOString()}`);
    
    // Add visible debugging to the DOM
    const debugInfo = document.createElement('div');
    debugInfo.style.position = 'fixed';
    debugInfo.style.top = '5px';
    debugInfo.style.right = '5px';
    debugInfo.style.backgroundColor = 'rgba(255,255,255,0.8)';
    debugInfo.style.padding = '5px';
    debugInfo.style.zIndex = '9999';
    debugInfo.style.fontSize = '12px';
    debugInfo.style.fontFamily = 'monospace';
    debugInfo.textContent = `Render TS: ${timestamp}`;
    document.body.appendChild(debugInfo);
    
    return () => {
      try {
        document.body.removeChild(debugInfo);
      } catch (e) {
        // Ignore if already removed
      }
    };
  }, []);

  return (
    <div className="bg-yellow-50 border-4 border-red-500">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="hero-title">
          Computational Linguist &  <br />
          <span className="text-red-600">Aspiring Full-stack Developer ({timestamp})</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-6">
          Debug version with timestamp: {mounted ? 'Mounted' : 'Not mounted'} 
          <br />
          {new Date().toISOString()}
        </p>
      </div>
    </div>
  );
}
