import React from 'react'
import Board from './Board'
import { createGame, play } from '../services'
import { toast } from 'react-toastify'
const Game = () => {
  const [game, setGame] = React.useState()
  const [currentPlayer, setCurrentPlayer] = React.useState(null)
  const [winner, setWinner] = React.useState(null)

  const newGameHandler = async () => {
    const createdGame = await createGame()
    const { currentPlayer } = createdGame
    setGame(createdGame)
    setCurrentPlayer(currentPlayer)
  }

  const playHandler = async (gameId, pitId) => {
    try {
      const { data } = await play(gameId, pitId)
      const { currentPlayer, winner } = data
      setGame(data)
      setCurrentPlayer(currentPlayer)
      setWinner(winner)
    } catch (ex) {
      if (ex.response && ex.response.data.detail)
        toast.error(ex.response.data.detail)
    }
  }

  return (
    <>
      <button onClick={newGameHandler}>New Game</button>
      <Board game={game} onPlay={playHandler} />
      {currentPlayer !== null && <div>Curent Player:{currentPlayer}</div>}
      {winner !== null && <div> Winner:{winner}</div>}
    </>
  )
}

export default Game
