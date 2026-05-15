import { useEffect, useState } from "react"
import { getTopAnime, type Anime } from "@/services/anime"
import { AnimeHeroBanner } from "@/components/animeherobanner"
import { getSeasonNow } from "@/services/anime"


const AnimePage = () => {

  const [anime, setAnime] = useState<Anime[]>([])
  const [SeasonNow, setSeasonNow] = useState<Anime[]>([])
  useEffect(() => {

    async function fetchAnime() {

      const data = await getTopAnime()
      setAnime(data)

      const seasonnow =await getSeasonNow()
      setSeasonNow(seasonnow)
    }

    fetchAnime()

  }, [])

  return (

    <div className="min-h-screen bg-black pt-24 text-white">

      {/* Hero Banner */}
      <AnimeHeroBanner />

      {/* Anime List */}
      <div className="px-5">

        <h2 className="mb-6 text-3xl font-bold">
          Top Anime
        </h2>

        <div className="flex gap-5 overflow-x-auto pb-5">

          {anime.map((show) => (

            <div
              key={show.mal_id}
              className="min-w-[200px] rounded-xl bg-zinc-900 p-3 transition hover:scale-105"
            >

              <img
                src={show.images.jpg.large_image_url}
                alt={show.title}
                className="mb-3 h-72 w-full rounded-lg object-cover"
              />

              <h3 className="line-clamp-1 text-lg font-semibold">
                {show.title}
              </h3>

              <p className="mt-1 text-sm text-zinc-400 line-clamp-3">
                {show.synopsis}
              </p>

              <p className="mt-3 text-yellow-400">
                ⭐ {show.score}
              </p>

            </div>

          ))}

        </div>
      </div>
      <div className="px-5">

        <h2 className="mb-6 text-3xl font-bold">
          This Season
        </h2>

        <div className="flex gap-5 overflow-x-auto pb-5">

          {SeasonNow.map((show) => (

            <div
              key={show.mal_id}
              className="min-w-[200px] rounded-xl bg-zinc-900 p-3 transition hover:scale-105"
            >

              <img
                src={show.images.jpg.large_image_url}
                alt={show.title}
                className="mb-3 h-72 w-full rounded-lg object-cover"
              />

              <h3 className="line-clamp-1 text-lg font-semibold">
                {show.title}
              </h3>

              <p className="mt-1 text-sm text-zinc-400 line-clamp-3">
                {show.synopsis}
              </p>

              <p className="mt-3 text-yellow-400">
                ⭐ {show.score}
              </p>

            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default AnimePage