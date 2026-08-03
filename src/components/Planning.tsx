import React, { useState } from 'react';
import { FileText, Target, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { PlanningDocument } from '../types';

export const Planning: React.FC = () => {
  const { data } = usePortfolio();
  const { plannings } = data;

  const [expandedPlanId, setExpandedPlanId] = useState<string | null>(plannings[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedPlanId(expandedPlanId === id ? null : id);
  };

  return (
    <section id="planning" className="py-24 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
            SECTION 07 / CREATIVE PLANNING STRATEGY
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              콘텐츠 기획안
            </h2>
          </div>
          <span className="mt-4 md:mt-0 text-xs font-bold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            {plannings.length}개 기획서 탑재
          </span>
        </div>

        {/* List of Planning Documents */}
        <div className="space-y-6">
          {plannings.map((plan, index) => {
            const isExpanded = expandedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                className={`bg-zinc-950 rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'border-blue-500  ' : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Header Card Bar */}
                <div
                  onClick={() => toggleExpand(plan.id)}
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-black text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                      0{index + 1}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-2 inline-block">
                        {plan.client}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-2 line-clamp-2 font-normal leading-relaxed">
                        {plan.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-center flex-shrink-0">
                    <button
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                        isExpanded
                          ? 'bg-blue-500 text-white'
                          : 'bg-zinc-800 text-zinc-200 group-hover:bg-zinc-700'
                      }`}
                    >
                      {isExpanded ? '기획서 닫기' : '기획안 전체 보기 →'}
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed View */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 pt-0 border-t border-zinc-800/80 bg-zinc-900/60 animate-fade-in space-y-8">
                    
                    {/* Grid of Key Analysis */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                      
                      {/* 1. Why & Target */}
                      <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
                          <Target className="w-4 h-4" /> 01. 왜 만들었는가 & 타겟
                        </div>
                        <div>
                          <p className="text-xs text-zinc-400 font-bold mb-1">기획 의도 (Why Made)</p>
                          <p className="text-sm text-zinc-200 leading-relaxed">{plan.whyMade}</p>
                        </div>
                        <div className="pt-2 border-t border-zinc-900">
                          <p className="text-xs text-zinc-400 font-bold mb-1">핵심 타겟 (Target)</p>
                          <p className="text-sm text-blue-300 font-medium">{plan.target}</p>
                        </div>
                      </div>

                      {/* 2. Concept */}
                      <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase">
                          <Sparkles className="w-4 h-4" /> 02. 핵심 콘셉트
                        </div>
                        <div>
                          <p className="text-xs text-zinc-400 font-bold mb-1">메인 콘셉트 (Concept)</p>
                          <p className="text-sm text-white font-extrabold">{plan.concept}</p>
                        </div>
                      </div>

                    </div>



                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
