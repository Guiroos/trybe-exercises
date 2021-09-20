import React from 'react';
import './App.css';


class App extends React.Component {
  constructor () {
    super();
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.state = {
      clicksOne: 0,
      clicksTwo: 0,
      clicksThree: 0.
    }
  }

  handleClickOne() {
    this.setState((estadoAnterior, _props) => ({
      clicksOne: estadoAnterior.clicksOne + 1
    }), () => {
      console.log(`Botão 1 ${this.buttonColor(this.state.clicksOne)}`);
    });
    console.log("'this' do botão 1", this);
  }
  handleClickTwo() {
    this.setState((estadoAnterior, _props) => ({
      clicksTwo: estadoAnterior.clicksTwo + 1
    }), () => {
      console.log(`Botão 2 ${this.buttonColor(this.state.clicksTwo)}`);
    });
    console.log("'this' do botão 2", this);
  }
  handleClickThree() {
    this.setState((estadoAnterior, _props) => ({
      clicksThree: estadoAnterior.clicksThree + 1
    }), () => {
      console.log(`Botão 3 ${this.buttonColor(this.state.clicksThree)}`);
    });
    console.log("'this' do botão 3", this);
  }

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render () {
    const { clicksOne, clicksTwo, clicksThree} = this.state;
    return (
      <div>
        <button style={{ backgroundColor: this.buttonColor(clicksOne) }} onClick={this.handleClickOne}>{this.state.clicksOne}</button>
        <button style={{ backgroundColor: this.buttonColor(clicksTwo) }} onClick={this.handleClickTwo}>{this.state.clicksTwo}</button>
        <button style={{ backgroundColor: this.buttonColor(clicksThree) }} onClick={this.handleClickThree}>{this.state.clicksThree}</button>
      </div>
    )
  }
}


export default App;
