import React from 'react'
import Board from './Board'
import { createGame, play } from '../services'

const Game = () => {
    const [game, setGame] = React.useState()
    const [currentPlayer, setCurrentPlayer] = React.useState(null);
    const [winner, setWinner] = React.useState(null);

    const newGameHandler = async () => {
        const createdGame = await createGame();
        const { currentPlayer } = createdGame
        setGame(createdGame)
        setCurrentPlayer(currentPlayer)

    }

    const playHandler = async (gameId, pitId) => {
        const { data } = await play(gameId, pitId);
        const { currentPlayer, winner } = data;
        setGame(data)
        setCurrentPlayer(currentPlayer)
        setWinner(winner)
    }

    return (
        <div>
            <button onClick={newGameHandler}>New Game</button>
            <Board game={game} onPlay={playHandler} />
            {currentPlayer !== null && <div>Curent Player:{currentPlayer}</div>}
            {winner !== null && <div> Winner:{winner}</div>}
        </div >
    )
}

export default Game
