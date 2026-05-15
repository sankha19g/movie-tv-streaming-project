import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { getTrendingMovies, type Movie } from "@/services/tmdb"
import { getPopularMovies } from "@/services/tmdb"
import { getPopularTVShows } from "@/services/tmdb"
import { HomeheroBanner } from "@/components/homeherobanner"
import { getindianMovies } from "@/services/tmdb"
import { getindianTV } from "@/services/tmdb"






export function Home() {
  
const [movies, setMovies] = useState<Movie[]>([])
const [popularMovies, setPopularMovies] = useState<Movie[]>([])
const [PopularTVShows, setPopularTVShows] = useState<Movie[]>([])
const [Indianpopular, setIndianpopular] = useState<Movie[]>([])
const [IndianpopularTV, setIndianpopularTV] = useState<Movie[]>([])

   useEffect(() => {

    async function fetchMovies() {
       const trendingData = await getTrendingMovies()
    setMovies(trendingData)

    const popularMovieData = await getPopularMovies()
    setPopularMovies(popularMovieData)

     const popularTVData = await getPopularTVShows()
    setPopularTVShows(popularTVData)
    
    const indiandata = await getindianMovies()
    setIndianpopular(indiandata)

    const indianTVdata = await getindianTV()
    setIndianpopularTV(indianTVdata)
    }

    fetchMovies()

  }, [])


return (
    <div className="pt-24 text-white">
      {/* <div className="h-50 bg-blue-900">Hero Banner</div> */}
      <HomeheroBanner movies={movies} />
      <div className="h-screen ">
<div className="my-5 text-2xl font-bold">Top trending</div>
<div className="flex flex-row">
 
   <div className="flex gap-5 overflow-x-auto pb-5">

          {movies.map((movie) => (

            <div
              key={movie.id}
              className="min-w-[200px] rounded-xl bg-zinc-900 p-3 transition hover:scale-105"
            >
 <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mb-3 h-72 w-full rounded-lg object-cover"
              />
              </Link>

              <h3 className="line-clamp-1 text-lg font-semibold">
                {movie.title}
              </h3>

              <p className="text-sm text-zinc-400">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>

            </div>
          ))}
        </div>
</div>
<div className=" my-5 text-2xl font-bold">Popular Movies</div>
<div className="flex flex-row">
   <div className="flex gap-5 overflow-x-auto pb-5">

          {popularMovies.map((movie) => (

            <div
              key={movie.id}
              className="min-w-[200px] rounded-xl bg-zinc-900 p-3 transition hover:scale-105"
            >
 <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mb-3 h-72 w-full rounded-lg object-cover"
              />
              </Link>

              <h3 className="line-clamp-1 text-lg font-semibold">
                {movie.title}
              </h3>

              <p className="text-sm text-zinc-400">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>

            </div>
          ))}
        </div>
</div>
<div className="my-5 text-2xl font-bold">Popular TV Shows</div>
<div className="flex flex-row">
   <div className="flex gap-5 overflow-x-auto pb-5">

          {PopularTVShows.map((movie) => (

            <div
              key={movie.id}
              className="min-w-[200px] rounded-xl bg-zinc-900 p-3 transition hover:scale-105"
            >
<Link to={`/tv/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mb-3 h-72 w-full rounded-lg object-cover"
              />
</Link>
              <h3 className="line-clamp-1 text-lg font-semibold">
                {movie.title}
              </h3>

              <p className="text-sm text-zinc-400">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>

            </div>
          ))}
        </div>
</div>
<div className="my-5 text-2xl font-bold">Indian Movies</div>
<div className="flex flex-row">
   <div className="flex gap-5 overflow-x-auto pb-5">

          {Indianpopular.map((movie) => (

            <div
              key={movie.id}
              className="min-w-[200px] rounded-xl bg-zinc-900 p-3 transition hover:scale-105"
            >
<Link to={`/movie/${movie.id}`}>

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mb-3 h-72 w-full rounded-lg object-cover"
              />
</Link>
              <h3 className="line-clamp-1 text-lg font-semibold">
                {movie.title}
              </h3>

              <p className="text-sm text-zinc-400">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>

            </div>
          ))}
        </div>
</div>

<div className="my-5 text-2xl font-bold">Indian TV Shows</div>
<div className="flex flex-row">
   <div className="flex gap-5 overflow-x-auto pb-5">

          {IndianpopularTV.map((movie) => (

            <div
              key={movie.id}
              className="min-w-[200px] rounded-xl bg-zinc-900 p-3 transition hover:scale-105"
            >
<Link to={`/tv/${movie.id}`}>

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mb-3 h-72 w-full rounded-lg object-cover"
              />
</Link>
              <h3 className="line-clamp-1 text-lg font-semibold">
                {movie.title}
              </h3>

              <p className="text-sm text-zinc-400">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>

            </div>
          ))}
        </div>
</div>

      </div>
    </div>
  )
}