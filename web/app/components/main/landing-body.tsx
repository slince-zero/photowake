'use client'

import ReviewCard from './review-card'
import { Check } from 'lucide-react'
import JSConfetti from 'js-confetti'
import { useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

export default function LandingBody() {
  const confettiRef = useRef<HTMLCanvasElement>(null)
  const [activeTab, setActiveTab] = useState('Style')
  const t = useTranslations('LandingBody')
  const locale = useLocale()

  const handleCreateAvatar = () => {
    if (confettiRef.current) {
      const canvas = confettiRef.current
      const jsConfetti = new JSConfetti({ canvas })
      jsConfetti.addConfetti({
        confettiColors: [
          '#ff0000',
          '#ffa500',
          '#ffff00',
          '#008000',
          '#0000ff',
          '#4b0082',
          '#ee82ee',
        ],
        confettiNumber: 100,
      })
    }
  }

  // Tab content components
  const TabContent = {
    Style: (
      <div className='space-y-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {[
            'Anime',
            'Realistic',
            'Cartoon',
            'Pixel Art',
            'Sketch',
            'Paint',
          ].map((style) => (
            <button
              key={style}
              className='px-4 py-2 rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
            >
              {style}
            </button>
          ))}
        </div>
      </div>
    ),

    Face: (
      <div className='space-y-6'>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Skin Tone
          </label>
          <div className='flex gap-2'>
            {[
              '#FFDBB4',
              '#EDB98A',
              '#D08B5B',
              '#AE5D29',
              '#694D3D',
              '#452B1F',
            ].map((color) => (
              <button
                key={color}
                className='w-8 h-8 rounded-full border-2 border-white dark:border-zinc-700 hover:scale-110 transition-transform'
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Face Shape
          </label>
          <div className='grid grid-cols-2 gap-2'>
            {['Round', 'Oval', 'Square', 'Heart'].map((shape) => (
              <button
                key={shape}
                className='px-3 py-2 text-sm rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
              >
                {shape}
              </button>
            ))}
          </div>
        </div>
      </div>
    ),

    Hair: (
      <div className='space-y-6'>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Hair Style
          </label>
          <div className='grid grid-cols-2 gap-2'>
            {['Short', 'Long', 'Curly', 'Wavy', 'Straight', 'Bald'].map(
              (style) => (
                <button
                  key={style}
                  className='px-3 py-2 text-sm rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
                >
                  {style}
                </button>
              )
            )}
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Hair Color
          </label>
          <div className='flex gap-2'>
            {[
              '#000000',
              '#4A3319',
              '#B87A3D',
              '#F2C035',
              '#FFF345',
              '#FF0000',
            ].map((color) => (
              <button
                key={color}
                className='w-8 h-8 rounded-full border-2 border-white dark:border-zinc-700 hover:scale-110 transition-transform'
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    ),

    Eyes: (
      <div className='space-y-6'>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Eye Shape
          </label>
          <div className='grid grid-cols-2 gap-2'>
            {[
              'Round',
              'Almond',
              'Upturned',
              'Downturned',
              'Hooded',
              'Wide',
            ].map((shape) => (
              <button
                key={shape}
                className='px-3 py-2 text-sm rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
              >
                {shape}
              </button>
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Eye Color
          </label>
          <div className='flex gap-2'>
            {['#4B3621', '#82B5C3', '#86C14F', '#B5A642', '#702963'].map(
              (color) => (
                <button
                  key={color}
                  className='w-8 h-8 rounded-full border-2 border-white dark:border-zinc-700 hover:scale-110 transition-transform'
                  style={{ backgroundColor: color }}
                />
              )
            )}
          </div>
        </div>
      </div>
    ),

    Accessories: (
      <div className='space-y-6'>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Glasses
          </label>
          <div className='grid grid-cols-2 gap-2'>
            {['None', 'Round', 'Square', 'Oval'].map((type) => (
              <button
                key={type}
                className='px-3 py-2 text-sm rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Other
          </label>
          <div className='grid grid-cols-2 gap-2'>
            {['Earrings', 'Necklace', 'Hat', 'None'].map((item) => (
              <button
                key={item}
                className='px-3 py-2 text-sm rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    ),
  }

  return (
    <>
      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          <h1 className='text-5xl min-h-[70px] md:text-6xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            {t('Create Your Unique')}
          </h1>
          <h1>testssss</h1>
          <span
            className={`text-4xl md:min-h-[70px] max-h-[60px] md:text-6xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block overflow-hidden w-0 animate-typing whitespace-nowrap border-r-4 border-r-purple-600 pb-2 leading-tight ${
              locale === 'zh'
                ? '[--typing-width:6.4ch]'
                : '[--typing-width:10.4ch]'
            }`}
          >
            {t('Digital Avatar')}
          </span>
        </div>

        <p className='text-xl text-center max-w-2xl bg-gradient-to-r from-purple-500/80 to-pink-500/80 bg-clip-text text-transparent font-medium'>
          {t('Design your personalized')}
          {t('Add vibrant colors')}
        </p>

        <div className='grid grid-cols-1 max-w-6xl md:grid-cols-2 gap-8 mt-12'>
          <div className='group bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 hover:border-purple-200'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='p-3 bg-gradient-to-br from-purple-100 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl'>
                <svg
                  className='w-6 h-6 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                {t('Generate Avatar')}
              </h2>
            </div>
            <p className='text-gray-600 leading-relaxed'>
              {t('Create your unique digital')}
            </p>
          </div>

          <div className='group bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 hover:border-purple-200'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='p-3 bg-gradient-to-br from-purple-100 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl'>
                <svg
                  className='w-6 h-6 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600  bg-clip-text text-transparent'>
                {t('Personalized Coloring')}
              </h2>
            </div>
            <p className='text-gray-600 leading-relaxed'>
              {t('Express your creativity')}
            </p>
          </div>
        </div>

        <button className='mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xl font-semibold hover:opacity-90 transition-opacity'>
          {t('Start Creating')}
        </button>
      </section>

      <section className='flex flex-col items-center gap-8 py-12 px-4 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-zinc-950 dark:to-zinc-900'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          {t('Magical Avatar')}
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
          {/* Preview Area */}
          <div className='relative'>
            <canvas
              ref={confettiRef}
              className='absolute inset-0 w-full h-full z-10'
            />
            <div className='bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800'>
              <div className='aspect-square w-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center'>
                {/* Placeholder for avatar preview */}
                <div className='w-48 h-48 bg-gray-200 dark:bg-zinc-800 rounded-full animate-pulse'></div>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className='bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800'>
            <div className='flex flex-col h-full'>
              {/* Tabs */}
              <div className='flex space-x-4 border-b border-gray-200 dark:border-zinc-700 mb-6 scrollbar-hide overflow-x-scroll overflow-y-hidden'>
                {Object.keys(TabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-[2px] ${
                      activeTab === tab
                        ? 'text-purple-600 border-purple-600'
                        : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-purple-600 hover:border-purple-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content Area */}
              <div className='flex-1 overflow-y-auto'>
                {TabContent[activeTab as keyof typeof TabContent]}
              </div>

              {/* Generate Button */}
              <div className='pt-6 mt-auto'>
                <button
                  className='w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity'
                  onClick={handleCreateAvatar}
                >
                  {t('Create Avatar')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          {t('User Reviews')}
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ReviewCard />
        </div>
      </section>

      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          {t('Terms of Service')}
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Privacy & Security */}
          <div className='bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800'>
            <h3 className='text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4'>
              {t('Privacy & Security')}
            </h3>
            <ul className='space-y-3 text-gray-600 dark:text-gray-400'>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>{t('Your data is encrypted and securely stored')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>
                  {t(
                    'We never share your personal information with third parties'
                  )}
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>
                  {t('You maintain full ownership of your created avatars')}
                </span>
              </li>
            </ul>
          </div>

          {/* Usage Rights */}
          <div className='bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800'>
            <h3 className='text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4'>
              {t('Usage Rights')}
            </h3>
            <ul className='space-y-3 text-gray-600 dark:text-gray-400'>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>
                  {t('Commercial use allowed with Pro and Enterprise plans')}
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>{t('Attribution not required for personal use')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>
                  {t('Unlimited modifications to your generated avatars')}
                </span>
              </li>
            </ul>
          </div>

          {/* Service Limitations */}
          <div className='bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800'>
            <h3 className='text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4'>
              {t('Service Limitations')}
            </h3>
            <ul className='space-y-3 text-gray-600 dark:text-gray-400'>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>{t('Fair usage policy applies to all plans')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>{t('Generation limits based on subscription tier')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>
                  {t('Service availability subject to maintenance windows')}
                </span>
              </li>
            </ul>
          </div>

          {/* Account Terms */}
          <div className='bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800'>
            <h3 className='text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4'>
              {t('Account Terms')}
            </h3>
            <ul className='space-y-3 text-gray-600 dark:text-gray-400'>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>{t('One account per user required')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>{t('Account sharing is not permitted')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                <span>{t('Age restriction: 18 years or older')}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className='text-sm text-gray-500 dark:text-gray-400 max-w-2xl text-center mt-6'>
          {/* By using our service, you agree to these terms and conditions. We
          reserve the right to modify these terms at any time. Please review
          them periodically for changes. */}
        </p>
      </section>
    </>
  )
}
