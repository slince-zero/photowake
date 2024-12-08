import { Languages } from 'lucide-react'

export function LanguageToggle() {
  return (
    <button
      type='button'
      className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
    >
      <Languages />
    </button>
  )
}
