import type React from "react"

interface Game {
  name: string
  imageUrl: string
  description: string
}

const GameShowcase: React.FC = () => {
  const games: Game[] = [
    {
      name: "Counter-Strike 2",
      imageUrl: "/cs2.jpg",
      description: "The latest iteration of the classic tactical shooter.",
    },
    {
      name: "League of Legends",
      imageUrl: "/lol.jpg",
      description: "A popular multiplayer online battle arena (MOBA) game.",
    },
    {
      name: "Dota 2",
      imageUrl: "/dota2.jpg",
      description: "Another highly competitive MOBA game.",
    },
    {
      name: "Apex Legends",
      imageUrl: "/apex.jpg",
      description: "A fast-paced battle royale game with unique characters.",
    },
    {
      name: "Fortnite",
      imageUrl: "/fortnite.jpg",
      description: "A widely popular battle royale game with building mechanics.",
    },
    {
      name: "Minecraft",
      imageUrl: "/minecraft.jpg",
      description: "A sandbox game where you can build and explore.",
    },
    {
      name: "Grand Theft Auto V",
      imageUrl: "/gtav.jpg",
      description: "An open-world action-adventure game.",
    },
    {
      name: "Call of Duty: Warzone",
      imageUrl: "/warzone.jpg",
      description: "A free-to-play battle royale game.",
    },
  ]

  return (
    <div className="game-showcase">
      <h2>Featured Games by Calamari</h2>
      <div className="game-list">
        {games.map((game, index) => (
          <div key={index} className="game-item">
            <img src={game.imageUrl || "/placeholder.svg"} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameShowcase
