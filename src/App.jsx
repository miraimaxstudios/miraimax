import React from 'react';
import { Twitter, Send, ExternalLink } from 'lucide-react';
import './index.css';

const MiraimaxWebsite = () => {
  const contractAddress = "0x000...000"; // Replace with actual contract address

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="text-2xl font-bold">MIRAIMAX</div>
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">
            <Send size={24} />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-6xl font-bold mb-4">MIRAIMAX</h1>
        <p className="text-2xl text-gray-400 mb-12">Unreal Entertainment</p>

        {/* Dexscreener Button */}
        <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors mb-12">
          View on Dexscreener
          <ExternalLink size={20} />
        </a>

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
