import { useLanguageStore } from '@/app/store/useLanguageStore'

// 定义支持的语言列表
const SUPPORTED_LANGUAGES = ['en', 'zh'] as const
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export default function Dropdown({ currentLang }: { currentLang: string }) {
  const setCurrentLang = useLanguageStore((state) => state.setCurrentLang)

  // 验证当前语言是否支持，如果不支持则使用 'en'
  const validLang = SUPPORTED_LANGUAGES.includes(
    currentLang as SupportedLanguage
  )
    ? currentLang
    : 'en'

  return (
    <div className='absolute w-24 p-2 flex flex-col gap-2 mt-2 text-lg border shadow dark:border-zinc-800 rounded-md'>
      <ul>
        <li
          className='hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded px-2 py-1'
          onClick={() => setCurrentLang('zh')}
        >
          zh {validLang === 'zh' && <span>✓</span>}
        </li>
        <li
          className='hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded px-2 py-1'
          onClick={() => setCurrentLang('en')}
        >
          en {validLang === 'en' && <span>✓</span>}
        </li>
      </ul>
    </div>
  )
}
