import React from "react";
import { Header } from "./components/Header";
import { ImageUpload } from "./components/ImageUpload";
import { Chatbot } from "./components/Chatbot";
import { Brain } from "lucide-react";
export function App() {
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-24">
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
            AI-Powered Healthcare
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Diabetic Retinopathy Detection with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Upload medical images for instant disease detection or chat with our
            AI assistant for comprehensive medical information
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700">
              <Brain className="w-5 h-5" />
              <span>AI-Powered Analysis</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700">
              <Brain className="w-5 h-5" />
              <span>24/7 Assistant</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 pb-16">
          <ImageUpload />
          <Chatbot />
        </div>
      </main>
    </div>;
}