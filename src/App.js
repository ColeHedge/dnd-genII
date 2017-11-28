import React, { Component } from 'react';

import Body from './components/body.js';
import logo from './imgs/temp_logo.jpg';
import fire from './fire.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DND-Gen Working Title</h1>
        </header>
        <Body></Body>
      </div>
    );
  }
}

export default App;
