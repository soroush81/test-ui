import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
  pit: {
    boraderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '50%',
    width: 25,
    height: 25,
  },
  player2pit: {
    borderColor: 'blue',
  },
  player1pit: {
    borderColor: 'green',
  },
  kalahas: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  kalaha: {
    boraderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '50%',
    width: 35,
    height: 35,
  },
  player2kalaha: {
    borderColor: 'red',
  },
  player1kalaha: {
    borderColor: 'red',
  },
  board: {
    position: 'relative',
    width: 400,
    height: 200,
  },
  boardside: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    gridGap: '10',
    padding: '10',
    margin: 25,
  },
}))
