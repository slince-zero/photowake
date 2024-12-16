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
        className='px-4 py-2 rounded-full ring-1 ring-gray-200 dark:ring-zinc-800'
        onClick={toggleDropdown}
      >
        <Languages />
      </button>
      {isOpen && <Dropdown currentLang={language} />}
    </div>
  )
}
