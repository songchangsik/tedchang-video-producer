import React from 'react';
import { Film, Image, Layers, Sparkles, Mic, Palette, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Skills: React.FC = () => {
  const { data } = usePortfolio();
  const { skills } = data;

  const toolIcons: Record<string, React.ReactNode> = {
    'Final Cut Pro': <Film className="w-6 h-6 text-blue-600" />,
    'Photoshop': <Image className="w-6 h-6 text-blue-500" />,
    'After Effects': <Layers className="w-6 h-6 text-purple-500" />,
    'Runway': <Sparkles className="w-6 h-6 text-amber-500" />,
    'Vrew': <Mic className="w-6 h-6 text-blue-500" />,
    'Illustrator': <Palette className="w-6 h-6 text-orange-500" />,
  };

  return (
    <section id="skills" className="py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            SECTION 03 / SKILLS & TOOLS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              제작 툴 & 실무 역량
            </h2>
            <p className="text-zinc-500 text-sm mt-2">
              편집부터 그래픽, 모션, AI까지 콘텐츠 제작에 필요한 툴을 활용합니다.
            </p>
          </div>
        </div>

        {/* Software Tool Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skills.tools.map((tool, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-[#E6EAF0] hover:border-zinc-400 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E6EAF0] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {toolIcons[tool.name] || <Film className="w-6 h-6 text-blue-600" />}
              </div>
              <h3 className="text-sm font-extrabold text-zinc-900 mb-1">{tool.name}</h3>
              <p className="text-[11px] text-zinc-500 leading-tight">{tool.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Competencies Bar Below */}
        <div className="p-8 bg-zinc-900 text-white rounded-3xl border border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                PRODUCTION SCOPE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                기획부터 썸네일까지, 롱폼과 숏폼 모두 다룹니다.
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {skills.competencies.map((comp, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-blue-600 text-white text-sm font-extrabold rounded-2xl border border-white/10 transition-colors cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
