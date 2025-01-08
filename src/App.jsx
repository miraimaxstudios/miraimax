import React, { useState, useEffect } from 'react';
import { Twitter, Send, ExternalLink } from 'lucide-react';
import './index.css';

const MiraimaxWebsite = () => {
  const contractAddress = "0x000...000"; // Replace with actual contract address
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images using 16:9 ratio (1600x900)
  const images = [
    "/shot1.png",
    "/shot2.png",
    "/shot3.png",
    "/shot4.png",
    "/shot6.png",
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm flex justify-between items-center p-6 border-b border-gray-800">
        <div className="text-2xl font-miramax font-bold">MIRAIMAX</div>
        <div className="flex gap-4">
          <a href="https://twitter.com/MiraimaxStudios" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">
            <Send size={24} />
          </a>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <div className="relative h-screen">
        {/* Carousel */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <h1 className="text-6xl font-bold font-miramax mb-1 text-center">MIRAIMAX</h1>
          <div className="inline-flex flex-col items-center mb-8">
            <div className="w-full h-px bg-white mb-1"></div>
              <p className="text-4xl tracking-widest font-bebas whitespace-nowrap">Unreal Entertainment</p>
            <div className="w-full h-px bg-white mt-1"></div>
          </div>

          {/* Dexscreener Button */}
          <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors mb-12">
            View on Dexscreener
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Contract Address Section */}
        <div className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contract Address</h2>
          <div className="flex items-center justify-center gap-4">
            <code className="bg-gray-800 p-3 rounded flex-1 overflow-x-auto">
              {contractAddress}
            </code>
            <button onClick={() => navigator.clipboard.writeText(contractAddress)}
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded transition-colors">
              Copy
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 text-gray-500 border-t border-gray-800">
        <p>© 2025 MIRAIMAX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MiraimaxWebsite;
