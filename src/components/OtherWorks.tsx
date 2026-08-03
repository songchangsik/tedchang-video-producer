import React, { useState } from 'react';
import { Play, Calendar, Wrench, ArrowUpRight, Building2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { OtherWork } from '../types';
import { VideoModal } from './VideoModal';

export const OtherWorks: React.FC = () => {
  const { data } = usePortfolio();
  const { otherWorks } = data;

  const [selectedWork, setSelectedWork] = useState<OtherWork | null>(null);

  return (
    <section id="works" className="py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            SECTION 06 / BRAND CLIENT WORKS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              브랜드 포트폴리오 (Other Works)
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base mt-2">
              유수의 대기업 브랜드 광고팀과의 협업으로 검증된 브랜디드 영상 프로젝트
            </p>
          </div>
        </div>

        {/* Grid of Brand Works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6EAF0] hover:border-zinc-400 transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                <img
                  src={work.thumbnailUrl || undefined}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-zinc-900/90 text-white font-extrabold text-xs rounded-full backdrop-blur-md">
                    {work.brand}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-extrabold text-zinc-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {work.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs text-zinc-600">
                    <p className="flex items-center gap-1.5 font-medium">
                      <span className="font-bold text-zinc-900">맡은 역할:</span> {work.role}
                    </p>
                    <p className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{work.period}</span>
                    </p>
                  </div>
                </div>

                {/* Tools Badges */}
                <div className="pt-3 border-t border-[#E6EAF0] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {work.toolsUsed.map((tool, i) => (
                      <span key={i} className="px-2.5 py-0.5 bg-zinc-200/70 text-zinc-700 text-[10px] font-semibold rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {selectedWork && (
        <VideoModal
          isOpen={!!selectedWork}
          onClose={() => setSelectedWork(null)}
          title={selectedWork.title}
          client={selectedWork.brand}
          videoUrl={selectedWork.videoUrl}
          role={selectedWork.role}
          period={selectedWork.period}
          toolsUsed={selectedWork.toolsUsed}
        />
      )}
    </section>
  );
};
