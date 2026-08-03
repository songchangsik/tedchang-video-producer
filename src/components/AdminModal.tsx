import React, { useState } from 'react';
import { 
  X, Lock, ShieldCheck, Plus, Trash2, Edit3, RotateCcw, Check, Upload, 
  Image as ImageIcon, Video, User, FileText, Youtube, Settings, HelpCircle,
  Sparkles, CheckCircle2, Copy
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { FeaturedWork, PersonalYoutubeItem, PlanningDocument } from '../types';
import { INITIAL_PORTFOLIO_DATA } from '../data/initialData';

const introVideo = '/intro.mp4';

const getPersonalYoutubeItems = (items: PersonalYoutubeItem[]): PersonalYoutubeItem[] => {
  const result = [...(items || [])];
  if (result.length < 12) {
    const defaultItems = INITIAL_PORTFOLIO_DATA.personalYoutube.items;
    for (const defaultItem of defaultItems) {
      if (result.length >= 12) break;
      if (!result.some((it) => it.id === defaultItem.id)) {
        result.push(defaultItem);
      }
    }
  }
  return result;
};

interface ImageInputProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  helperText?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "https://... 이미지 URL 입력 또는 아래 [파일 선택] 버튼 클릭",
  helperText
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert("이미지 용량이 8MB를 초과합니다. 8MB 이하의 이미지를 선택해 주세요.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-zinc-700 flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
          {label}
        </label>
        {value && (
          <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
            이미지 등록됨
          </span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 bg-white border border-zinc-200 rounded-xl text-xs font-mono text-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="px-3.5 py-2 bg-zinc-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0">
          <Upload className="w-3.5 h-3.5" />
          <span>내 PC 파일 선택</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {helperText && (
        <p className="text-[11px] text-zinc-400">{helperText}</p>
      )}

      {/* Preview Thumbnail */}
      {value && (
        <div className="mt-2 relative w-full h-24 rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 flex items-center justify-center group">
          <img
            src={value || undefined}
            alt="미리보기"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <button
              type="button"
              onClick={() => onChange('')}
              className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-lg hover:bg-red-500"
            >
              이미지 삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MediaInput: React.FC<ImageInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "https://... 비디오/이미지 URL 입력 또는 아래 [파일 선택] 버튼 클릭",
  helperText
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        alert("영상/이미지 파일 용량이 50MB를 초과합니다. 50MB 이하의 파일을 선택해 주세요.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const previewSrc = (value === '/assets/intro.mp4' || (!value && label.includes('메인 배경')) || value === '')
    ? introVideo
    : value;

  const isVideo = previewSrc?.startsWith('data:video/') || previewSrc === introVideo || /\.(mp4|webm|mov|ogg|m4v)($|\?)/i.test(previewSrc || '');

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-zinc-700 flex items-center gap-1.5">
          <Video className="w-3.5 h-3.5 text-blue-600" />
          {label}
        </label>
        {value && (
          <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
            {isVideo ? '동영상 등록됨' : '미디어 등록됨'}
          </span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 bg-white border border-zinc-200 rounded-xl text-xs font-mono text-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="px-3.5 py-2 bg-zinc-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0">
          <Upload className="w-3.5 h-3.5" />
          <span>동영상/파일 업로드 (MP4, MOV, WEBM)</span>
          <input
            type="file"
            accept="video/*,image/*,.mp4,.mov,.webm"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {helperText && (
        <p className="text-[11px] text-zinc-400">{helperText}</p>
      )}

      {/* Preview Thumbnail */}
      {previewSrc && (
        <div className="mt-2 relative w-full h-32 rounded-xl overflow-hidden border border-zinc-200 bg-zinc-950 flex items-center justify-center group">
          {isVideo ? (
            <video
              src={previewSrc || undefined}
              autoPlay
              loop
              muted
              playsInline
              onError={(e) => {
                if ((e.target as HTMLVideoElement).src !== introVideo) {
                  (e.target as HTMLVideoElement).src = introVideo;
                }
              }}
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <img
              src={value || undefined}
              alt="미리보기"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
              }}
            />
          )}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <button
              type="button"
              onClick={() => onChange('')}
              className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-lg hover:bg-red-500"
            >
              미디어 삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const AdminModal: React.FC = () => {
  const {
    data,
    isAdmin,
    adminModalOpen,
    openAdminModal,
    closeAdminModal,
    loginAdmin,
    logoutAdmin,
    updateData,
    resetToDefaults,
  } = usePortfolio();

  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'hero' | 'about' | 'skills' | 'featured' | 'youtube' | 'planning' | 'contact'>('hero');

  // Floating Action Button to open Admin modal easily
  const FloatingEditButton = (
    <button
      onClick={openAdminModal}
      className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-zinc-900 hover:bg-blue-600 text-white rounded-full border border-zinc-700 transition-all transform hover:scale-105 flex items-center gap-2 group font-bold text-xs"
    >
      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
      <span>{isAdmin ? "✏️ 포트폴리오 이미지 & 텍스트 편집" : "🔒 관리자 로그인 / 편집"}</span>
    </button>
  );

  const handleCopyCurrentData = () => {
    let exportData = data;
    try {
      const saved = localStorage.getItem('portfolio_data_v1');
      if (saved) {
        exportData = JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }

    const jsonString = JSON.stringify(exportData, null, 2);

    const fallbackCopy = (text: string) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        alert('현재 포트폴리오 데이터가 복사되었습니다.');
      } catch (err) {
        alert('복사에 실패했습니다.');
      } finally {
        document.body.removeChild(textarea);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(jsonString)
        .then(() => {
          alert('현재 포트폴리오 데이터가 복사되었습니다.');
        })
        .catch(() => {
          fallbackCopy(jsonString);
        });
    } else {
      fallbackCopy(jsonString);
    }
  };

  if (!adminModalOpen) return FloatingEditButton;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      setErrorMsg('');
      setPassword('');
    } else {
      setErrorMsg('비밀번호가 올바르지 않습니다. (비밀번호: 3794)');
    }
  };

  return (
    <>
      {FloatingEditButton}

      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
        <div 
          className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl overflow-hidden flex flex-col border border-zinc-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 text-white flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-blue-500/20 text-blue-400 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold leading-none">포트폴리오 라이브 에디터 (텍스트 & 이미지)</h2>
                <span className="text-[11px] text-zinc-400 font-mono mt-0.5 block">
                  수정한 모든 내용과 이미지는 브라우저에 자동 저장됩니다 (PW: 3794)
                </span>
              </div>
            </div>
            <button
              onClick={closeAdminModal}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Login Gate */}
          {!isAdmin ? (
            <div className="p-8 sm:p-12 text-center space-y-6 max-w-md mx-auto my-auto">
              <div className="w-16 h-16 rounded-3xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>

              <div>
                <h3 className="text-xl font-black text-zinc-900">관리자 비밀번호 입력</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  텍스트 문구 및 이미지를 자유롭게 수정/추가/삭제할 수 있습니다.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호 입력 (기본: 3794)"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm font-mono text-center focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                    autoFocus
                  />
                  {errorMsg && (
                    <p className="text-xs text-red-500 font-bold mt-2">{errorMsg}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-2xl transition"
                >
                  에디터 입장
                </button>
              </form>
            </div>
          ) : (
            /* Logged In Admin Workspace */
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
              {/* Sidebar Tabs */}
              <div className="w-full md:w-60 bg-zinc-50 border-r border-zinc-200 p-3 space-y-1 flex-shrink-0 overflow-x-auto md:overflow-y-auto flex md:flex-col gap-1">
                {[
                  { id: 'hero', label: '1. 메인 프로필 (Hero)', icon: <User className="w-4 h-4" /> },
                  { id: 'about', label: '2. 프로필 소개 (About)', icon: <FileText className="w-4 h-4" /> },
                  { id: 'skills', label: '3. 사용 툴 & 스킬 (Skills)', icon: <Settings className="w-4 h-4" /> },
                  { id: 'featured', label: `4. 대표작 (${data.featuredWorks.length}개)`, icon: <Video className="w-4 h-4" /> },
                  { id: 'youtube', label: `5. 개인유튜브 (${getPersonalYoutubeItems(data.personalYoutube.items).length}개)`, icon: <Youtube className="w-4 h-4" /> },
                  { id: 'planning', label: `6. 기획안 (${data.plannings.length}개)`, icon: <FileText className="w-4 h-4" /> },
                  { id: 'contact', label: '7. 연락처 & 링크', icon: <User className="w-4 h-4" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold text-left whitespace-nowrap transition flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white '
                        : 'text-zinc-700 hover:bg-zinc-200/70'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}

                {/* Mobile Export Button */}
                <button
                  onClick={handleCopyCurrentData}
                  className="px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 md:hidden"
                >
                  <Copy className="w-4 h-4" />
                  <span>현재 데이터 복사</span>
                </button>

                <div className="pt-4 border-t border-zinc-200 mt-auto hidden md:block space-y-2">
                  <button
                    onClick={handleCopyCurrentData}
                    className="w-full py-2 px-3 text-[11px] font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center gap-1.5 transition"
                  >
                    <Copy className="w-3.5 h-3.5" /> 현재 데이터 복사
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('초기 데이터로 전부 리셋하시겠습니까?')) {
                        resetToDefaults();
                      }
                    }}
                    className="w-full py-2 px-3 text-[11px] font-bold text-zinc-500 hover:text-red-600 bg-white hover:bg-red-50 border border-zinc-200 rounded-xl flex items-center justify-center gap-1.5 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> 초기화 (Reset)
                  </button>
                  <button
                    onClick={logoutAdmin}
                    className="w-full py-2 px-3 text-[11px] font-bold text-zinc-600 hover:text-zinc-900 bg-zinc-200/60 rounded-xl transition"
                  >
                    로그아웃
                  </button>
                </div>
              </div>

              {/* Editor Workspace Content */}
              <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-white">
                
                {/* 1. Hero Tab Editor */}
                {activeTab === 'hero' && (
                  <div className="space-y-6">
                    <div className="border-b pb-3">
                      <h3 className="text-lg font-black text-zinc-900">메인 프로필 & Hero 텍스트/영상 편집</h3>
                      <p className="text-xs text-zinc-500 mt-1">메인 화면 최상단에 보이는 이름, 직함, 슬로건, 통계를 수정합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">이름</label>
                        <input
                          type="text"
                          value={data.hero.name}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({ ...prev, hero: { ...prev.hero, name: val } }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">직함 (Role)</label>
                        <input
                          type="text"
                          value={data.hero.role}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({ ...prev, hero: { ...prev.hero, role: val } }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">세부 역할 (Sub Roles)</label>
                        <input
                          type="text"
                          value={data.hero.subRoles}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({ ...prev, hero: { ...prev.hero, subRoles: val } }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-bold text-zinc-700 block mb-1">메인 슬로건 문구</label>
                        <input
                          type="text"
                          value={data.hero.slogan}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({ ...prev, hero: { ...prev.hero, slogan: val } }));
                          }}
                          className="w-full p-3 bg-blue-50/50 border border-blue-200 rounded-xl text-sm font-black text-blue-900"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-bold text-zinc-700 block mb-1">Hero Subtitle</label>
                        <input
                          type="text"
                          value={data.hero.subtitle ?? "끝까지 보게 만드는 영상을 만듭니다."}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({ ...prev, hero: { ...prev.hero, subtitle: val } }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <MediaInput
                          label="메인 배경 영상 (또는 이미지)"
                          value={data.hero.videoBackgroundUrl}
                          onChange={(val) => {
                            updateData((prev) => ({ ...prev, hero: { ...prev.hero, videoBackgroundUrl: val } }));
                          }}
                          placeholder="https://...mp4 비디오 URL 입력 또는 [동영상/파일 업로드] 버튼 클릭"
                          helperText="내 PC의 동영상 파일(MP4, MOV, WEBM)을 업로드하여 메인 배경 영상으로 등록할 수 있습니다."
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">통계 1 (값 & 라벨)</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={data.hero.stat1Value}
                            onChange={(e) => {
                              const val = e.target.value;
                              updateData((prev) => ({ ...prev, hero: { ...prev.hero, stat1Value: val } }));
                            }}
                            className="w-24 p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-extrabold text-blue-600"
                          />
                          <input
                            type="text"
                            value={data.hero.stat1Label}
                            onChange={(e) => {
                              const val = e.target.value;
                              updateData((prev) => ({ ...prev, hero: { ...prev.hero, stat1Label: val } }));
                            }}
                            className="flex-1 p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">통계 2 (값 & 라벨)</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={data.hero.stat2Value}
                            onChange={(e) => {
                              const val = e.target.value;
                              updateData((prev) => ({ ...prev, hero: { ...prev.hero, stat2Value: val } }));
                            }}
                            className="w-24 p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-extrabold text-blue-600"
                          />
                          <input
                            type="text"
                            value={data.hero.stat2Label}
                            onChange={(e) => {
                              const val = e.target.value;
                              updateData((prev) => ({ ...prev, hero: { ...prev.hero, stat2Label: val } }));
                            }}
                            className="flex-1 p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. About Tab Editor */}
                {activeTab === 'about' && (
                  <div className="space-y-6">
                    <div className="border-b pb-3">
                      <h3 className="text-lg font-black text-zinc-900">소개 섹션 (About Me) 텍스트 & 이미지</h3>
                      <p className="text-xs text-zinc-500 mt-1">프로필 사진 파일 업로드 및 소개글을 자유롭게 작성할 수 있습니다.</p>
                    </div>

                    <ImageInput
                      label="프로필 사진 이미지 (URL 또는 내 파일 업로드)"
                      value={data.about.profileImageUrl}
                      onChange={(newUrl) => {
                        updateData((prev) => ({ ...prev, about: { ...prev.about, profileImageUrl: newUrl } }));
                      }}
                      helperText="내 컴퓨터에 있는 이미지 파일 선택 버튼을 눌러 사진을 바로 올릴 수 있습니다."
                    />

                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">한 줄 헤드라인 메세지</label>
                      <input
                        type="text"
                        value={data.about.oneLiner}
                        onChange={(e) => {
                          const val = e.target.value;
                          updateData((prev) => ({ ...prev, about: { ...prev.about, oneLiner: val } }));
                        }}
                        className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">본문 문단 목록 (줄바꿈 구분)</label>
                      <textarea
                        rows={5}
                        value={data.about.paragraphs.join('\n')}
                        onChange={(e) => {
                          const paragraphs = e.target.value.split('\n').filter((p) => p.trim() !== '');
                          updateData((prev) => ({ ...prev, about: { ...prev.about, paragraphs } }));
                        }}
                        className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs leading-relaxed"
                        placeholder="각 문단을 줄바꿈(Enter)으로 구분하여 작성하세요."
                      />
                    </div>

                    {/* Strengths Cards Editor */}
                    <div className="pt-4 border-t border-zinc-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-xs font-bold text-zinc-800 block">
                            PD 핵심 강점 카드 (예능형 리듬감, 현장 연출 등 3개 카드 편집)
                          </label>
                          <p className="text-[11px] text-zinc-400">
                            제목과 상세 설명 문구를 직접 수정할 수 있습니다.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const curStrengths = data.about.strengths && data.about.strengths.length > 0 ? data.about.strengths : [
                              { title: "예능형 리듬감", description: "지루함 없는 3초 컷편집 & 자막 연출" },
                              { title: "현장 총괄 연출", description: "조명, 오디오, 출연진 연출 및 리그 세팅" },
                              { title: "데이터 기반 성과", description: "시청지속률 & 고클릭률 썸네일 검증" }
                            ];
                            updateData((prev) => ({
                              ...prev,
                              about: {
                                ...prev.about,
                                strengths: [...curStrengths, { title: "새 강점 키워드", description: "상세 능력 설명" }]
                              }
                            }));
                          }}
                          className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" /> 카드 추가
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {(data.about.strengths && data.about.strengths.length > 0 ? data.about.strengths : [
                          { title: "예능형 리듬감", description: "지루함 없는 3초 컷편집 & 자막 연출" },
                          { title: "현장 총괄 연출", description: "조명, 오디오, 출연진 연출 및 리그 세팅" },
                          { title: "데이터 기반 성과", description: "시청지속률 & 고클릭률 썸네일 검증" }
                        ]).map((st, idx) => (
                          <div key={idx} className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2 relative">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-extrabold text-blue-600">CARD #{idx + 1}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  const cur = data.about.strengths && data.about.strengths.length > 0 ? data.about.strengths : [
                                    { title: "예능형 리듬감", description: "지루함 없는 3초 컷편집 & 자막 연출" },
                                    { title: "현장 총괄 연출", description: "조명, 오디오, 출연진 연출 및 리그 세팅" },
                                    { title: "데이터 기반 성과", description: "시청지속률 & 고클릭률 썸네일 검증" }
                                  ];
                                  const updated = cur.filter((_, i) => i !== idx);
                                  updateData((prev) => ({
                                    ...prev,
                                    about: { ...prev.about, strengths: updated }
                                  }));
                                }}
                                className="text-zinc-400 hover:text-red-600 p-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div>
                              <label className="text-[10px] font-bold text-zinc-500 block mb-0.5">제목</label>
                              <input
                                type="text"
                                value={st.title}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  const cur = data.about.strengths && data.about.strengths.length > 0 ? data.about.strengths : [
                                    { title: "예능형 리듬감", description: "지루함 없는 3초 컷편집 & 자막 연출" },
                                    { title: "현장 총괄 연출", description: "조명, 오디오, 출연진 연출 및 리그 세팅" },
                                    { title: "데이터 기반 성과", description: "시청지속률 & 고클릭률 썸네일 검증" }
                                  ];
                                  const updated = cur.map((item, i) => i === idx ? { ...item, title: val } : item);
                                  updateData((prev) => ({
                                    ...prev,
                                    about: { ...prev.about, strengths: updated }
                                  }));
                                }}
                                className="w-full p-2 bg-white border border-zinc-200 rounded-xl text-xs font-bold"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-bold text-zinc-500 block mb-0.5">설명</label>
                              <input
                                type="text"
                                value={st.description}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  const cur = data.about.strengths && data.about.strengths.length > 0 ? data.about.strengths : [
                                    { title: "예능형 리듬감", description: "지루함 없는 3초 컷편집 & 자막 연출" },
                                    { title: "현장 총괄 연출", description: "조명, 오디오, 출연진 연출 및 리그 세팅" },
                                    { title: "데이터 기반 성과", description: "시청지속률 & 고클릭률 썸네일 검증" }
                                  ];
                                  const updated = cur.map((item, i) => i === idx ? { ...item, description: val } : item);
                                  updateData((prev) => ({
                                    ...prev,
                                    about: { ...prev.about, strengths: updated }
                                  }));
                                }}
                                className="w-full p-2 bg-white border border-zinc-200 rounded-xl text-xs"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Skills Tab Editor */}
                {activeTab === 'skills' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <h3 className="text-lg font-black text-zinc-900">사용 제작 툴 & 핵심 역량</h3>
                        <p className="text-xs text-zinc-500 mt-1">다룰 수 있는 소프트웨어 카드와 제작 역량 태그를 수정합니다.</p>
                      </div>
                      <button
                        onClick={() => {
                          const newTool = { name: '새 소프트웨어', desc: '툴 활용 능력 설명' };
                          updateData((prev) => ({
                            ...prev,
                            skills: {
                              ...prev.skills,
                              tools: [...prev.skills.tools, newTool]
                            }
                          }));
                        }}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-1"
                      >
                        <Plus className="w-4 h-4" /> 툴 추가
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {data.skills.tools.map((tool, idx) => (
                        <div key={idx} className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2 relative">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-blue-600">TOOL #{idx + 1}</span>
                            <button
                              onClick={() => {
                                updateData((prev) => ({
                                  ...prev,
                                  skills: {
                                    ...prev.skills,
                                    tools: prev.skills.tools.filter((_, i) => i !== idx)
                                  }
                                }));
                              }}
                              className="text-zinc-400 hover:text-red-600 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <input
                            type="text"
                            value={tool.name}
                            onChange={(e) => {
                              const val = e.target.value;
                              updateData((prev) => ({
                                ...prev,
                                skills: {
                                  ...prev.skills,
                                  tools: prev.skills.tools.map((t, i) => i === idx ? { ...t, name: val } : t)
                                }
                              }));
                            }}
                            className="w-full p-2 bg-white border rounded-xl text-xs font-bold"
                            placeholder="프로그램 명"
                          />

                          <input
                            type="text"
                            value={tool.desc}
                            onChange={(e) => {
                              const val = e.target.value;
                              updateData((prev) => ({
                                ...prev,
                                skills: {
                                  ...prev.skills,
                                  tools: prev.skills.tools.map((t, i) => i === idx ? { ...t, desc: val } : t)
                                }
                              }));
                            }}
                            className="w-full p-2 bg-white border rounded-xl text-xs"
                            placeholder="활용도 / 설명"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-zinc-100">
                      <label className="text-xs font-bold text-zinc-700 block mb-2">
                        핵심 역량 태그 목록 (쉼표 , 로 구분)
                      </label>
                      <input
                        type="text"
                        value={data.skills.competencies.join(', ')}
                        onChange={(e) => {
                          const comps = e.target.value.split(',').map((c) => c.trim()).filter(Boolean);
                          updateData((prev) => ({
                            ...prev,
                            skills: {
                              ...prev.skills,
                              competencies: comps
                            }
                          }));
                        }}
                        className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono"
                      />
                    </div>
                  </div>
                )}

                {/* 4. Featured Works Tab Editor */}
                {activeTab === 'featured' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <h3 className="text-lg font-black text-zinc-900">대표 프로젝트 목록 관리</h3>
                        <p className="text-xs text-zinc-500 mt-1">썸네일 이미지, 영상 엠베드 링크, 기획 및 비하인드를 직접 편집합니다.</p>
                      </div>
                      <button
                        onClick={() => {
                          const newWork: FeaturedWork = {
                            id: `fw-${Date.now()}`,
                            title: '신규 대표 영상 프로젝트',
                            category: 'Commercial',
                            client: '클라이언트 명',
                            thumbnailUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
                            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                            planningIntent: '프로젝트 기획 의도를 입력해 주세요.',
                            role: '총괄 연출 & 편집',
                            performance: '성과 지표 입력 (예: 조회수 50만회)',
                            behindStory: '제작 비하인드 노하우',
                            tags: ['기획', '연출', '편집']
                          };
                          updateData((prev) => ({
                            ...prev,
                            featuredWorks: [newWork, ...prev.featuredWorks]
                          }));
                        }}
                        className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" /> 새 대표작 추가
                      </button>
                    </div>

                    <div className="space-y-6">
                      {data.featuredWorks.map((work, idx) => (
                        <div key={work.id} className="p-5 bg-zinc-50 rounded-3xl border border-zinc-200 space-y-4">
                          <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2">
                            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                              대표작 #{idx + 1}
                            </span>
                            <button
                              onClick={() => {
                                if (confirm('이 대표작 항목을 삭제하시겠습니까?')) {
                                  updateData((prev) => ({
                                    ...prev,
                                    featuredWorks: prev.featuredWorks.filter((w) => w.id !== work.id)
                                  }));
                                }
                              }}
                              className="px-2.5 py-1 text-xs text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-1 font-bold"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> 삭제
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">프로젝트 제목</label>
                              <input
                                type="text"
                                value={work.title}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    featuredWorks: prev.featuredWorks.map((w) => w.id === work.id ? { ...w, title: val } : w)
                                  }));
                                }}
                                className="w-full p-2.5 bg-white border rounded-xl text-xs font-bold"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">수행 역할</label>
                              <input
                                type="text"
                                value={work.role}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    featuredWorks: prev.featuredWorks.map((w) => w.id === work.id ? { ...w, role: val } : w)
                                  }));
                                }}
                                className="w-full p-2.5 bg-white border rounded-xl text-xs"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">성과 지표 수치</label>
                              <input
                                type="text"
                                value={work.performance}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    featuredWorks: prev.featuredWorks.map((w) => w.id === work.id ? { ...w, performance: val } : w)
                                  }));
                                }}
                                className="w-full p-2.5 bg-blue-50/60 border border-blue-200 rounded-xl text-xs font-bold text-blue-800"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <ImageInput
                                label="썸네일 이미지"
                                value={work.thumbnailUrl}
                                onChange={(newUrl) => {
                                  updateData((prev) => ({
                                    ...prev,
                                    featuredWorks: prev.featuredWorks.map((w) => w.id === work.id ? { ...w, thumbnailUrl: newUrl } : w)
                                  }));
                                }}
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">유튜브 영상 Embed URL 또는 영상 링크</label>
                              <input
                                type="text"
                                value={work.videoUrl}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    featuredWorks: prev.featuredWorks.map((w) => w.id === work.id ? { ...w, videoUrl: val } : w)
                                  }));
                                }}
                                placeholder="예: https://www.youtube.com/embed/XXXXXX"
                                className="w-full p-2.5 bg-white border rounded-xl text-xs font-mono"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">기획 의도 설명</label>
                              <textarea
                                rows={2}
                                value={work.planningIntent}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    featuredWorks: prev.featuredWorks.map((w) => w.id === work.id ? { ...w, planningIntent: val } : w)
                                  }));
                                }}
                                className="w-full p-2.5 bg-white border rounded-xl text-xs leading-relaxed"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">비하인드 노하우 / 비하인드 스토리</label>
                              <textarea
                                rows={2}
                                value={work.behindStory || ''}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    featuredWorks: prev.featuredWorks.map((w) => w.id === work.id ? { ...w, behindStory: val } : w)
                                  }));
                                }}
                                className="w-full p-2.5 bg-white border rounded-xl text-xs leading-relaxed"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Personal Youtube Tab Editor */}
                {activeTab === 'youtube' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <h3 className="text-lg font-black text-zinc-900">개인 유튜브 섹션 편집</h3>
                        <p className="text-xs text-zinc-500 mt-1">유튜브 채널 정보 및 제작 영상들을 추가, 수정, 썸네일 업로드합니다.</p>
                      </div>
                      <button
                        onClick={() => {
                          const newItem: PersonalYoutubeItem = {
                            id: `yt-${Date.now()}`,
                            title: '신규 개인 유튜브 프로젝트 영상',
                            thumbnailUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
                            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                            views: '10만 회',
                            isBest: false,
                            planningIntent: '기획 의도를 적어주세요.',
                            shootingPoint: '촬영 포인트를 적어주세요.',
                            editingPoint: '편집 포인트를 적어주세요.',
                            keyLearnings: '배운 점을 적어주세요.'
                          };
                          updateData((prev) => ({
                            ...prev,
                            personalYoutube: {
                              ...prev.personalYoutube,
                              items: [newItem, ...getPersonalYoutubeItems(prev.personalYoutube.items)]
                            }
                          }));
                        }}
                        className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" /> 새 영상 추가
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">채널명</label>
                        <input
                          type="text"
                          value={data.personalYoutube.channelName}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              personalYoutube: { ...prev.personalYoutube, channelName: val }
                            }));
                          }}
                          className="w-full p-2 bg-white border rounded-xl text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">채널 핸들 (@)</label>
                        <input
                          type="text"
                          value={data.personalYoutube.channelHandle}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              personalYoutube: { ...prev.personalYoutube, channelHandle: val }
                            }));
                          }}
                          className="w-full p-2 bg-white border rounded-xl text-xs font-mono"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-bold text-zinc-700 block mb-1">채널 설명</label>
                        <textarea
                          rows={2}
                          value={data.personalYoutube.description}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              personalYoutube: { ...prev.personalYoutube, description: val }
                            }));
                          }}
                          className="w-full p-2 bg-white border rounded-xl text-xs leading-relaxed"
                        />
                      </div>
                    </div>

                    <div className="space-y-5">
                      {getPersonalYoutubeItems(data.personalYoutube.items).map((item, idx) => (
                        <div key={item.id} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-3">
                          <div className="flex items-center justify-between border-b pb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-zinc-700">영상 #{idx + 1}</span>
                              <label className="text-[11px] flex items-center gap-1 text-red-600 font-extrabold cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={item.isBest || false}
                                  onChange={(e) => {
                                    const checked = e.target.checked;
                                    updateData((prev) => ({
                                      ...prev,
                                      personalYoutube: {
                                        ...prev.personalYoutube,
                                        items: getPersonalYoutubeItems(prev.personalYoutube.items).map((it) => it.id === item.id ? { ...it, isBest: checked } : it)
                                      }
                                    }));
                                  }}
                                /> 
                                <span>BEST 대표작 태그</span>
                              </label>
                            </div>
                            <button
                              onClick={() => {
                                if (confirm('삭제하시겠습니까?')) {
                                  updateData((prev) => ({
                                    ...prev,
                                    personalYoutube: {
                                      ...prev.personalYoutube,
                                      items: getPersonalYoutubeItems(prev.personalYoutube.items).filter((it) => it.id !== item.id)
                                    }
                                  }));
                                }
                              }}
                              className="text-red-600 hover:bg-red-50 p-1 rounded-md text-xs font-bold flex items-center gap-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> 삭제
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">영상 제목</label>
                              <input
                                type="text"
                                value={item.title}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    personalYoutube: {
                                      ...prev.personalYoutube,
                                      items: getPersonalYoutubeItems(prev.personalYoutube.items).map((it) => it.id === item.id ? { ...it, title: val } : it)
                                    }
                                  }));
                                }}
                                className="w-full p-2.5 bg-white border rounded-xl text-xs font-bold"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">유튜브 Embed URL</label>
                              <input
                                type="text"
                                value={item.videoUrl}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    personalYoutube: {
                                      ...prev.personalYoutube,
                                      items: getPersonalYoutubeItems(prev.personalYoutube.items).map((it) => it.id === item.id ? { ...it, videoUrl: val } : it)
                                    }
                                  }));
                                }}
                                className="w-full p-2 bg-white border rounded-xl text-xs font-mono"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <ImageInput
                                label="영상 썸네일 이미지"
                                value={item.thumbnailUrl}
                                onChange={(newUrl) => {
                                  updateData((prev) => ({
                                    ...prev,
                                    personalYoutube: {
                                      ...prev.personalYoutube,
                                      items: getPersonalYoutubeItems(prev.personalYoutube.items).map((it) => it.id === item.id ? { ...it, thumbnailUrl: newUrl } : it)
                                    }
                                  }));
                                }}
                              />
                            </div>

                            {/* 상세 노하우 4가지 항목 편집 */}
                            <div className="sm:col-span-2 pt-2 border-t border-zinc-200/80 space-y-3">
                              <span className="text-xs font-black text-blue-700 block">
                                💡 상세 노하우 내용 (팝업 창에 표시)
                              </span>

                              <div>
                                <label className="text-[11px] font-bold text-zinc-600 block mb-1">기획 의도 (Planning Intent)</label>
                                <textarea
                                  rows={2}
                                  value={item.planningIntent || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateData((prev) => ({
                                      ...prev,
                                      personalYoutube: {
                                        ...prev.personalYoutube,
                                        items: getPersonalYoutubeItems(prev.personalYoutube.items).map((it) => it.id === item.id ? { ...it, planningIntent: val } : it)
                                      }
                                    }));
                                  }}
                                  placeholder="기획 의도 및 배경 작성"
                                  className="w-full p-2.5 bg-white border border-zinc-200 rounded-xl text-xs leading-relaxed"
                                />
                              </div>

                              <div>
                                <label className="text-[11px] font-bold text-zinc-600 block mb-1">촬영 포인트 (Shooting Point)</label>
                                <textarea
                                  rows={2}
                                  value={item.shootingPoint || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateData((prev) => ({
                                      ...prev,
                                      personalYoutube: {
                                        ...prev.personalYoutube,
                                        items: getPersonalYoutubeItems(prev.personalYoutube.items).map((it) => it.id === item.id ? { ...it, shootingPoint: val } : it)
                                      }
                                    }));
                                  }}
                                  placeholder="촬영 시 연출 및 기술 포인트 작성"
                                  className="w-full p-2.5 bg-white border border-zinc-200 rounded-xl text-xs leading-relaxed"
                                />
                              </div>

                              <div>
                                <label className="text-[11px] font-bold text-zinc-600 block mb-1">편집 포인트 (Editing Point)</label>
                                <textarea
                                  rows={2}
                                  value={item.editingPoint || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateData((prev) => ({
                                      ...prev,
                                      personalYoutube: {
                                        ...prev.personalYoutube,
                                        items: getPersonalYoutubeItems(prev.personalYoutube.items).map((it) => it.id === item.id ? { ...it, editingPoint: val } : it)
                                      }
                                    }));
                                  }}
                                  placeholder="편집, 모션, 자막 호흡 등 연출 포인트 작성"
                                  className="w-full p-2.5 bg-white border border-zinc-200 rounded-xl text-xs leading-relaxed"
                                />
                              </div>

                              <div>
                                <label className="text-[11px] font-bold text-zinc-600 block mb-1">배운 점 / 핵심 성과 (Key Learnings)</label>
                                <textarea
                                  rows={2}
                                  value={item.keyLearnings || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateData((prev) => ({
                                      ...prev,
                                      personalYoutube: {
                                        ...prev.personalYoutube,
                                        items: getPersonalYoutubeItems(prev.personalYoutube.items).map((it) => it.id === item.id ? { ...it, keyLearnings: val } : it)
                                      }
                                    }));
                                  }}
                                  placeholder="제작 후 얻은 인사이트 및 배운 점 작성"
                                  className="w-full p-2.5 bg-white border border-zinc-200 rounded-xl text-xs leading-relaxed"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. Planning Tab Editor */}
                {activeTab === 'planning' && (
                  <div className="space-y-6">
                    <div className="p-4 sm:p-5 bg-blue-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-black text-zinc-900">기획안 섹션 표시</h3>
                        <p className="text-[11px] text-zinc-500 mt-1">OFF로 바꿔도 기획안 내용과 링크는 삭제되지 않고, 공개 포트폴리오에서만 숨겨집니다.</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={data.settings?.planningVisible ?? false}
                        onClick={() => {
                          updateData((prev) => ({
                            ...prev,
                            settings: {
                              ...prev.settings,
                              planningVisible: !(prev.settings?.planningVisible ?? false),
                            },
                          }));
                        }}
                        className={`relative inline-flex h-8 w-16 flex-shrink-0 items-center rounded-full border transition-colors ${
                          (data.settings?.planningVisible ?? false)
                            ? 'bg-blue-600 border-blue-600'
                            : 'bg-zinc-200 border-zinc-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                            (data.settings?.planningVisible ?? false) ? 'translate-x-9' : 'translate-x-1'
                          }`}
                        />
                        <span className="sr-only">기획안 섹션 표시 전환</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <h3 className="text-lg font-black text-zinc-900">기획안 문서 (Planning Documents) 편집</h3>
                        <p className="text-xs text-zinc-500 mt-1">포트폴리오 내 상세 기획서 문서를 추가하거나 내용을 변경합니다.</p>
                      </div>
                      <button
                        onClick={() => {
                          const newDoc: PlanningDocument = {
                            id: `plan-${Date.now()}`,
                            title: '신규 기획서 제목',
                            client: '클라이언트명',
                            summary: '기획 요약문',
                            whyMade: '기획 배경 및 제작 목적',
                            target: '타겟 시청층',
                            problem: '해결하고자 한 문제',
                            insight: '발견한 핵심 인사이트',
                            concept: '콘셉트 및 소구점',
                            references: '참고 레퍼런스',
                            shootingMethod: '촬영 및 제작 방식',
                            thumbnailDirection: '썸네일 기획 방향',
                            expectedPerformance: '예상 성과'
                          };
                          updateData((prev) => ({
                            ...prev,
                            plannings: [newDoc, ...prev.plannings]
                          }));
                        }}
                        className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" /> 새 기획서 추가
                      </button>
                    </div>

                    <div className="space-y-6">
                      {data.plannings.map((plan, idx) => (
                        <div key={plan.id} className="p-5 bg-zinc-50 rounded-3xl border border-zinc-200 space-y-3">
                          <div className="flex items-center justify-between border-b pb-2">
                            <span className="text-xs font-bold text-blue-600">기획서 #{idx + 1}</span>
                            <button
                              onClick={() => {
                                if (confirm('기획서를 삭제하시겠습니까?')) {
                                  updateData((prev) => ({
                                    ...prev,
                                    plannings: prev.plannings.filter((p) => p.id !== plan.id)
                                  }));
                                }
                              }}
                              className="text-red-600 hover:bg-red-50 p-1 rounded-md text-xs font-bold flex items-center gap-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> 삭제
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">기획서 제목</label>
                              <input
                                type="text"
                                value={plan.title}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    plannings: prev.plannings.map((p) => p.id === plan.id ? { ...p, title: val } : p)
                                  }));
                                }}
                                className="w-full p-2.5 bg-white border rounded-xl text-xs font-bold"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">클라이언트</label>
                              <input
                                type="text"
                                value={plan.client}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    plannings: prev.plannings.map((p) => p.id === plan.id ? { ...p, client: val } : p)
                                  }));
                                }}
                                className="w-full p-2.5 bg-white border rounded-xl text-xs"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">한 줄 요약</label>
                              <input
                                type="text"
                                value={plan.summary}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    plannings: prev.plannings.map((p) => p.id === plan.id ? { ...p, summary: val } : p)
                                  }));
                                }}
                                className="w-full p-2.5 bg-white border rounded-xl text-xs"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">기획 배경 (Why)</label>
                              <textarea
                                rows={2}
                                value={plan.whyMade}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    plannings: prev.plannings.map((p) => p.id === plan.id ? { ...p, whyMade: val } : p)
                                  }));
                                }}
                                className="w-full p-2 bg-white border rounded-xl text-xs"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">핵심 타겟 (Target)</label>
                              <textarea
                                rows={2}
                                value={plan.target}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    plannings: prev.plannings.map((p) => p.id === plan.id ? { ...p, target: val } : p)
                                  }));
                                }}
                                className="w-full p-2 bg-white border rounded-xl text-xs"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="text-[11px] font-bold text-zinc-600 block mb-1">핵심 콘셉트 (Concept)</label>
                              <textarea
                                rows={2}
                                value={plan.concept}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateData((prev) => ({
                                    ...prev,
                                    plannings: prev.plannings.map((p) => p.id === plan.id ? { ...p, concept: val } : p)
                                  }));
                                }}
                                className="w-full p-2 bg-white border rounded-xl text-xs"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Contact Tab Editor */}
                {activeTab === 'contact' && (
                  <div className="space-y-6">
                    <div className="border-b pb-3">
                      <h3 className="text-lg font-black text-zinc-900">연락처 및 링크 정보</h3>
                      <p className="text-xs text-zinc-500 mt-1">이메일주소, 인스타그램 아이디 및 다운로드 링크를 관리합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">이메일 주소</label>
                        <input
                          type="email"
                          value={data.contact.email}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, email: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">인스타그램 링크</label>
                        <input
                          type="text"
                          value={data.contact.instagramUrl}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, instagramUrl: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold"
                          placeholder="https://instagram.com/changchanghanna1"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">인스타그램 계정 표기 (Handle)</label>
                        <input
                          type="text"
                          value={data.contact.instagramHandle || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, instagramHandle: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold"
                          placeholder="@changchanghanna1"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">유튜브 채널 링크</label>
                        <input
                          type="text"
                          value={data.contact.youtubeUrl}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, youtubeUrl: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">유튜브 채널 표기 (Handle)</label>
                        <input
                          type="text"
                          value={data.contact.youtubeHandle || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, youtubeHandle: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold"
                          placeholder="tedchangg"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">블로그 링크 (Blog URL)</label>
                        <input
                          type="text"
                          value={data.contact.blogUrl || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, blogUrl: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                          placeholder="https://blog.naver.com"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">블로그 라벨 (Blog Label)</label>
                        <input
                          type="text"
                          value={data.contact.blogLabel || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, blogLabel: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                          placeholder="BLOG"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">블로그 표시 텍스트 (Blog Display Text)</label>
                        <input
                          type="text"
                          value={data.contact.blogDisplayText || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, blogDisplayText: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                          placeholder="블로그"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-1">이력서 PDF 링크</label>
                        <input
                          type="text"
                          value={data.contact.resumePdfUrl}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, resumePdfUrl: val }
                            }));
                          }}
                          className="w-full p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="text-xs text-blue-900 font-bold">
                        수정한 모든 변경 사항은 저장 버튼 없이 실시간으로 즉시 반영되며 내 브라우저에 안전하게 보관됩니다.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
