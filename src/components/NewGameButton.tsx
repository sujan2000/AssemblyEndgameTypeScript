



export default function NewGameButton({ isGameOver, startNewGame }) {
    if (!isGameOver) {
        return null
    } else {
        <button
            className="new-game"
            onClick={startNewGame}
        >New Game</button>
    }

}