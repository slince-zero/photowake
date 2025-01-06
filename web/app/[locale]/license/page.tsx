import React from 'react'
import Header from '../../components/header/header-bar'
import Footer from '../../components/footer/footer'

const LicensePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-grow bg-white dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              MIT License
            </h1>

            <div className='space-y-4 text-gray-600 dark:text-gray-300'>
              <p className='font-semibold'>Copyright (c) 2024 PhotoWake</p>

              <p className='leading-relaxed'>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the &quot;Software&quot;), to deal in the Software
                without restriction, including without limitation the rights to
                use, copy, modify, merge, publish, distribute, sublicense,
                and/or sell copies of the Software, and to permit persons to
                whom the Software is furnished to do so, subject to the
                following conditions:
              </p>

              <p className='leading-relaxed'>
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>

              <p className='leading-relaxed'>
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
                ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
                AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default LicensePage
