import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const games = [
  {
    title: "2048",
    description: "Join the numbers and get to the 2048 tile!",
    link: "https://number-forge.vercel.app",
    image: "/2048.svg"
  },
  {
    title: "Match Puzzle",
    description: "Test your memory by matching pairs of cards",
    link: "https://mind-matcher.vercel.app/",
    image: "/puzzle.svg" 
  },
  {
    title: "Snake Game",
    description: "Classic snake game with modern graphics",
    link: "/games/snake",
    image: "/snake.png"
  },
  {
    title: "Tetris",
    description: "The classic block stacking game",
    link: "/games/tetris",
    image: "/tetris.png"
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col antialiased mx-auto max-w-7xl px-4">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            GameHub
          </h1>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative space-y-6 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Your Ultimate Gaming Destination
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Discover, play, and connect with gamers worldwide. Join our community and explore the latest in gaming.
            </p>
          </div>
        </section>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24 mx-auto">
          <div className="mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games.map((game) => (
              <Link key={game.title} href={game.link} className="block w-full">
                <Card className="h-full overflow-hidden w-full max-w-sm mx-auto">
                  <CardHeader>
                    <CardTitle>{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={game.image}
                        alt={game.title}
                        width={400}
                        height={225}
                        className="object-cover transition-all hover:scale-105"
                        priority
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
