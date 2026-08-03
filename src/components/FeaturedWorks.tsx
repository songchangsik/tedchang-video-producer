import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { FeaturedWork } from '../types';
import { VideoModal } from './VideoModal';

export const FeaturedWorks: React.FC = () => {
  const { data } = usePortfolio();
  const { featuredWorks } = data;

  const [selectedWork, setSelectedWork] = useState<FeaturedWork | null>(null);

  return (
    <section id="featured" className="py-20 bg-[#F7F8FA] border-t border-[#E6EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            SECTION 04 / FEATURED WORKS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
              대표 프로젝트 (Featured Works)
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base mt-2">
              기획부터 현장 연출, 컷편집, 썸네일, 실제 성과 수치까지 입증된 메인 작품집
            </p>
          </div>
          <span className="mt-4 md:mt-0 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            TOTAL {featuredWorks.length} PROJECTS
          </span>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6EAF0] transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1.5"
            >
              {/* Thumbnail Frame */}
              <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                <img
                  src={work.thumbnailUrl || undefined}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {work.title}
                  </h3>

                  {/* One-line Description */}
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                    {work.planningIntent}
                  </p>

                  {/* Role */}
                  <div className="pt-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">Role</p>
                    <p className="text-xs text-zinc-700 font-medium line-clamp-1">{work.role}</p>
                  </div>

                  {/* Result */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">Result</p>
                    <p className="text-xs text-zinc-900 font-semibold line-clamp-1">{work.performance}</p>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-3 border-t border-[#E6EAF0] flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  <span>View Project →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video & Detail Modal */}
      {selectedWork && (
        <VideoModal
          isOpen={!!selectedWork}
          onClose={() => setSelectedWork(null)}
          title={selectedWork.title}
          category={selectedWork.category}
          client={selectedWork.client}
          videoUrl={selectedWork.videoUrl}
          role={selectedWork.role}
          planningIntent={selectedWork.planningIntent}
          performance={selectedWork.performance}
          behindStory={selectedWork.behindStory}
          storyboardImages={selectedWork.storyboardImages}
        />
      )}
    </section>
  );
};
