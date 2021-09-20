import './App.css';
import React from 'react';

const handleClickOne = () => console.log("Você clicou!")
const handleClickTwo = () => console.log("Esse botão não faz nada de especial...")
const handleClickThree = () => console.log("Surpresa?")

class App extends React.Component {
  render () {
    return (
      <div>
        <button onClick={handleClickOne}>Botão 1</button>
        <button onClick={handleClickTwo}>Botão 2</button>
        <button onClick={handleClickThree}>Botão 3</button>
      </div>
    )
  }
}


export default App;
