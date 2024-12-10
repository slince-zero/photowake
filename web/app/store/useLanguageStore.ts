import { create } from 'zustand'

// 获取浏览器语言
const getBrowserLang = () => {
  return navigator.language
}

export const useLanguageStore = create<{
  currentLang: string
  setCurrentLang: (lang: string) => void
}>((set) => ({
  currentLang: getBrowserLang(),
  setCurrentLang: (lang) => set({ currentLang: lang }),
}))
