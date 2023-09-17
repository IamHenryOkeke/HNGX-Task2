"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import IMBd from "../assets/svg/IMDb.svg"
import Tomato from "../assets/svg/RottenTomato.svg"

export default function Movies() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            setError(false);
            try {
                const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3cec110d6cb7f690c339534ccbfe3696", {
                    next: {
                        revalidate: 0
                    }
                })
                const data = await res.json()
                setData(data.results.slice(0,10))
                setLoading(false)
                
            } catch (error) {
              console.log(error)
              setError(true)
              setLoading(false)
            } 
        }
        getData();
    }, [])
    return (
        <div className='grid md:grid-cols-4 gap-5'>
            {
                loading && <div className='text-center text-4xl'>Loading .....</div>
            }
          {
            data.map((movie) => (
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
                <p data-testid = "movie-release-date">{movie.release_date}</p>
              </div>
            ))
          }
          {
            error && <div>Not found.Please check your internet and try again</div>
          }
        </div>
    )
}
