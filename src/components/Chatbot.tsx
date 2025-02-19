import React, { useState } from "react";
import { Send, Bot, Wand2, Image as ImageIcon, X } from "lucide-react";
interface Message {
  text: string;
  isBot: boolean;
  image?: string;
}
export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([{
    text: "Hello! I'm your medical AI assistant. You can send me messages or share medical images for analysis.",
    isBot: true
  }]);
  const [input, setInput] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSend = () => {
    if (!input.trim() && !imagePreview) return;
    const newMessage: Message = {
      text: input,
      isBot: false,
      image: imagePreview || undefined
    };
    setMessages(prev => [...prev, newMessage]);
    setInput("");
    setImagePreview(null);
    setTimeout(() => {
      const aiResponse = imagePreview ? "I've analyzed the medical image you've shared. Based on the visual patterns, this appears to require professional medical evaluation. Please consult with a healthcare provider for an accurate diagnosis." : "I understand your concern. Based on medical literature, this condition typically requires professional medical evaluation. Please consult with a healthcare provider for accurate diagnosis.";
      setMessages(prev => [...prev, {
        text: aiResponse,
        isBot: true
      }]);
    }, 1000);
  };
  const clearImagePreview = () => {
    setImagePreview(null);
  };
  return <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">
        <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="flex items-center gap-3">
            <Wand2 className="w-6 h-6 text-white" />
            <h2 className="text-xl font-semibold text-white">
              AI Medical Assistant
            </h2>
          </div>
        </div>
        <div className="h-[400px] overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${message.isBot ? "bg-gray-100 text-gray-800 rounded-tl-none" : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-tr-none"}`}>
                {message.image && <img src={message.image} alt="Uploaded medical image" className="max-w-full rounded-lg mb-2" />}
                {message.text && <div>{message.text}</div>}
              </div>
            </div>)}
        </div>
        <div className="p-4 border-t bg-gray-50">
          {imagePreview && <div className="mb-3 relative">
              <div className="relative inline-block">
                <img src={imagePreview} alt="Preview" className="h-20 w-auto rounded-lg border-2 border-blue-200" />
                <button onClick={clearImagePreview} className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>}
          <div className="flex gap-2">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message..." className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" onKeyPress={e => e.key === "Enter" && handleSend()} />
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="chat-image-upload" />
            <label htmlFor="chat-image-upload" className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 cursor-pointer transition-all flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </label>
            <button onClick={handleSend} className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};