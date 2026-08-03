import React, { useState, useEffect } from 'react';
import { Video, ShieldCheck, Lock, Menu, X, LogOut } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar: React.FC = () => {
  const { isAdmin, openAdminModal, logoutAdmin } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'featured', label: 'FEATURED' },
    { id: 'youtube', label: 'YOUTUBE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Intersection logic for active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md  border-b border-[#E6EAF0] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black group-hover:bg-blue-500 transition-colors">
            <Video className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-base font-extrabold tracking-tight text-zinc-900 block leading-none">
              테드창
            </span>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mt-0.5">
              VIDEO PRODUCER
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 p-1.5 rounded-full border border-zinc-200/60 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white '
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Admin button */}
        <div className="hidden lg:flex items-center gap-3">
          {isAdmin ? (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> ADMIN MODE
              </span>
              <button
                onClick={logoutAdmin}
                className="p-1.5 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition"
                title="로그아웃"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={openAdminModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-zinc-700 bg-zinc-100 hover:bg-blue-600 hover:text-white rounded-full border border-zinc-200 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" /> ADMIN
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {isAdmin && (
            <span className="px-2.5 py-1 text-[10px] font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-200">
              ADMIN
            </span>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:bg-zinc-100 rounded-xl transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-zinc-200 px-6 py-6 animate-fade-in space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-3 rounded-2xl text-xs font-bold text-left transition ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
            {isAdmin ? (
              <button
                onClick={logoutAdmin}
                className="w-full py-2.5 px-4 bg-blue-50 text-blue-600 rounded-2xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Admin 로그아웃
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAdminModal();
                }}
                className="w-full py-2.5 px-4 bg-zinc-900 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" /> Admin 관리자 로그인 (비밀번호: 3794)
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
