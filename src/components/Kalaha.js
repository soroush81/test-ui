import React from 'react'
import { useStyles } from './styles'

const Kalaha = ({ gameId, pit, onPlay }) => {
  const classes = useStyles()
  const [key, value] = pit

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
