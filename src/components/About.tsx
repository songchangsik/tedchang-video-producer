import React from 'react';
import { Camera, Clapperboard, Award } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { data } = usePortfolio();
  const { about } = data;

  return (
    <section id="about" className="py-20 bg-[#F7F8FA] border-y border-[#E6EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-0 relative top-[24px]">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            SECTION 02 / ABOUT ME
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:items-end">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100 inline-block">
                Video Producer Story
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black text-zinc-900 tracking-tight leading-tight whitespace-nowrap">
                {about.oneLiner}
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="bg-white p-5 rounded-2xl border border-[#E6EAF0]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* PD Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {(about.strengths && about.strengths.length > 0 ? about.strengths : [
                { title: "예능형 리듬감", description: "지루함 없는 3초 컷편집 & 자막 연출" },
                { title: "현장 총괄 연출", description: "조명, 오디오, 출연진 연출 및 리그 세팅" },
                { title: "데이터 기반 성과", description: "시청지속률 & 고클릭률 썸네일 검증" }
              ]).map((st, idx) => (
                <div key={idx} className="p-4 bg-white rounded-2xl border border-[#E6EAF0]">
                  {idx % 3 === 0 && <Clapperboard className="w-5 h-5 text-blue-600 mb-2" />}
                  {idx % 3 === 1 && <Camera className="w-5 h-5 text-blue-600 mb-2" />}
                  {idx % 3 === 2 && <Award className="w-5 h-5 text-blue-600 mb-2" />}
                  <h3 className="text-sm font-bold text-zinc-900">{st.title}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{st.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-zinc-200 aspect-[4/5] bg-zinc-900">
                <img
                  src={about.profileImageUrl || undefined}
                  alt="테드창 영상 PD 작업 모습"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-xl font-extrabold mt-1">테드창 PD</p>
                  <p className="text-xs text-zinc-300">기획부터 결과까지 책임집니다.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
