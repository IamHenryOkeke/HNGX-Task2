import Header from './components/Header'
import Footer from './components/Footer'
import Image from 'next/image'
import SeeMore from "./assets/svg/SeeMore.svg"
import Movies from './components/Movies'

export default async function Home() {
  return (
    <main>
      <Header/>
      <section className='px-4 md:px-24 md:py-10'>
        <div className='flex items-center justify-between my-4'>
          <h1 className='text-lg md:text-4xl font-bold'>Feature Movie</h1>
          <div className='flex items-center gap-5 text-rose-700 text-lg'>
            <p>See more</p>
            <Image src={SeeMore} alt='Left' width={10} height={10} />
          </div>
        </div>
        <Movies/>
      </section>
      <Footer/>
    </main>
  )
}
