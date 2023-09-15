import Header from './components/Header'
import Footer from './components/Footer'
import { getData } from '@/api/DataFetch'
import Image from 'next/image'
import SeeMore from "./assets/svg/SeeMore.svg"
import Link from 'next/link'
import IMBd from "./assets/svg/IMDb.svg"
import Tomato from "./assets/svg/RottenTomato.svg"

export default async function Home() {
  const data = await getData();
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
        <div className='grid md:grid-cols-4 gap-5'>
          {
            data.slice(0,12)?.map((movie) => (
              <div key={movie.id} data-testid = "movie-card" className='bg-gray-300 rounded-lg py-4 flex flex-col items-center'>
                <img className='w-[90%] rounded-t-lg' data-testid = "movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" />
                <Link href={`/movie/${movie.id}`}>
                  <p className='font-bold text-lg my-1 hover:text-blue-500' data-testid = "movie-title">{movie.title}</p>
                </Link>
                <div className="flex gap-20 my-1">
                  <div className="flex gap-2 items-center">
                      <Image src={IMBd} alt="imdb icon" width={30} height={30}/>
                      <p>86.0/100</p>
                  </div>
                  <div className="flex gap-2 items-center">
                      <Image src={Tomato} alt="" width={20} height={20}/>
                      <p>97%</p>
                  </div>
                </div>
                <p data-testid = "movie-release-date">Release date: {movie.release_date}</p>
              </div>
            ))
          }
        </div>
      </section>
      
        
      <Footer/>
    </main>
  )
}
