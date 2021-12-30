import React from 'react'
import Pit from './Pit'

const Board = ({ game, onPlay }) => {
    return (
        <div style={{ width: '300', height: '200' }}>
            {
                game != null && game.board !== undefined && game.board.pits.map(pit => (
                    <Pit key={pit.id} pit={pit} onPlay={onPlay} gameId={game.id} />
                ))
            }
        </div>
    )
}

export default Board
