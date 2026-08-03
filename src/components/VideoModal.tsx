import React from 'react';
import { X, ExternalLink, Play, CheckCircle, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  client?: string;
  videoUrl: string;
  views?: string;
  role?: string;
  planningIntent?: string;
  shootingPoint?: string;
  editingPoint?: string;
  keyLearnings?: string;
  performance?: string;
  behindStory?: string;
  storyboardImages?: string[];
  period?: string;
  toolsUsed?: string[];
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  client,
  videoUrl,
  views,
  role,
  planningIntent,
  shootingPoint,
  editingPoint,
  keyLearnings,
  performance,
  behindStory,
  storyboardImages,
  period,
  toolsUsed,
}) => {
  if (!isOpen) return null;

  // Convert video URL to an autoplay-enabled embed URL
  const formatEmbedUrl = (rawUrl: string): { formattedUrl: string; isEmbed: boolean } => {
    if (!rawUrl) return { formattedUrl: '', isEmbed: false };

    let videoId = '';
    const isYouTube = rawUrl.includes('youtube.com') || rawUrl.includes('youtu.be');
    const isVimeo = rawUrl.includes('vimeo.com');

    if (isYouTube) {
      try {
        if (rawUrl.includes('youtube.com/watch')) {
          const urlObj = new URL(rawUrl);
          videoId = urlObj.searchParams.get('v') || '';
        } else if (rawUrl.includes('youtu.be/')) {
          const parts = rawUrl.split('youtu.be/')[1];
          if (parts) videoId = parts.split('?')[0].split('&')[0];
        } else if (rawUrl.includes('youtube.com/embed/')) {
          const parts = rawUrl.split('youtube.com/embed/')[1];
          if (parts) videoId = parts.split('?')[0].split('&')[0];
        } else if (rawUrl.includes('youtube.com/shorts/')) {
          const parts = rawUrl.split('youtube.com/shorts/')[1];
          if (parts) videoId = parts.split('?')[0].split('&')[0];
        }
      } catch (e) {
        // Fallback parsing if URL constructor fails
      }

      if (!videoId) {
        const match = rawUrl.match(/(?:v=|\/embed\/|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (match && match[1]) {
          videoId = match[1];
        }
      }

      if (videoId) {
        return {
          formattedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1`,
          isEmbed: true,
        };
      }
    }

    if (isVimeo) {
      const match = rawUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/);
      if (match && match[1]) {
        return {
          formattedUrl: `https://player.vimeo.com/video/${match[1]}?autoplay=1`,
          isEmbed: true,
        };
      }
    }

    const isEmbed = isYouTube || isVimeo;
    let formattedUrl = rawUrl;
    if (isEmbed && !formattedUrl.includes('autoplay=1')) {
      const separator = formattedUrl.includes('?') ? '&' : '?';
      formattedUrl = `${formattedUrl}${separator}autoplay=1&rel=0`;
    }

    return { formattedUrl, isEmbed };
  };

  const { formattedUrl, isEmbed } = formatEmbedUrl(videoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-y-auto flex flex-col border border-[#E6EAF0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-[#E6EAF0]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-extrabold text-blue-700 bg-blue-50 rounded-full border border-blue-100">
              FEATURED PROJECT
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 rounded-full transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full bg-black aspect-video flex items-center justify-center">
          {isEmbed && formattedUrl ? (
            <iframe
              key={formattedUrl}
              src={formattedUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : formattedUrl ? (
            <video
              src={formattedUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-zinc-500 text-sm">영상이 존재하지 않습니다.</div>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6 text-zinc-800">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">{title}</h2>
              {views && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                  <Play className="w-3.5 h-3.5 fill-blue-600" /> 조회수 {views}
                </span>
              )}
            </div>

            {period && (
              <p className="text-sm text-zinc-500">작업 기간: {period}</p>
            )}
          </div>

          {/* Quick info badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {role && (
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">맡은 역할 (Role)</p>
                <p className="text-sm font-medium text-zinc-800">{role}</p>
              </div>
            )}

            {performance && (
              <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">핵심 성과 (Performance)</p>
                <p className="text-sm font-semibold text-zinc-900">{performance}</p>
              </div>
            )}
          </div>

          {/* Detailed Points */}
          <div className="space-y-4 pt-2 border-t border-zinc-100">
            {planningIntent && (
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-blue-500" /> 기획 의도 (Planning Intent)
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed pl-5">{planningIntent}</p>
              </div>
            )}

            {shootingPoint && (
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-blue-500" /> 촬영 포인트 (Shooting Point)
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed pl-5">{shootingPoint}</p>
              </div>
            )}

            {editingPoint && (
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-blue-500" /> 편집 포인트 (Editing Point)
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed pl-5">{editingPoint}</p>
              </div>
            )}

            {keyLearnings && (
              <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/60 space-y-1">
                <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> 배운 점 (Key Learnings)
                </h3>
                <p className="text-sm text-amber-900/90 leading-relaxed">{keyLearnings}</p>
              </div>
            )}

            {behindStory && (
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/60 space-y-1">
                <h3 className="text-sm font-bold text-zinc-900">비하인드 스토리 (Behind Story)</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{behindStory}</p>
              </div>
            )}

            {toolsUsed && toolsUsed.length > 0 && (
              <div className="pt-2">
                <p className="text-xs font-semibold text-zinc-400 mb-2">사용 툴 (Tools Used)</p>
                <div className="flex flex-wrap gap-2">
                  {toolsUsed.map((tool, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-700 rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Storyboard or Behind Images */}
          {storyboardImages && storyboardImages.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-zinc-100">
              <h3 className="text-sm font-bold text-zinc-900">스토리보드 & 기획 비하인드</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {storyboardImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img || undefined}
                    alt={`Storyboard ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-2xl border border-zinc-200"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
