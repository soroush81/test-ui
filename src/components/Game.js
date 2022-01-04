import React from 'react'
import Board from './Board'
import { createGame, play } from '../services'
import { toast } from 'react-toastify'
import { useStyles } from './styles'
import BoardStatus from './BoardStatus'

const Game = () => {
  const classes = useStyles()
  const [game, setGame] = React.useState()
  const [currentPlayer, setCurrentPlayer] = React.useState(null)
  const [winner, setWinner] = React.useState(null)

  const newGameHandler = async () => {
    try {
      const createdGame = await createGame()
      setGameData(createdGame)
    } catch (ex) {
      if (ex.response && ex.response.data.detail)
        toast.error(ex.response.data.detail)
    }
  }

  const playHandler = async (gameId, pitId) => {
    try {
      const { data } = await play(gameId, pitId)
      setGameData(data)
    } catch (ex) {
      if (ex.response && ex.response.data.detail)
        toast.error(ex.response.data.detail)
    }
  }

  const setGameData = (data) => {
    const { currentPlayer, winner } = data
    setGame(data)
    setCurrentPlayer(currentPlayer)
    setWinner(winner)
  }

  return (
    <div className={classes.game}>
      <button className={classes.button} onClick={newGameHandler}>
        New Game
      </button>
      <Board game={game} onPlay={playHandler} />
      <BoardStatus
        status={[currentPlayer, winner]}
        onNewGame={newGameHandler}
      />
    </div>
  )
}

export default Game
