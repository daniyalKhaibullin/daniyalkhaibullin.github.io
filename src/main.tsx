import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force clear any potential cached renders by adding a timestamp
// to the query string of included assets
const timestamp = Date.now();
console.log(`Application starting at ${timestamp}`);

// Check for existing root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
  throw new Error('Root element not found');
}

// Create fresh React root
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App key={timestamp} />
  </React.StrictMode>,
);
