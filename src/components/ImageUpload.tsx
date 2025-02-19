import React, { useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
export const ImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">
        <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-6 h-6 text-white" />
            <h2 className="text-xl font-semibold text-white">
              Disease Detection
            </h2>
          </div>
        </div>
        <div className="p-6">
          <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center bg-blue-50/50 transition-all hover:bg-blue-50">
            {preview ? <div className="space-y-4">
                <img src={preview} alt="Preview" className="max-w-full h-auto rounded-lg shadow-lg mx-auto" />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  Analyze Image
                </button>
              </div> : <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Upload className="w-10 h-10 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-2">
                  Upload an image for analysis
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  Supported formats: JPG, PNG
                </p>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                <label htmlFor="image-upload" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all cursor-pointer">
                  Select Image
                </label>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};