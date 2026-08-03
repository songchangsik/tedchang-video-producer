import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData } from '../types';
import { INITIAL_PORTFOLIO_DATA } from '../data/initialData';

const STORAGE_KEY = 'tedchang_pd_portfolio_data_v3';
const ADMIN_SESSION_KEY = 'tedchang_pd_admin_logged_in';
const DB_NAME = 'TedChangPortfolioDB';
const STORE_NAME = 'portfolio_store';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadPersistedData(): Promise<PortfolioData | null> {
  try {
    const db = await openDB();
    const dataFromDB = await new Promise<PortfolioData | null>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(STORAGE_KEY);
      req.onsuccess = () => resolve((req.result as PortfolioData) || null);
      req.onerror = () => resolve(null);
    });

    if (dataFromDB) {
      return dataFromDB;
    }
  } catch (e) {
    console.warn('IndexedDB read failed, checking localStorage fallback', e);
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load portfolio data from localStorage', e);
  }

  return null;
}

async function savePersistedData(data: PortfolioData): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(data, STORAGE_KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.error('Failed to save to IndexedDB', e);
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    // Large video Data URLs may exceed localStorage 5MB quota; IndexedDB handles them seamlessly.
  }
}

async function clearPersistedData(): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(STORAGE_KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.error('Failed to clear IndexedDB', e);
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
}

interface PortfolioContextType {
  data: PortfolioData;
  isAdmin: boolean;
  adminModalOpen: boolean;
  openAdminModal: () => void;
  closeAdminModal: () => void;
  loginAdmin: (pass: string) => boolean;
  logoutAdmin: () => void;
  updateData: (updater: (prev: PortfolioData) => PortfolioData) => void;
  resetToDefaults: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.hero?.videoBackgroundUrl || parsed.hero.videoBackgroundUrl.trim() === '') {
          parsed.hero = { ...parsed.hero, videoBackgroundUrl: '/assets/intro.mp4' };
        }
        if (!parsed.personalYoutube?.description || parsed.personalYoutube.description === "독학 PD의 솔직한 영상 제작기 및 예능 실험실. 기획부터 100만 뷰 달성까지의 과정 공개") {
          parsed.personalYoutube = { ...parsed.personalYoutube, description: "기획부터 촬영, 편집까지. 혼자 만드는 예능 콘텐츠 실험실." };
        }
        return parsed;
      }
    } catch (e) {
      console.error('Failed to load portfolio data from localStorage sync init', e);
    }
    return INITIAL_PORTFOLIO_DATA;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_SESSION_KEY) === 'true';
  });

  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Load persisted data on mount (including IndexedDB stored Hero video)
  useEffect(() => {
    let isMounted = true;
    loadPersistedData().then((saved) => {
      if (isMounted && saved) {
        if (!saved.hero?.videoBackgroundUrl || saved.hero.videoBackgroundUrl.trim() === '') {
          saved.hero = { ...saved.hero, videoBackgroundUrl: '/assets/intro.mp4' };
        }
        if (!saved.personalYoutube?.description || saved.personalYoutube.description === "독학 PD의 솔직한 영상 제작기 및 예능 실험실. 기획부터 100만 뷰 달성까지의 과정 공개") {
          saved.personalYoutube = { ...saved.personalYoutube, description: "기획부터 촬영, 편집까지. 혼자 만드는 예능 콘텐츠 실험실." };
        }
        setData(saved);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Save data to IndexedDB & localStorage whenever data changes
  useEffect(() => {
    savePersistedData(data);
  }, [data]);

  const openAdminModal = () => setAdminModalOpen(true);
  const closeAdminModal = () => setAdminModalOpen(false);

  const loginAdmin = (password: string): boolean => {
    if (password === '3794') {
      setIsAdmin(true);
      localStorage.setItem(ADMIN_SESSION_KEY, 'true');
      setAdminModalOpen(false);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem(ADMIN_SESSION_KEY);
  };

  const updateData = (updater: (prev: PortfolioData) => PortfolioData) => {
    setData((prev) => updater(prev));
  };

  const resetToDefaults = () => {
    if (window.confirm('모든 데이터를 초기 포트폴리오 상태로 리셋하시겠습니까?')) {
      setData(INITIAL_PORTFOLIO_DATA);
      clearPersistedData();
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        isAdmin,
        adminModalOpen,
        openAdminModal,
        closeAdminModal,
        loginAdmin,
        logoutAdmin,
        updateData,
        resetToDefaults,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
