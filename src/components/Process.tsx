import React from 'react';
import { ArrowDown, Check, Workflow, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Process: React.FC = () => {
  const { data } = usePortfolio();
  const { process } = data;

  return (
    <section id="process" className="py-24 bg-[#F7F8FA] border-t border-[#E6EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            SECTION 08 / WORK PROCESS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
              PD 전문 일하는 방식 (7 Steps Workflow)
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base mt-2">
              체계적이고 검증된 리서치부터 발행 및 성과 피드백까지의 7단계 파이프라인
            </p>
          </div>
          <span className="mt-4 md:mt-0 text-xs font-extrabold text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
            End-to-End Execution
          </span>
        </div>

        {/* Desktop Step Flow Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {process.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#E6EAF0] hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-blue-500 font-mono">
                      {item.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors" />
                  </div>

                  <h3 className="text-sm font-extrabold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-mono text-zinc-400 mb-2">
                    {item.englishTitle}
                  </p>

                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bullet details */}
                <div className="mt-4 pt-3 border-t border-[#E6EAF0] space-y-1">
                  {item.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-[11px] text-zinc-500 flex items-start gap-1">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
