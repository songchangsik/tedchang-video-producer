import React, { useState } from 'react';
import { Youtube } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { PersonalYoutubeItem } from '../types';
import { VideoModal } from './VideoModal';
import { INITIAL_PORTFOLIO_DATA } from '../data/initialData';

export const PersonalYoutube: React.FC = () => {
  const { data } = usePortfolio();
  const { personalYoutube } = data;

  const [selectedItem, setSelectedItem] = useState<PersonalYoutubeItem | null>(null);

  // Ensure 12 project cards (3 columns x 4 rows)
  const itemsList = [...(personalYoutube.items || [])];
  if (itemsList.length < 12) {
    const defaultItems = INITIAL_PORTFOLIO_DATA.personalYoutube.items;
    for (const item of defaultItems) {
      if (itemsList.length >= 12) break;
      if (!itemsList.some((existing) => existing.id === item.id)) {
        itemsList.push(item);
      }
    }
  }
  const displayItems = itemsList.slice(0, 12);

  return (
    <section id="youtube" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
            SECTION 05 / PERSONAL CHANNEL
          </span>
        </div>

        {/* Big Channel Intro Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-zinc-800 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-600 text-white rounded-2xl">
                <Youtube className="w-8 h-8 fill-white" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                  {personalYoutube.channelName}
                </h2>
                <span className="text-sm font-mono text-blue-400 font-bold">
                  {personalYoutube.channelHandle}
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
              {personalYoutube.description}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 backdrop-blur">
            <div className="text-center px-6">
              <p className="text-2xl font-black text-blue-500">100%</p>
              <p className="text-[11px] font-semibold text-zinc-400">자체 1인 제작</p>
            </div>
          </div>
        </div>

        {/* 3x4 Grid of Project Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/80 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1.5"
            >
              {/* Thumbnail Frame */}
              <div className="relative aspect-video bg-zinc-950 overflow-hidden">
                <img
                  src={item.thumbnailUrl || undefined}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Subtle dark hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-extrabold text-zinc-100 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* YouTube Detail Modal */}
      {selectedItem && (
        <VideoModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          category="TEDCHANGG Personal YouTube"
          videoUrl={selectedItem.videoUrl}
        />
      )}
    </section>
  );
};
