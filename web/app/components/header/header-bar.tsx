'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import cn from 'classnames'
import { MoonStar, Sun, Github } from 'lucide-react'
import { useTheme } from 'next-themes'
import { getTest } from '@/app/api/test'
import Image from 'next/image'
import Link from 'next/link'

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

  const handleTest = async () => {
    const data = await getTest()
    console.log(data, 'from backend')
  }

  return (
    <>
      {/* 移动端导航栏 */}
      <div
        className={cn(
          'md:hidden w-full min-h-16 h-full flex justify-between items-center',
          isOpen ? 'dark:border-zinc-700' : ''
        )}
      >
        <div className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='Logo'
            priority={true}
            width={40}
            height={40}
            onClick={handleTest}
          />
          <span className='text-xs font-semibold from-purple-600 to-pink-600 bg-gradient-to-r bg-clip-text text-transparent'>
            PhotoWaker
          </span>
        </div>
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
              'w-4 h-[2px] bg-black dark:bg-white transition-transform duration-300 ease-in-out ',
              isOpen
                ? '-rotate-45 origin-left translate-x-0'
                : 'group-hover:translate-x-2'
            )}
          ></span>
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      <div
        className={cn(
          'absolute top-14 left-0 w-full h-screen bg-white dark:bg-zinc-900 transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <ul className='flex flex-col max-w-[288px] mx-auto p-4 gap-4'>
          <li className='w-full'>
            <span className='block w-full py-2 border-b dark:border-b-zinc-700'>
              Icon
            </span>
          </li>
          <li className='w-full'>
            <span className='block w-full py-2 border-b dark:border-b-zinc-700'>
              Guide
            </span>
          </li>
          <li className='w-full'>
            <span className='block w-full py-2 border-b dark:border-b-zinc-700'>
              Packages
            </span>
          </li>
          <li className='w-full'>
            <span className='block w-full py-2 border-b dark:border-b-zinc-700'>
              Showcase
            </span>
          </li>
          <li className='w-full'>
            <span className='block w-full py-2 border-b dark:border-b-zinc-700'>
              License
            </span>
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
                    ? 'translate-x-6 transition-all duration-300 ease-in-out'
                    : 'translate-x-0 transition-all duration-300 ease-in-out'
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
            <Link
              href='https://github.com/slince-zero/PhotoWake'
              target='_blank'
            >
              <Github />
            </Link>
          </li>
        </ul>
      </div>

      {/* PC 导航栏 */}
      <div className='hidden md:flex w-full h-16 px-6 items-center justify-between'>
        {/* Logo 区域 */}
        <div className='flex items-center gap-2'>
          {resolvedTheme === 'dark' ? (
            <Image
              src='/logo-dark.png'
              alt='Logo'
              width={100}
              height={100}
              style={{ height: 'auto', width: 'auto' }}
            />
          ) : (
            <Image
              src='/logo-white.png'
              alt='Logo'
              width={100}
              height={100}
              style={{ height: 'auto', width: 'auto' }}
            />
          )}
        </div>

        <div className='items-center gap-4 hidden md:flex mr-4'>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </>
  )
}
