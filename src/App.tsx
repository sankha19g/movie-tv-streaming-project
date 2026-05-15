import { Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Watchlist } from "@/pages/watchlist"
import { Profile } from "@/pages/profile"
import { Home } from "@/pages/home"
import  Anime  from "@/pages/anime"
import MovieDetails from "@/components/moviedetails"
import SeriesDetails from "@/components/tvdetails"



function Movies() {
  return <h1 className="pt-24 text-white">Movies Page</h1>
}

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/profile" element={<Profile />} />
<Route path="/movie/:id" element={<MovieDetails />} />
<Route path="/tv/:id" element={<SeriesDetails />} />


      </Routes>
    </div>
  )
}

export default App