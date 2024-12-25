import React, { useState } from 'react';
import { Flower2, Menu, X, ExternalLink } from 'lucide-react';
import { GiftCertificatesMenu } from './GiftCertificatesMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-sage-700 text-white p-6 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Flower2 size={32} />
          <h1 className="text-2xl font-serif">Jen Miller Yoga Tracker</h1>
        </div>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-sage-600 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 top-full w-64 bg-sage-700 shadow-lg p-4">
          <a 
            href="https://leshedstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:bg-sage-600 rounded-lg p-3 transition-colors"
          >
            <ExternalLink size={18} />
            <span>Visit Le Shed Studio</span>
          </a>
        </div>
      )}

      <GiftCertificatesMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}