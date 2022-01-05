import React from 'react'
import { useStyles } from './styles'

const BoardStatus = ({ status }) => {
  const classes = useStyles()
  const [currentPlayer, winner] = status

  return (
    <div className={classes.boardstatus}>
      {currentPlayer != null && (
        <div className={classes.borderStatusText}>
          {currentPlayer.replace('_', ' ')}
        </div>
      )}
      {winner !== null && (
        <div className={classes.borderStatusText}>
          {' '}
          Winner:{winner.replace('_', ' ')}
        </div>
      )}
    </div>
  )
}

export default BoardStatus
