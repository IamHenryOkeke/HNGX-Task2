import Header from './components/Header'
import Footer from './components/Footer'
import { getFeaturedMovies } from '@/api/DataFetch'
import Image from 'next/image'
import SeeMore from "./assets/svg/SeeMore.svg"
import Link from 'next/link'



async function getData() {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3cec110d6cb7f690c339534ccbfe3696')
  const data = await res.json()
  console.log(data.results)
  return data.results
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <Header/>
      <section className='md:px-24 md:py-10'>
        <div className='flex items-center justify-between my-4'>
          <h1 className='text-4xl font-bold'>Feature Movie</h1>
          <div className='flex items-center gap-5 text-rose-700 text-lg'>
            <p>See more</p>
            <Image src={SeeMore} alt='Left' width={10} height={10} />
          </div>
        </div>
        <div className='grid grid-cols-4 gap-5'>
          {
            data.slice(0,12)?.map((movie) => (
              <div key={movie.id} data-testid = "movie-card" className='rounded-lg'>
                <img className='w-[80%] rounded-t-lg' data-testid = "movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" />
                <Link href={`/movie/${movie.id}`}>
                  <p className='font-bold text-lg my-1' data-testid = "movie-title">{movie.title}</p>
                </Link>
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
