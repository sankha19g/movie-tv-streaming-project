import { useEffect, useState } from "react"

const animeBanners = [
  {
    id: 1,
    title: "Attack on Titan",
    synopsis:
      "Humanity fights for survival against gigantic Titans beyond the walls.",

    image:
      "https://m.media-amazon.com/images/S/pv-target-images/a72dcec6d4fb54bb50c1f4880757c6df1c6258036e014fe03480fd0f127ad68d.jpg"
  },

  {
    id: 2,
    title: "Demon Slayer",
    synopsis:
      "Tanjiro begins his journey to save his sister and defeat demons.",

    image:
      "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/03/demon-slayer-banner.jpg"
  },

  {
    id: 3,
    title: "Jujutsu Kaisen",
    synopsis:
      "Yuji Itadori joins the world of Jujutsu Sorcerers after consuming a cursed object.",

    image:
      "https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg?twic=v1/resize=760/step=10/quality=80"
  },
   {
    id: 4,
    title: "One Piece",
    synopsis:
      "YA pirate leaves behind a great treasure called One Piece. Years after his death, a boy named Monkey D Luffy sets out in search of the treasure and aims to become the next pirate king.",

    image:
      "https://images3.alphacoders.com/134/1342304.jpeg"
  }
]

export function AnimeHeroBanner() {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prevIndex) =>
        prevIndex === animeBanners.length - 1
          ? 0
          : prevIndex + 1
      )

    }, 5000)

    return () => clearInterval(interval)

  }, [])

  const currentBanner = animeBanners[currentIndex]

  return (
    <div
      className="relative mx-5 mb-10 h-[500px] overflow-hidden rounded-2xl bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${currentBanner.image})`
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-10">

        <h1 className="mb-4 max-w-2xl text-5xl font-bold text-white">
          {currentBanner.title}
        </h1>

        <p className="max-w-2xl text-lg text-zinc-300 line-clamp-4">
          {currentBanner.synopsis}
        </p>

      </div>
    </div>
  )
}