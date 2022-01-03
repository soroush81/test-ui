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
      <div onClick={() => onPlay(gameId, key)} className={getPitStyles()}>
        {value}
        <div style={{ margin: 15 }}>{key}</div>
      </div>
    </>
  )
}
export default Kalaha
