'use client'

import ReviewCard from './review-card'
import { Check } from 'lucide-react'
import JSConfetti from 'js-confetti'
import { useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import TabContent from './tab-content'
import {
  WIDGET_STYLES,
  DEFAULT_AVATAR,
  HAIR_COLORS,
  WIDGET_PATHS,
} from '@/app/constants/avatar-config'
import { SelectedWidgets } from '@/app/types/avatar'

export default function LandingBody() {
  const confettiRef = useRef<HTMLCanvasElement>(null)
  const [activeTab, setActiveTab] = useState('Style')
  const [selectedWidgets, setSelectedWidgets] =
    useState<SelectedWidgets>(DEFAULT_AVATAR)
  const [hairColor, setHairColor] = useState(HAIR_COLORS[0].value)
  const t = useTranslations('LandingBody')
  const locale = useLocale()

  const handleWidgetSelect = (type: keyof SelectedWidgets, path: string) => {
    setSelectedWidgets((prev) => ({
      ...prev,
      [type]: path === prev[type] ? undefined : path,
    }))
  }

  const handleClearWidget = (type: keyof SelectedWidgets) => {
    setSelectedWidgets((prev) => ({
      ...prev,
      [type]: undefined,
    }))
  }

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

  const handleRandomAvatar = () => {
    const randomPick = <T,>(arr: readonly T[]): T =>
      arr[Math.floor(Math.random() * arr.length)]

    setSelectedWidgets({
      face: randomPick(WIDGET_PATHS.face),
      eyes: randomPick(WIDGET_PATHS.eyes),
      eyebrows: randomPick(WIDGET_PATHS.eyebrows),
      nose: randomPick(WIDGET_PATHS.nose),
      mouth: randomPick(WIDGET_PATHS.mouth),
      ears: randomPick(WIDGET_PATHS.ears),
      hair: randomPick(WIDGET_PATHS.hair),
    })

    setHairColor(randomPick(HAIR_COLORS).value)
  }

  const tabs = [
    'Style',
    'Face',
    'Eyes',
    'Eyebrows',
    'Nose',
    'Mouth',
    'Ears',
    'Hair',
    'Accessories',
  ]

  return (
    <>
      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        {/* Hero Section */}
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          <h1 className='text-5xl min-h-[70px] md:text-6xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            {t('Create Your Unique')}
          </h1>
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

        {/* Feature Cards */}
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
              <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
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

      {/* Avatar Creator Section */}
      <section className='flex flex-col items-center gap-8 py-12 px-4 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-zinc-950 dark:to-zinc-900 rounded-2xl'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          {t('Magical Avatar')}
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
          {/* Preview Area */}
          <div className='relative h-[500px]'>
            <canvas
              ref={confettiRef}
              className='absolute inset-0 w-full h-full pointer-events-none z-50'
            />
            <div className='flex flex-col justify-center items-center bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 h-full'>
              <div className='w-[240px] h-[240px] mx-auto dark:to-pink-900/30 rounded-xl relative'>
                <svg
                  viewBox='0 0 240 240'
                  className='w-full h-full'
                  style={{ overflow: 'visible' }}
                >
                  {Object.entries(selectedWidgets)
                    .sort(([a], [b]) => {
                      const styleA =
                        WIDGET_STYLES[a as keyof typeof WIDGET_STYLES]
                      const styleB =
                        WIDGET_STYLES[b as keyof typeof WIDGET_STYLES]
                      return styleA.zIndex - styleB.zIndex
                    })
                    .map(([type, path]) => {
                      if (!path) return null
                      const style =
                        WIDGET_STYLES[type as keyof typeof WIDGET_STYLES]
                      const isHair = type === 'hair'
                      return (
                        <g
                          key={type}
                          style={{
                            transform:
                              type === 'face'
                                ? 'translate(120px, 120px)'
                                : type === 'eyes'
                                  ? path.includes('eye_1.svg')
                                    ? 'translate(120px, 102px)'
                                    : path.includes('eye_2.svg')
                                      ? 'translate(120px, 102px) scale(1.2)'
                                      : path.includes('eye_3.svg')
                                        ? 'translate(120px, 102px) scale(1.2)'
                                        : 'translate(120px, 102px)'
                                  : type === 'nose'
                                    ? path.includes('nose_1.svg')
                                      ? 'translate(120px, 120px) scale(1.5)'
                                      : path.includes('nose_2.svg')
                                        ? 'translate(120px, 120px) scale(1.5)'
                                        : path.includes('nose_3.svg')
                                          ? 'translate(120px, 120px)'
                                          : 'translate(120px, 120px)'
                                    : type === 'eyebrows'
                                      ? path.includes('eyebrow_1.svg')
                                        ? 'translate(120px, 80px)'
                                        : path.includes('eyebrow_2.svg')
                                          ? 'translate(120px, 80px) scale(1.5)'
                                          : path.includes('eyebrow_3.svg')
                                            ? 'translate(120px, 80px) scale(1.2)'
                                            : 'translate(120px, 80px)'
                                      : type === 'ears'
                                        ? 'translate(120px, 120px)'
                                        : type === 'mouth'
                                          ? path.includes('mouth_2.svg')
                                            ? 'translate(132px, 155px)'
                                            : 'translate(120px, 153px)'
                                          : type === 'hair'
                                            ? path.includes('hair_1.svg')
                                              ? 'translate(106px, 0px)'
                                              : path.includes('hair_2.svg')
                                                ? 'translate(116px, 25px) scale(0.8)'
                                                : path.includes('hair_3.svg')
                                                  ? 'translate(112px, 60px)'
                                                  : 'translate(120px, 40px)'
                                            : '',
                            zIndex: style.zIndex,
                          }}
                        >
                          {isHair ? (
                            <foreignObject
                              x={-(style.width / 2)}
                              y={-(style.height / 2)}
                              width='100%'
                              height='100%'
                            >
                              <div
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  backgroundColor: hairColor,
                                  WebkitMaskImage: `url(${path})`,
                                  WebkitMaskSize: 'contain',
                                  WebkitMaskRepeat: 'no-repeat',
                                  WebkitMaskPosition: 'center',
                                  maskImage: `url(${path})`,
                                  maskSize: 'contain',
                                  maskRepeat: 'no-repeat',
                                  maskPosition: 'center',
                                }}
                              />
                            </foreignObject>
                          ) : (
                            <image
                              href={path}
                              x={-(style.width / 2)}
                              y={-(style.height / 2)}
                              width={style.width}
                              height={style.height}
                              style={{
                                transformOrigin: 'center',
                              }}
                            />
                          )}
                        </g>
                      )
                    })}
                </svg>
              </div>
              <button
                onClick={handleRandomAvatar}
                className='mt-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity'
              >
                {t('Random Generate')}
              </button>
            </div>
          </div>

          {/* Control Panel */}
          <div className='bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 h-[500px]'>
            <div className='flex flex-col h-full'>
              {/* Tabs */}
              <div className='flex space-x-4 border-b border-gray-200 dark:border-zinc-700 mb-6 scrollbar-hide overflow-x-scroll overflow-y-hidden'>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap -mb-[2px] ${
                      activeTab === tab
                        ? 'text-purple-600 border-purple-600'
                        : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-purple-600 hover:border-purple-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className='flex-1 overflow-y-auto'>
                <TabContent
                  activeTab={activeTab}
                  selectedWidgets={selectedWidgets}
                  onWidgetSelect={handleWidgetSelect}
                  onWidgetClear={handleClearWidget}
                />

                {/* Hair Color Selector */}
                {activeTab === 'Hair' && selectedWidgets.hair && (
                  <div className='mt-4 p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg'>
                    <h3 className='text-sm font-medium mb-3 text-gray-700 dark:text-gray-300'>
                      {t('Hair Color')}
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {HAIR_COLORS.map((color) => (
                        <button
                          key={color.value}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${
                            hairColor === color.value
                              ? 'border-purple-600 scale-110'
                              : 'border-transparent hover:scale-105'
                          }`}
                          style={{
                            backgroundColor: color.value,
                            boxShadow:
                              hairColor === color.value
                                ? '0 0 0 2px rgba(147, 51, 234, 0.3)'
                                : 'none',
                          }}
                          onClick={() => setHairColor(color.value)}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Generate Button */}
              <div className='pt-6'>
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

      {/* Reviews Section */}
      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          {t('User Reviews')}
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ReviewCard />
        </div>
      </section>

      {/* Terms of Service Section */}
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
      </section>
    </>
  )
}
