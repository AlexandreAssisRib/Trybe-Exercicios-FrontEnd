import './App.css';
import  pokemons from'./components/data'
import Card from './components/Card'
import React from 'react';
function App() {
  return (
    <>
    <h1>Pokedex</h1>
    <div className='card-container'>
      <Card pokemons = {pokemons}/>
    </div>
    </>
  );
}

export default App;
