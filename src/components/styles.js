import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
  game: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40vh',
  },
  board: {
    position: 'relative',
    width: 400,
    height: 200,
    flex: 3,
  },
  boardside: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    gridGap: '10',
    padding: '10',
    margin: 25,
    flex: 1,
  },
  boardstatus: {
    marginTop: 30,
  },
  pit: {
    borderWidth: 2,
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
  kalaha: {
    borderWidth: 2,
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
  kalahas: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#04AA6D',
    border: 'none',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    borderRadius: '2px',
  },
}))
