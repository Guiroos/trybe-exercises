import './App.css';
import React from 'react';
import pokemons from './pokemons';
import Pokedex from './Pokedex';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>Pokedéx</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    )
  }
}

export default App;
