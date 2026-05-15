import { useEffect, useState } from "react"
import type { Movie } from "@/services/tmdb"
import { Button } from "@/components/ui/button"
import { Bookmark,CirclePlay  } from 'lucide-react';



interface HeroBannerProps {
  movies: Movie[]
}

export function HomeheroBanner({ movies }: HeroBannerProps) {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {

    if (movies.length === 0) return

    const interval = setInterval(() => {

      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      )

    }, 5000)

    return () => clearInterval(interval)

  }, [movies])

  if (movies.length === 0) {
    return null
  }

  const movie = movies[currentIndex]

  return (
    <div
      className="relative mx-5 mb-10 h-[500px] overflow-hidden rounded-2xl bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-10">
<div className="flex flex-row gap-2 items-center ">
<Button variant="outline" className="w-30 my-3 hover:bg-red-500">Watch Now <CirclePlay /></Button>
<Bookmark />

</div>
        <h1 className="mb-4 max-w-2xl text-5xl font-bold text-white">
          {movie.title} 
        </h1>

        <p className="max-w-2xl text-zinc-300 line-clamp-3">
          {movie.overview}
        </p>
<p className="text-lg text-zinc-400">⭐ {movie.vote_average.toFixed(1)}
              </p>
      </div>
    </div>
  )
}