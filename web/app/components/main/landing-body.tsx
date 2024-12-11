export default function LandingBody() {
  return (
    <>
      <section className='flex flex-col items-center gap-8 py-12 px-4'>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          <h1 className='text-5xl min-h-[70px] md:text-6xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            {/* 创造独特的数字头像 */}
            Create Your Unique
          </h1>
          <span className='text-5xl min-h-[70px] md:text-6xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block overflow-hidden w-0 animate-typing whitespace-nowrap border-r-4 border-r-purple-600 [--typing-width:11ch] pb-2 leading-tight'>
            Digital Avatar
          </span>
        </div>

        <p className='text-xl text-center text-gray-600 max-w-2xl'>
          {/* 使用我们的AI驱动的头像生成器，设计属于你的个性化头像。
          添加缤纷色彩，展现独特风格。 */}
          Design your personalized avatar with our AI-powered avatar generator.
          Add vibrant colors to express your unique style.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
          <div className='bg-white p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-semibold mb-4'>
              {/* 生成头像 */}
              Generate Avatar
            </h2>
            <p className='text-gray-600'>
              {/* 只需几秒钟，即可创建独特的数字化身。
              支持多种风格，让你的头像与众不同。 */}
              Create your unique digital persona in seconds. Multiple styles
              available to make your avatar stand out.
            </p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-semibold mb-4'>
              {/* 个性化涂色 */}
              Personalized Coloring
            </h2>
            <p className='text-gray-600'>
              {/* 发挥创意，为你的头像添加独特配色。 丰富的调色板，让创作更加自由。 */}
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
    </>
  )
}
