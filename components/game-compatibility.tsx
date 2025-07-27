const GameCompatibility = () => {
  const supportedGames = ["Rust", "Fortnite", "Apex Legends"]

  return (
    <div>
      <h2>Game Compatibility</h2>
      <p>Our software is compatible with the following games:</p>
      <ul>
        {supportedGames.map((game, index) => (
          <li key={index}>{game}</li>
        ))}
      </ul>
    </div>
  )
}

export default GameCompatibility
