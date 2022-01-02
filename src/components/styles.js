import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
    player2pit: { boraderWidth: 1, borderStyle: 'solid', borderColor: 'blue', borderRadius: '50%', width: 25, height: 25, position: 'absolute', top: 0 },
    player1pit: { boraderWidth: 1, borderStyle: 'solid', borderColor: 'green', borderRadius: '50%', width: 25, height: 25, position: 'absolute', top: 100 },
    player1kalaha: { boraderWidth: 1, borderStyle: 'solid', borderColor: 'red', borderRadius: '50%', width: 35, height: 35, position: 'absolute', top: 50, left: 0 },
    player2kalaha: { boraderWidth: 1, borderStyle: 'solid', borderColor: 'red', borderRadius: '50%', width: 35, height: 35, position: 'absolute', top: 50, left: 10 },
    board: { position: 'relative' }
}))