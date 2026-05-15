import { Film, Search, Bookmark, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Film className="h-6 w-6 text-red-500" />

          <h1 className="text-xl font-bold tracking-wide text-white">
            CineVault
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Movies
          </Link>

          <Link
            to="/tvshows"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            TV Shows
          </Link>

          <Link
            to="/anime"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Anime
          </Link>

        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Link to="/watchlist">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white"
            >
              <Bookmark className="h-5 w-5" />
            </Button>
          </Link>

          <Link to="/profile">
            <Button
              variant="secondary"
              className="gap-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <User className="h-4 w-4" />
              Profile
            </Button>
          </Link>

        </div>
      </div>
    </header>
    
  )
}