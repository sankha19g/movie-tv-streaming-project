export interface Anime {
  mal_id: number
  title: string
  synopsis: string
  score: number

  images: {
    jpg: {
      image_url: string
      large_image_url: string
    }
  }
}

export async function getTopAnime(): Promise<Anime[]> {

  const response = await fetch(
    "https://api.jikan.moe/v4/top/anime"
  )

  const data = await response.json()

  return data.data
}
export async function getSeasonNow(): Promise<Anime[]> {

  const response = await fetch(
    "https://api.jikan.moe/v4/seasons/now"
  )

  const data = await response.json()

  return data.data
}