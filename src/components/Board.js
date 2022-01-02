import React from 'react'
import Pit from './Pit'

const Board = ({ game, onPlay }) => {
    return (
        <div className='board' style={{ width: '300', height: '200' }}>
            {
                game != null && game.status !== undefined && Object.entries(game.status).map(([key, value]) => (
                    <Pit key={key} pit={[key, value]} onPlay={onPlay} gameId={game.id} />
                ))
            }
        </div>
    )
}

export default Board
