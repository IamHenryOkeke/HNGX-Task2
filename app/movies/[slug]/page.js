import { getMovieData } from "@/api/DataFetch"
import Image from "next/image";
import Sidebar from "../../assets/images/Group.png"

export default async function Movie({params}) {
    const id = params.slug
    const data = await getMovieData(id);
    return (
        <main className="flex items-center text-center">
            <Image src={Sidebar} alt="Side bar" width={200} height={50}/>
            <div className="w-[70%]">
                <img className='w-[20%] rounded-t-lg mx-auto' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                <p data-testid="movie-title" className='font-bold text-lg my-1'>{data.title}</p>
                <div className='flex gap-2 font-medium'>
                    <p data-testid="movie-runtime">{data.runtime}</p>
                    <p>minutes</p>
                </div>
                <p className="font-medium" data-testid="movie-overview">{data.overview}</p>
                <div className='flex gap-2 font-medium'>
                    <p>Release date: </p>
                    <p data-testid = "movie-release-date">{data.release_date}</p>
                </div>
            </div>
        </main>
    )
}
