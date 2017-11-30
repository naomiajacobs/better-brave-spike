import React, { Component } from 'react';
import logo from './geometric-flower.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Better Brave</h1>
        </header>
        <p className="App-intro">
          Have you have experienced sexual harassment at work? Take our questionnaire to find out the best next steps for you.
        </p>
        <button>Take the questionnaire</button>
      </div>
    );
  }
}

export default App;
