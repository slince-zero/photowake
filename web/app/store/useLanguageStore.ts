'use client'
import { create } from 'zustand'

export const useLanguageStore = create<{
  currentLang: string
  setCurrentLang: (lang: string) => void
}>((set) => ({
  currentLang: 'en',
  setCurrentLang: (lang) => set({ currentLang: lang }),
}))
