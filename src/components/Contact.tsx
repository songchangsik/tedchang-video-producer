import React, { useState } from 'react';
import { Mail, Youtube, Instagram, FileText, Download, Check, Copy, ArrowUpRight, Send, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact: React.FC = () => {
  const { data } = usePortfolio();
  const { contact } = data;

  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
            SECTION 06 / CONTACT & RESUME
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              사람들이 공유하고 싶은 <br />
              <span className="text-blue-400">영상을 만듭니다.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
              아이디어를 콘텐츠로, 콘텐츠를 성과로 연결하겠습니다.
            </p>

            {/* Email Box */}
            <div className="p-5 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-2.5">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
                DIRECT EMAIL CONTACT
              </span>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-sm sm:text-base font-extrabold text-white font-mono tracking-tight">
                  {contact.email}
                </span>
                <button
                  onClick={copyEmailToClipboard}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-extrabold transition flex items-center gap-2"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-white" /> 복사 완료!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> 이메일 복사
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={contact.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-zinc-900 hover:bg-zinc-850 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-colors flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider group-hover:text-blue-400 transition-colors">YOUTUBE</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-sm sm:text-base font-extrabold text-white font-mono tracking-tight truncate">
                  {contact.youtubeHandle || 'tedchangg'}
                </p>
              </a>

              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-zinc-900 hover:bg-zinc-850 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-colors flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider group-hover:text-blue-400 transition-colors">INSTAGRAM</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-sm sm:text-base font-extrabold text-white font-mono tracking-tight truncate">
                  {contact.instagramHandle || '@changchanghanna1'}
                </p>
              </a>

              <a
                href={contact.blogUrl || 'https://blog.naver.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-zinc-900 hover:bg-zinc-850 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-colors flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                    {contact.blogLabel || 'BLOG'}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-sm sm:text-base font-extrabold text-white font-mono tracking-tight truncate">
                  {contact.blogDisplayText || '블로그'}
                </p>
              </a>
            </div>

          </div>

          {/* Right Downloads Box */}
          <div className="lg:col-span-5 bg-zinc-900 p-6 rounded-3xl border border-zinc-800 space-y-4">
            <div>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold rounded-full border border-blue-500/20">
                DOCUMENT DOWNLOADS
              </span>
              <h3 className="text-2xl font-black text-white mt-3">
                이력서 PDF
              </h3>
              <p className="text-zinc-400 text-sm mt-1">
                서류 검토용 오프라인 문서 파일 다운로드
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={contact.resumePdfUrl}
                download
                onClick={(e) => {
                  if (contact.resumePdfUrl === '#') {
                    e.preventDefault();
                    alert('이력서 PDF 파일 준비 중입니다. 이메일로 요청 시 바로 전송해 드립니다!');
                  }
                }}
                className="p-4 bg-zinc-950 hover:bg-blue-600 text-white rounded-2xl border border-zinc-800 hover:border-blue-500 transition flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  <div>
                    <p className="text-sm font-bold">이력서 다운로드 (Resume PDF)</p>
                    <p className="text-[11px] text-zinc-400 group-hover:text-blue-100">최종 경력 및 자격사항</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-zinc-400 group-hover:text-white" />
              </a>
            </div>

            <div className="pt-2 text-center text-xs text-zinc-500">
              © 2026 TEDCHANG VIDEO PRODUCER. ALL RIGHTS RESERVED.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
