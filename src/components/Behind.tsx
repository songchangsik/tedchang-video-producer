import React, { useState } from 'react';
import { Camera, Image as ImageIcon, X, Calendar, ZoomIn } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { BehindPhoto } from '../types';

export const Behind: React.FC = () => {
  const { data } = usePortfolio();
  const { behindPhotos } = data;

  const [selectedPhoto, setSelectedPhoto] = useState<BehindPhoto | null>(null);

  return (
    <section id="behind" className="py-24 bg-[#F7F8FA] border-t border-[#E6EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            SECTION 09 / BEHIND THE SCENES
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
              현장 비하인드 (Behind)
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base mt-2">
              카메라 세팅, 로케이션 촬영, 회의, 후반 편집 데스크까지 PD의 열정이 담긴 일상
            </p>
          </div>
          <span className="mt-4 md:mt-0 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            {behindPhotos.length} PHOTOS
          </span>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {behindPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6EAF0] transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                <img
                  src={photo.imageUrl || undefined}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-zinc-900/90 text-white text-xs font-bold rounded-full backdrop-blur-md">
                    {photo.category}
                  </span>
                </div>

                {photo.date && (
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur text-white text-[11px] font-mono font-medium rounded-lg">
                    {photo.date}
                  </div>
                )}
              </div>

              {/* Photo Text */}
              <div className="p-5">
                <h3 className="text-base font-extrabold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-[#E6EAF0]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl || undefined}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 text-white hover:bg-black rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                  {selectedPhoto.category}
                </span>
                {selectedPhoto.date && (
                  <span className="text-xs text-zinc-400 font-mono">{selectedPhoto.date}</span>
                )}
              </div>
              <h2 className="text-xl font-bold text-zinc-900">{selectedPhoto.title}</h2>
              <p className="text-sm text-zinc-600 leading-relaxed">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
