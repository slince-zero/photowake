'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import cn from 'classnames'
import { MoonStar, Sun, Github } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const handleOpenDropdownHaderBar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    // 打开下拉菜单时，禁止滚动
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleResize = () => {
      // tailwind 的 md 断点
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])
  return (
    <>
      {/* 移动端导航栏 */}
      <div
        className={cn(
          'md:hidden w-full h-full flex flex-row-reverse items-center',
          isOpen ? 'border-b dark:border-zinc-700' : ''
        )}
      >
        <button
          className='flex flex-col group items-center justify-center gap-1 overflow-hidden'
          onClick={handleOpenDropdownHaderBar}
        >
          <span
            className={cn(
              'w-4 h-[2px] bg-black dark:bg-white transition-transform duration-300 ease-in-out ',
              isOpen
                ? 'rotate-45 origin-left translate-x-0'
                : 'group-hover:translate-x-1'
            )}
          ></span>
          <span
            className={cn(
              'w-4 h-[2px] bg-black dark:bg-white transition-transform duration-300 ease-in-out ',
              isOpen
                ? 'translate-x-4'
                : 'translate-x-2 group-hover:translate-x-0'
            )}
          ></span>
          <span
            className={cn(
              'w-4 h-[2px] bg-black dark:bg-white translate-x-1 transition-transform duration-300 ease-in-out ',
              isOpen
                ? '-rotate-45 origin-left translate-x-0'
                : 'group-hover:translate-x-2'
            )}
          ></span>
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full h-full bg-white dark:bg-zinc-900 shadow-md'>
          <ul className='flex flex-col max-w-[288px] mx-auto p-4 gap-4'>
            <li className='w-full'>
              <a
                href='/'
                className='block w-full py-2 border-b dark:border-b-zinc-700'
              >
                Icon
              </a>
            </li>
            <li className='w-full'>
              <a
                href='#'
                className='block w-full py-2 border-b dark:border-b-zinc-700'
              >
                Guide
              </a>
            </li>
            <li className='w-full'>
              <a
                href='#'
                className='block w-full py-2 border-b dark:border-b-zinc-700'
              >
                Packages
              </a>
            </li>
            <li className='w-full'>
              <a
                href='#'
                className='block w-full py-2 border-b dark:border-b-zinc-700'
              >
                Showcase
              </a>
            </li>
            <li className='w-full'>
              <a
                href='#'
                className='block w-full py-2 border-b dark:border-b-zinc-700'
              >
                License
              </a>
            </li>
            <li className='flex justify-between items-center w-full mt-4 px-4 py-4 bg-gray-100 dark:bg-zinc-800 rounded'>
              <p className='text-sm text-gray-500'>Appearance</p>
              <button
                type='button'
                role='switch'
                aria-checked={resolvedTheme === 'dark'}
                title='switch appearance'
                className='relative rounded-full w-12 h-6 border dark:border-zinc-700 bg-gray-300 dark:bg-zinc-900 transition-all duration-300 ease-in-out hover:ring-1 hover:ring-orange-500'
                onClick={() =>
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
              >
                <span
                  className={cn(
                    'absolute top-[0.5px] left-[1px] flex items-center justify-center w-5 h-5 bg-white dark:bg-zinc-700 rounded-full ',
                    // 切换主题时，状态更新不同步
                    resolvedTheme === 'dark'
                      ? 'translate-x-6 transition-all duration-200 ease-in-out'
                      : 'translate-x-0 transition-all duration-200 ease-in-out'
                  )}
                >
                  <span className='absolute left-[1px] top-[1px] flex items-center justify-center w-5 h-5 bg-white dark:bg-zinc-700 rounded-full transition-all duration-300'>
                    <Sun className='w-3.5 h-3.5 text-yellow-500 opacity-100 dark:opacity-0 transition-opacity' />
                    <MoonStar className='w-3.5 h-3.5 text-gray-300 absolute opacity-0 dark:opacity-100 transition-opacity' />
                  </span>
                </span>
              </button>
            </li>
            <li className='flex items-center justify-center'>
              <a
                href='https://github.com/slince-zero/PhotoWake'
                target='_blank'
              >
                <Github />
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* PC 导航栏 */}
      <div className='hidden md:flex w-full max-w-6xl mx-auto mt-4 px-6 items-center fixed left-1/2 -translate-x-1/2'>
        {/* Logo 区域 */}
        <div className='w-32'></div>

        <div className='flex-1 flex justify-center'>
          <nav>
            <ul>
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
            </ul>
          </nav>
        </div>

        <div className='items-center gap-4 hidden md:flex'>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </>
  )
}
