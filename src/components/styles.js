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
    width: 450,
    height: 200,
    borderStyle: 'inset',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#f4dfba',
    padding: 5
  },
  boardside: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    justifyContent: 'space-around',
    alignItems: 'center',
    gridGap: '10',
    padding: '10',
    margin: 25,
    flex: 1,
  },
  boardstatus: {
    marginTop: 20,
  },
  borderStatusText: {
    fontStyle: 'italic',
    textTransform: 'lowercase'
  },
  pit: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: '50%',
    width: 30,
    height: 30,
  },
  player2pit: {
    backgroundColor: '#ff5959',
    borderColor: '#ff5959',
  },
  player1pit: {
    backgroundColor: '#676fa3',
    borderColor: '#676fa3',
  },
  pitLabel: {
    marginTop: 15,
    fontSize: '0.6em'
  },
  kalaha: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: '50%',
    width: 35,
    height: 35,
    borderColor: '#ffc900',
    backgroundColor: '#ffc900',
  },
  kalahaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#f0bb62',
    border: 'outset',
    borderWidth: 1,
    color: 'black',
    padding: '15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '12px',
    margin: '10px 2px',
    borderRadius: '4px',
  },
}))
