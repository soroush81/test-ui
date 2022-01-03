import React from 'react'
import { useStyles } from './styles'

const BoardStatus = ({ status, onNewGame }) => {
  const classes = useStyles()
  const [currentPlayer, winner] = status

  return (
    <div className={classes.boardstatus}>
      <button className={classes.button} onClick={onNewGame}>
        New Game
      </button>
      {currentPlayer !== null && <div>Current Player:{currentPlayer}</div>}
      {winner !== null && <div> Winner:{winner}</div>}
    </div>
  )
}

export default BoardStatus
