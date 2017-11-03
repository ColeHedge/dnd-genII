import React, { Component } from 'react';

import Body from './body.js';
import logo from './logo.svg';
import './App.css';

import * as firebase from 'firebase';
class App extends Component {
  render() {

    console.log('Attempting to render App');

    console.log('Initialize firebase');

    // Initialize Firebase
    var config = {
      apiKey: "<AIzaSyD41QljJ0pzrjtlSF6xeDAq8GVxCXRaq-M>",
      authDomain: "<dnd-gen>.firebaseapp.com",
      databaseURL: "https://<dnd-gen>.firebaseio.com",
      storageBucket: "<dnd-gen>.appspot.com"
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Body></Body>
      </div>
    );
  }
}

export default App;
