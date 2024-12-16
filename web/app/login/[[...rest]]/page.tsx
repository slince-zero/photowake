'use client'

import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <SignIn fallbackRedirectUrl='/' />
    </div>
  )
}

export default Page
