import React from 'react'
import { useStyles } from "./styles";

const Pit = ({ gameId, pit, onPlay }) => {
    const classes = useStyles();

    return (
        <div
            onClick={() => onPlay(gameId, pit.id)}
            className={(pit.id === 7 || pit.id === 14) ? classes.kalaha : classes.pit}>
            {pit.stoneCount}
        </div >
    )
}

export default Pit
