import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Game />
    </div>
  );
}

export default App;
