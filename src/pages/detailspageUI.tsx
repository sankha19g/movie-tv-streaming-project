import { Bookmark,CirclePlay  } from 'lucide-react';
import { Button } from "@/components/ui/button"

interface DetailspageUIProps {
  title: string
  image: string
  overview: string
  rating: number
  poster: string
  releasedate: string | number
  genre: string
}

export default function DetailspageUI({
  title,
  image,
  poster,
  overview,
  releasedate,
  genre,
  rating
}: DetailspageUIProps) {
  return (
    <div className="min-h-screen bg-black text-white pt-24 absolute">

      {/* Hero Image */}
      <div
        className="h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`
        }}
      />

      {/* right buttons */}
      <div className="flex flex-row float-right mr-3 mt-2 gap-2 items-center ">
      <Button variant="outline" className="w-30   hover:bg-red-500">Watch Now <CirclePlay /></Button>
      <Bookmark />
      
      </div>

      {/* poster image */}
      <div className="text-black h-72 w-52 bg-cover bg-center  ml-10 -mt-40 bg-white z-[1500] relative border-black border-2 "
      style={{
        backgroundImage: `url(${poster})`
        }}>
         </div>

      {/* Content */}
      <div className="p-10">

        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <h1 className="text-4xl font-bold">
          {releasedate}
        </h1>
        <h1 className="text-4xl font-bold">
          {genre}
        </h1>

        <p className="mt-4 text-zinc-300  w-6/12 leading-relaxed">
          {overview}
        </p>

        <p className="mt-4 text-yellow-400 font-semibold">
          ⭐ {rating.toFixed(1)}
        </p>

      </div>
    </div>
  )
}