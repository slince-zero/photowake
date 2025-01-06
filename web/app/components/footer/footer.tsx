'use client'

import React from 'react'
import { useLanguageStore } from '@/app/store/useLanguageStore'

const Footer = () => {
  const currentLang = useLanguageStore((state) => state.currentLang)

  return (
    <div className='container mx-auto h-full flex flex-col items-center justify-center gap-2'>
      <div className='flex items-center gap-8 text-gray-600'>
        <a
          href={`/${currentLang}/license`}
          className='hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
        >
          License
        </a>
        <a
          href='https://github.com/slince-zero/PhotoWake'
          className='hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1'
          target='_blank'
        >
          GitHub
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
            />
          </svg>
        </a>
      </div>
      <div className='text-sm text-gray-600 flex flex-col items-center justify-center'>
        <p>Released under the MIT License.</p>
        <p className='mt-2'>
          Copyright © {new Date().getFullYear()} PhotoWake
        </p>
      </div>
    </div>
  )
}

export default Footer
