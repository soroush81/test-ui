import React from 'react'
import BoardSide from './BoardSide'
import Kalaha from './Kalaha'
import { useStyles } from './styles'
const Board = ({ game, onPlay }) => {
  const classes = useStyles()
  const getPlayer1Pits = () => {
    return Object.entries(game.status).filter(([key]) => key < 7)
  }

  const getPlayer2Pits = () => {
    return Object.entries(game.status)
      .filter(([key]) => key > 7 && key < 14)
      .reverse()
  }

  return (
    <>
      {game != null && game.status !== undefined && (
        <div className={classes.board}>
          <div className={classes.boardside}>
            <BoardSide
              boardSide={getPlayer2Pits()}
              gameId={game.id}
              onPlay={onPlay}
            />
          </div>
          <div className={classes.kalahas}>
            <Kalaha
              gameId={game.id}
              pit={[14, game.status[14]]}
              onPlay={onPlay}
            />
            <Kalaha
              gameId={game.id}
              pit={[7, game.status[7]]}
              onPlay={onPlay}
            />
          </div>
          <div className={classes.boardside}>
            <BoardSide
              boardSide={getPlayer1Pits()}
              gameId={game.id}
              onPlay={onPlay}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Board
