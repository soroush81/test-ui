import React from 'react'
import Pit from './Pit'
const BoardSide = ({ boardSide, onPlay, gameId }) => {
  return (
    <>
      {boardSide !== undefined &&
        boardSide.map(([key, value]) => (
          <Pit key={key} pit={[key, value]} onPlay={onPlay} gameId={gameId} />
        ))}
    </>
  )
}

export default BoardSide
