import React from 'react'
import { useStyles } from './styles'

const Kalaha = ({ gameId, pit, onPlay }) => {
  const classes = useStyles()
  const [key, value] = pit

  const kalahaClickHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
    onPlay(gameId, key)
  }

  return (
    <>
      <button onClick={kalahaClickHandler} className={classes.kalaha}>
        {value}
        <div className={classes.pitLabel}>{key}</div>
      </button>
    </>
  )
}
export default Kalaha
