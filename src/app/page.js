import Image from 'next/image'
import { About } from './components/About'
import { Business } from './components/Business'
import { Company } from './components/Company'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Mainvisual } from './components/Mainvisual'
import { News } from './components/News'

export default function Home() {
  return (
    <div className='bg-[#f0f0f0]'>
      <Header />
      <main>
        <Mainvisual />
        <News />
        <About />
        <Business />
        <Company />
      </main>
      <Footer />
    </div>
  )
}
