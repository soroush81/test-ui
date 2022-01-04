import React from 'react'
import { useStyles } from './styles'

const Kalaha = ({ gameId, pit, onPlay }) => {
  const classes = useStyles()
  const [key, value] = pit

  const getPitStyles = () => {
    return key === '7'
      ? [classes.kalaha, classes.player1kalaha].join(' ')
      : [classes.kalaha, classes.player2kalaha].join(' ')
  }

  return (
    <>
      <div onClick={() => onPlay(gameId, key)} className={classes.kalaha}>
        {value}
        <div className={classes.pitLabel}>{key}</div>
      </div>
    </>
  )
}
export default Kalaha
