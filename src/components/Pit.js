import React from 'react'
import { useStyles } from './styles'

const Pit = ({ gameId, pit, onPlay }) => {
  const classes = useStyles()
  const [key, value] = pit

  const getPitStyles = () => {
    return key < 7
      ? [classes.pit, classes.player1pit].join(' ')
      : key === 7
      ? [classes.kalaha, classes.player1kalaha].join(' ')
      : key === 14
      ? [classes.kalaha, classes.player2kalaha].join(' ')
      : [classes.pit, classes.player2pit].join(' ')
  }

  const pitClickHandler = (e) => {
    e.preventDefault()
    onPlay(gameId, key)
  }

  return (
    <>
      <button onClick={pitClickHandler} className={getPitStyles()}>
        {value}
        <div className={classes.pitLabel}>{key}</div>
      </button>
    </>
  )
}

export default Pit
