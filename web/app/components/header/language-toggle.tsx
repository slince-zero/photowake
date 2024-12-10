'use client'

import { Languages } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Dropdown from './Dropdown'
import { useLanguageStore } from '@/app/store/useLanguageStore'

export function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const language = useLanguageStore((state) => state.currentLang)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // 点击外部关闭下拉框
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <div ref={dropdownRef} className='relative'>
      <button
        type='button'
        className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
        onClick={toggleDropdown}
      >
        <Languages />
      </button>
      {isOpen && <Dropdown currentLang={language} />}
    </div>
  )
}
