import React from 'react';
import { Play, Check } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero: React.FC = () => {
  const { data } = usePortfolio();
  const { hero } = data;

  const introVideo = '/intro.mp4';

  const [videoSrc, setVideoSrc] = React.useState<string>(() => {
    if (!hero.videoBackgroundUrl || hero.videoBackgroundUrl.trim() === '' || hero.videoBackgroundUrl === '/assets/intro.mp4' || hero.videoBackgroundUrl === '/intro.mp4') {
      return introVideo;
    }
    return hero.videoBackgroundUrl;
  });

  React.useEffect(() => {
    if (!hero.videoBackgroundUrl || hero.videoBackgroundUrl.trim() === '' || hero.videoBackgroundUrl === '/assets/intro.mp4' || hero.videoBackgroundUrl === '/intro.mp4') {
      setVideoSrc(introVideo);
    } else {
      setVideoSrc(hero.videoBackgroundUrl);
    }
  }, [hero.videoBackgroundUrl]);

  const scrollToFeatured = () => {
    const el = document.getElementById('featured');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Video Hero Frame */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 aspect-[16/9] max-h-[560px] mb-12 group">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            src={videoSrc}
            onError={() => {
              if (videoSrc !== introVideo) {
                setVideoSrc(introVideo);
              }
            }}
            className="w-full h-full object-cover opacity-65 scale-105 group-hover:scale-100 transition-transform duration-1000"
          />

          {/* Dark Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 flex flex-col justify-between p-6 sm:p-10 md:p-12">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                SHOWREEL 2026
              </span>
            </div>

            {/* Middle Main Text */}
            <div className="max-w-3xl space-y-2.5 sm:space-y-3 md:translate-y-[55px] sm:translate-y-3 translate-y-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                  {hero.name}
                </h1>
                <span className="px-3 py-1 bg-blue-500 text-white font-extrabold text-xs sm:text-sm rounded-lg uppercase tracking-wider">
                  {hero.role}
                </span>
              </div>

              <p className="text-lg sm:text-xl font-extrabold text-blue-400 tracking-wide">
                {hero.subRoles}
              </p>

              <div className="space-y-1 sm:space-y-1.5">
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-100 leading-snug">
                  "{hero.slogan}"
                </p>

                <p className="text-[15px] sm:text-[16px] font-normal text-white/75 leading-[1.5]">
                  {hero.subtitle || "끝까지 보게 만드는 영상을 만듭니다."}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-8 sm:pt-9 flex items-center gap-4">
                <button
                  onClick={scrollToFeatured}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm sm:text-base rounded-2xl hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" /> [Portfolio] 대표작 보기
                </button>
              </div>
            </div>

            {/* Bottom scroll hint */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-zinc-400 text-xs">
              <span>KOREA</span>
            </div>
          </div>
        </div>

        {/* Strong Stats Bar below */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6EAF0]">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 items-center">
            
            {/* Stat 1 */}
            <div className="border-r border-[#E6EAF0] pr-4">
              <p className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
                {hero.stat1Value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-500 mt-1">
                {hero.stat1Label}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="lg:border-r border-[#E6EAF0] pr-4">
              <p className="text-3xl sm:text-4xl font-black text-blue-600 tracking-tight">
                {hero.stat2Value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-500 mt-1">
                {hero.stat2Label}
              </p>
            </div>

            {/* 4 Key Skill Area Badges */}
            <div className="col-span-2 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { title: 'Planning', desc: '스토리 기획 & 대본' },
                { title: 'Shooting', desc: '라이팅 & 연출' },
                { title: 'Editing', desc: '컷편집 & 효과' },
                { title: 'Thumbnail', desc: '고CTR 디자인' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 bg-white rounded-2xl border border-[#E6EAF0] hover:border-zinc-400 transition"
                >
                  <p className="text-sm font-black text-zinc-900 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-blue-500" /> {item.title}
                  </p>
                  <p className="text-[11px] text-zinc-500 font-medium mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
