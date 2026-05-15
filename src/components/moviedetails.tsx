import DetailspageUI from "@/pages/detailspageUI"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetails, type MovieDetails } from "@/services/tmdb"





export default function MovieDetails() {
const { id } = useParams()
  const [movie, setMovie] = useState<MovieDetails | null>(null)

   useEffect(() => {

    async function fetchMovie() {
      if (!id) return
      const data = await getMovieDetails(Number(id))
      setMovie(data)
    }
    fetchMovie()
  }, [id])

   if (!movie) {
    return <p className="text-white p-10">Loading...</p>
  }


  return (
    <DetailspageUI
      title={movie.title}
      genre= {movie.genres.map((g) => g.name).join(", ")}
      releasedate={movie.release_date ? movie.release_date.substring(0, 4) : ""}
      poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      overview={movie.overview}
      rating={movie.vote_average}
    />
  )
}