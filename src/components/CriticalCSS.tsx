// src/components/CriticalCSS.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

const CriticalCSS: React.FC = () => {
  const criticalStyles = `
    /* Critical CSS for above-the-fold content */
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      color: #2C3E50;
    }
    
    .hero {
      min-height: 60vh;
      background-color: #2C3E50;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .hero h1 {
      color: #4FD1C7;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 700;
      text-align: center;
      margin: 0 0 1rem 0;
    }
    
    .btn-primary {
      background-color: #4FD1C7;
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.75rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      transition: all 0.15s ease-in-out;
    }
    
    .btn-outline {
      background-color: transparent;
      color: white;
      border: 2px solid white;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      transition: all 0.15s ease-in-out;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <Helmet>
      <style>{criticalStyles}</style>
    </Helmet>
  );
};

export default CriticalCSS;
