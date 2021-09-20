import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Dormir', 'Estudar', 'Comer', 'Academia', 'Jogar'];

class App extends React.Component {
  render () {
    return (
      <ul>
        { compromissos.map(tarefa => Task(tarefa)) }
      </ul>
    );
  }
}

export default App;
