'use client'
import { create } from 'zustand'

// 获取浏览器语言
const getBrowserLang = () => {
  if (typeof window !== 'undefined') {
    // 获取浏览器语言，只取前两位，由 zh-CN 变为 zh
    return navigator.language.slice(0, 2)
  }
  return 'en'
}

export const useLanguageStore = create<{
  currentLang: string
  setCurrentLang: (lang: string) => void
}>((set) => ({
  currentLang: getBrowserLang(),
  setCurrentLang: (lang) => set({ currentLang: lang }),
}))
