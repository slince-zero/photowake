'use client'

import ReviewCard from './review-card'
import { Check, X } from 'lucide-react'
import JSConfetti from 'js-confetti'
import { useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

interface SelectedWidgets {
  face?: string
  eyes?: string
  eyebrows?: string
  nose?: string
  mouth?: string
  ears?: string
  hair?: string
}

export default function LandingBody() {
  const confettiRef = useRef<HTMLCanvasElement>(null)
  const [activeTab, setActiveTab] = useState('Style')
  const [selectedWidgets, setSelectedWidgets] = useState<SelectedWidgets>({})
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

  // 定义每个部件的尺寸和位置
  const widgetStyles: Record<
    keyof SelectedWidgets,
    { width: number; height: number; className: string; zIndex: number }
  > = {
    // 脸部作为基础层
    face: {
      width: 200,
      height: 240,
      className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
      zIndex: 10,
    },
    // 眼睛位置调整，确保在脸部正确位置
    eyes: {
      width: 100,
      height: 30,
      className:
        'absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2',
      zIndex: 50,
    },
    // 鼻子调整大小和位置
    nose: {
      width: 30,
      height: 30,
      className:
        'absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2',
      zIndex: 60,
    },
    // 眉毛位置和大小调整
    eyebrows: {
      width: 100,
      height: 15,
      className:
        'absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2',
      zIndex: 70,
    },
    // 头发需要覆盖头部
    hair: {
      width: 200,
      height: 240,
      className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
      zIndex: 80,
    },
    // 嘴巴大小和位置调整
    mouth: {
      width: 60,
      height: 25,
      className:
        'absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2',
      zIndex: 100,
    },
    // 耳朵位置调整
    ears: {
      width: 240,
      height: 240,
      className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
      zIndex: 102,
    },
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
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <div className='relative group'>
            <Image
              src='/widgets/face/face.svg'
              alt='Face'
              width={100}
              height={100}
              className={`cursor-pointer rounded-lg p-2 ${
                selectedWidgets.face === '/widgets/face/face.svg'
                  ? 'bg-purple-100 dark:bg-purple-900'
                  : 'hover:bg-purple-50 dark:hover:bg-purple-950'
              }`}
              onClick={() =>
                handleWidgetSelect('face', '/widgets/face/face.svg')
              }
            />
            {selectedWidgets.face && (
              <button
                onClick={() => handleClearWidget('face')}
                className='absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity'
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    ),

    Eyes: (
      <div className='space-y-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <div className='relative group'>
            <Image
              src='/widgets/eyes/eye_1.svg'
              alt='Eyes 1'
              width={100}
              height={100}
              className={`cursor-pointer rounded-lg p-2 ${
                selectedWidgets.eyes === '/widgets/eyes/eye_1.svg'
                  ? 'bg-purple-100 dark:bg-purple-900'
                  : 'hover:bg-purple-50 dark:hover:bg-purple-950'
              }`}
              onClick={() =>
                handleWidgetSelect('eyes', '/widgets/eyes/eye_1.svg')
              }
            />
            {selectedWidgets.eyes === '/widgets/eyes/eye_1.svg' && (
              <button
                onClick={() => handleClearWidget('eyes')}
                className='absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity'
              >
                <X size={14} />
              </button>
            )}
          </div>
          <div className='relative group'>
            <Image
              src='/widgets/eyes/eye_2.svg'
              alt='Eyes 2'
              width={100}
              height={100}
              className={`cursor-pointer rounded-lg p-2 ${
                selectedWidgets.eyes === '/widgets/eyes/eye_2.svg'
                  ? 'bg-purple-100 dark:bg-purple-900'
                  : 'hover:bg-purple-50 dark:hover:bg-purple-950'
              }`}
              onClick={() =>
                handleWidgetSelect('eyes', '/widgets/eyes/eye_2.svg')
              }
            />
            {selectedWidgets.eyes === '/widgets/eyes/eye_2.svg' && (
              <button
                onClick={() => handleClearWidget('eyes')}
                className='absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity'
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    ),

    Eyebrows: (
      <div className='space-y-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <Image
            src='/widgets/eyebrows/eyebrow_1.svg'
            alt='Eyebrows'
            width={100}
            height={100}
            className={`cursor-pointer rounded-lg p-2 ${
              selectedWidgets.eyebrows === '/widgets/eyebrows/eyebrow_1.svg'
                ? 'bg-purple-100 dark:bg-purple-900'
                : 'hover:bg-purple-50 dark:hover:bg-purple-950'
            }`}
            onClick={() =>
              handleWidgetSelect('eyebrows', '/widgets/eyebrows/eyebrow_1.svg')
            }
          />
        </div>
      </div>
    ),

    Ears: (
      <div className='space-y-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <Image
            src='/widgets/ears/ear.svg'
            alt='Ears'
            width={100}
            height={100}
            className={`cursor-pointer rounded-lg p-2 ${
              selectedWidgets.ears === '/widgets/ears/ear.svg'
                ? 'bg-purple-100 dark:bg-purple-900'
                : 'hover:bg-purple-50 dark:hover:bg-purple-950'
            }`}
            onClick={() => handleWidgetSelect('ears', '/widgets/ears/ear.svg')}
          />
        </div>
      </div>
    ),

    Hair: (
      <div className='space-y-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <Image
            src='/widgets/hair/hair_1.svg'
            alt='Hair'
            width={100}
            height={100}
            className={`cursor-pointer rounded-lg p-2 ${
              selectedWidgets.hair === '/widgets/hair/hair_1.svg'
                ? 'bg-purple-100 dark:bg-purple-900'
                : 'hover:bg-purple-50 dark:hover:bg-purple-950'
            }`}
            onClick={() =>
              handleWidgetSelect('hair', '/widgets/hair/hair_1.svg')
            }
          />
        </div>
      </div>
    ),

    Mouth: (
      <div className='space-y-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <Image
            src='/widgets/mouth/mouth_1.svg'
            alt='Mouth'
            width={100}
            height={100}
            className={`cursor-pointer rounded-lg p-2 ${
              selectedWidgets.mouth === '/widgets/mouth/mouth_1.svg'
                ? 'bg-purple-100 dark:bg-purple-900'
                : 'hover:bg-purple-50 dark:hover:bg-purple-950'
            }`}
            onClick={() =>
              handleWidgetSelect('mouth', '/widgets/mouth/mouth_1.svg')
            }
          />
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

      <section className='flex flex-col items-center gap-8 py-12 px-4 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-zinc-950 dark:to-zinc-900 rounded-2xl'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          {t('Magical Avatar')}
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
          {/* Preview Area */}
          <div className='relative h-[500px]'>
            <canvas
              ref={confettiRef}
              className='absolute inset-0 w-full h-full z-10'
            />
            <div className='flex flex-col justify-center items-center bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 h-full'>
              <div className='w-[240px] h-[240px] mx-auto dark:to-pink-900/30 rounded-xl relative'>
                {/* Display selected widgets */}
                {Object.entries(selectedWidgets)
                  .sort(([a], [b]) => {
                    const styleA = widgetStyles[a as keyof SelectedWidgets]
                    const styleB = widgetStyles[b as keyof SelectedWidgets]
                    return styleA.zIndex - styleB.zIndex
                  })
                  .map(([type, path]) => {
                    if (!path) return null
                    const style = widgetStyles[type as keyof SelectedWidgets]
                    return (
                      <div
                        key={type}
                        className={style.className}
                        style={{
                          zIndex: style.zIndex,
                          width: style.width,
                          height: style.height,
                          position: 'absolute',
                        }}
                      >
                        <Image
                          src={path}
                          alt={type}
                          width={style.width}
                          height={style.height}
                          className='w-full h-full object-contain'
                          priority
                        />
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className='bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 h-[500px]'>
            <div className='flex flex-col h-full'>
              {/* Tabs */}
              <div className='flex space-x-4 border-b border-gray-200 dark:border-zinc-700 mb-6 scrollbar-hide overflow-x-scroll overflow-y-hidden'>
                {Object.keys(TabContent).map((tab) => (
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

              {/* Tab Content Area - 添加滚动条 */}
              <div className='flex-1 overflow-y-auto'>
                {TabContent[activeTab as keyof typeof TabContent]}
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
