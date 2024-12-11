import ReviewCard from './review-card'
import { Check } from 'lucide-react'
export default function LandingBody() {
  return (
    <>
      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          <h1 className='text-5xl min-h-[70px] md:text-6xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            {/* 创造独特的数字头像 */}
            Create Your Unique
          </h1>
          <span className='text-4xl md:min-h-[70px] max-h-[60px] md:text-6xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block overflow-hidden w-0 animate-typing whitespace-nowrap border-r-4 border-r-purple-600 [--typing-width:11ch] pb-2 leading-tight'>
            Digital Avatar
          </span>
        </div>

        <p className='text-xl text-center max-w-2xl bg-gradient-to-r from-purple-500/80 to-pink-500/80 bg-clip-text text-transparent font-medium'>
          Design your personalized avatar with our AI-powered avatar generator.
          Add vibrant colors to express your unique style.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
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
                Generate Avatar
              </h2>
            </div>
            <p className='text-gray-600 leading-relaxed'>
              Create your unique digital persona in seconds. Multiple styles
              available to make your avatar stand out.
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
                Personalized Coloring
              </h2>
            </div>
            <p className='text-gray-600 leading-relaxed'>
              Express your creativity by adding unique colors to your avatar.
              Rich color palette for unlimited creative freedom.
            </p>
          </div>
        </div>

        <button className='mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xl font-semibold hover:opacity-90 transition-opacity'>
          {/* 开始创作 */}
          Start Creating
        </button>
      </section>

      <section className='flex flex-col items-center gap-8 py-12 px-4 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-zinc-950 dark:to-zinc-900'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          Magical Avatar
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
          {/* Preview Area */}
          <div className='bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800'>
            <div className='aspect-square w-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center'>
              {/* Placeholder for avatar preview */}
              <div className='w-48 h-48 bg-gray-200 dark:bg-zinc-800 rounded-full animate-pulse'></div>
            </div>
          </div>

          {/* Control Panel */}
          <div className='bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800'>
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                  Style Options
                </h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                  {/* Style option buttons */}
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

              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                  Generate
                </h3>
                <button className='w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity'>
                  Create Avatar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          Pricing Plans
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Free Plan */}
          <div className='bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-800 hover:border-purple-200 transition-all duration-300'>
            <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
              Free
            </h3>
            <p className='text-4xl font-bold text-purple-600 mb-6'>$0</p>
            <ul className='space-y-3 mb-8'>
              <li className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Check className='w-5 h-5 text-green-500' />5 Avatars per month
              </li>
              <li className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Check className='w-5 h-5 text-green-500' />
                Basic styles
              </li>
            </ul>
            <button className='w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors'>
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className='bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl shadow-md border border-purple-200 dark:border-purple-800 hover:border-purple-300 transition-all duration-300'>
            <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
              Pro
            </h3>
            <p className='text-4xl font-bold text-purple-600 mb-6'>
              $9.99<span className='text-base font-normal'>/month</span>
            </p>
            <ul className='space-y-3 mb-8'>
              <li className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Check className='w-5 h-5 text-green-500' />
                Unlimited avatars
              </li>
              <li className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Check className='w-5 h-5 text-green-500' />
                All styles included
              </li>
              <li className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Check className='w-5 h-5 text-green-500' />
                Priority generation
              </li>
            </ul>
            <button className='w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity'>
              Upgrade to Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className='bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-800 hover:border-purple-200 transition-all duration-300'>
            <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
              Enterprise
            </h3>
            <p className='text-4xl font-bold text-purple-600 mb-6'>Custom</p>
            <ul className='space-y-3 mb-8'>
              <li className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Check className='w-5 h-5 text-green-500' />
                Custom integration
              </li>
              <li className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Check className='w-5 h-5 text-green-500' />
                Dedicated support
              </li>
              <li className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Check className='w-5 h-5 text-green-500' />
                SLA guarantee
              </li>
            </ul>
            <button className='w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors'>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-[1px]'>
          User Reviews
        </h2>

        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ReviewCard />
        </div>
      </section>
    </>
  )
}
