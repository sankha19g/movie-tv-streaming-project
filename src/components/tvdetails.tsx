import DetailspageUI from "@/pages/detailspageUI"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSeriesDetails, type TVDetails } from "@/services/tmdb"

export default function SeriesDetails() {

  const { id } = useParams()
  const [tv, setTv] = useState<TVDetails | null>(null)

  useEffect(() => {

    async function fetchTV() {

      if (!id) return

      const data = await getSeriesDetails(Number(id))
      setTv(data)
    }

    fetchTV()

  }, [id])

  if (!tv) {
    return <p className="text-white p-10">Loading...</p>
  }

  return (
    <DetailspageUI
      title={tv.name}
      genre= {tv.genres.map((g) => g.name).join(", ")}
      releasedate={tv.first_air_date ? tv.first_air_date.substring(0, 4) : ""}
      poster={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
      image={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
      overview={tv.overview}
      rating={tv.vote_average}
    />
  )
}