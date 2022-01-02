import React from 'react'
import { useStyles } from "./styles";

const Pit = ({ gameId, pit, onPlay }) => {
    const classes = useStyles();
    const [key, value] = pit
    return (
        <>
            <div
                onClick={() => onPlay(gameId, key)}
                style={key < 7 ? { left: (key * 50) } : (key > 7 && key <= 14) ? { left: (14 - key) * 50 } : { left: 100 * key }}
                className={key < 7 ? classes.player1pit : (key === "7") ? classes.player1kalaha : (key === "14") ? classes.player2kalaha : classes.player2pit}>
                {value}
                <div>{key}</div>

            </div>
        </>
    )
}

export default Pit
