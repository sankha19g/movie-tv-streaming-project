export interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
  vote_average: number
   backdrop_path: string
  overview: string


}
export interface MovieDetails extends Movie {

  backdrop_path: string
   release_date: string
  overview: string
  runtime: number
  genres: { id: number; name: string }[]
}
export interface TV {
  id: number
  name: string
  first_air_date: string
  overview: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  
}

// Full TV details
export interface TVDetails extends TV {
  number_of_seasons: number
  number_of_episodes: number
  genres: { id: number; name: string }[]
}


const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const BASE_URL = "https://api.themoviedb.org/3"

export async function getTrendingMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  )

  const data = await response.json()

  return data.results
}
export async function getPopularMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  )

  const data = await response.json()

  return data.results
}
export async function getPopularTVShows(): Promise<Movie[]> {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}`
  )

  const data = await response.json()

  return data.results
}
export async function getindianMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_origin_country=IN&sort_by=popularity.desc`
  )

  const data = await response.json()

  return data.results
}
export async function getindianTV(): Promise<Movie[]> {
  const response = await fetch(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_origin_country=IN&sort_by=vote_average.desc&vote_count.gte=50`
  )

  const data = await response.json()

  return data.results
}
export async function getMovieDetails(id: number): Promise<MovieDetails> {

  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  )

  const data = await res.json()

  return data
}
export async function getSeriesDetails(id: number): Promise<TVDetails> {
  const res = await fetch(`
    ${BASE_URL}/tv/${id}?api_key=${API_KEY}`
  )
  return res.json()
}
export const getMovieGenres = async () => {
  const response = await fetch(
`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`  )

  const data = await response.json()
  return data.genres
}
export const getTVGenres = async () => {
  const response = await fetch(
`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`  )

  const data = await response.json()
  return data.genres
}

