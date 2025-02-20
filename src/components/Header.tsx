import React from "react";
import { Brain, MessageSquare } from "lucide-react";
export const Header = () => {
  return <header className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-xl">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
            MedAI 
          </span>
        </div>
        <nav className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>;
};