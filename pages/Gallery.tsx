import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Campus', 'Events', 'Sports', 'Classroom'];

  const filteredImages = activeTab === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-12 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold animate-fade-in-up">Photo Gallery</h1>
        <p className="text-gray-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>Glimpses of Life at Jyoti Public School</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 ${
                        activeTab === tab 
                        ? 'bg-secondary text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        {/* Image Grid */}
        {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 perspective">
                {filteredImages.map((img, idx) => (
                    <div 
                        key={idx} 
                        className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer aspect-square hover:shadow-2xl hover:z-10 transition-all duration-500 animate-pop-in"
                        style={{animationDelay: `${idx * 0.05}s`}}
                    >
                        <img 
                            src={img.src} 
                            alt={`Gallery ${img.category}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white font-bold tracking-widest uppercase text-sm border-b-2 border-secondary pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform">View</span>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center text-gray-500 py-10">
                <p>No images found in this category.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;