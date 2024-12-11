import LandingBody from './components/main/landing-body'
import HeaderBar from './components/header/header-bar'
import Footer from './components/footer/footer'
export default function Home() {
  return (
    <div className='w-full flex flex-col px-4'>
      <header className='h-16'>
        <HeaderBar />
      </header>
      <main className='mx-auto mt-24'>
        <LandingBody />
      </main>
      <footer className='my-10'>
        <Footer />
      </footer>
    </div>
  )
}
