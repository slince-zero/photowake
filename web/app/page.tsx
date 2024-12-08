import { ThemeToggle } from './components/header/theme-toggle'
import { LanguageToggle } from './components/header/language-toggle'
export default function Home() {
  return (
    <div className='w-full flex flex-col px-4'>
      <header className='mx-auto mt-4 flex gap-8 items-center'>
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
      </header>
    </div>
  )
}
