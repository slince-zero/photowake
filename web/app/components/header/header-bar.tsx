'use client'

import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import cn from 'classnames'
export default function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenDropdownHaderBar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {/* 移动端导航栏 */}
      <div className='sm:hidden w-full h-full flex flex-row-reverse items-center'>
        <button
          className='flex flex-col group items-center justify-center gap-1 overflow-hidden'
          onClick={handleOpenDropdownHaderBar}
        >
          <span
            className={cn(
              'w-4 h-[2px] bg-black transition-transform duration-300 ease-in-out ',
              isOpen ? 'rotate-45 origin-left translate-x-0' : 'group-hover:translate-x-1'
            )}
          ></span>
          <span
            className={cn(
              'w-4 h-[2px] bg-black transition-transform duration-300 ease-in-out ',
              isOpen ? 'translate-x-4' : 'translate-x-2 group-hover:translate-x-0'
            )}
          ></span>
          <span
            className={cn(
              'w-4 h-[2px] bg-black translate-x-1 transition-transform duration-300 ease-in-out ',
              isOpen ? '-rotate-45 origin-left translate-x-0' : 'group-hover:translate-x-2'
            )}
          ></span>
        </button>
      </div>

      {/* PC 导航栏 */}
      <div className='hidden sm:flex left-0 right-0 mt-4 gap-8 items-center fixed justify-center'>
        <div className='flex-1' />
        <div className='flex-1'>
          <nav>
            <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
              <li>
                <a
                  className='relative block px-3 py-2 transition text-cyan-500 dark:text-cyan-400'
                  href='/'
                >
                  Home
                  <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 dark:from-cyan-400/0 dark:via-cyan-400/40 dark:to-cyan-400/0'></span>
                </a>
              </li>
              <li>
                <a
                  className='relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400'
                  href='#'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className='relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400'
                  href='#'
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  className='relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400'
                  href='#'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className='relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400'
                  href='#'
                >
                  Uses
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex-1'>
          <ThemeToggle />
        </div>
        <div className='flex-1'>
          <LanguageToggle />
        </div>
      </div>
    </>
  )
}
