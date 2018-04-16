import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Tracking';
import Tracking from './components/Tracking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tracking start={Date.now()} />
      </div>
    );
  }
}

export default App;
