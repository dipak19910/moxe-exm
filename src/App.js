import React, { Component } from 'react';
import logo from './logo.svg';
import {observer} from "mobx-react"
import './App.css';
import Store from "./store"
let store = new Store();
@observer class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p><b>{store.getValue()}</b></p>
          <button onClick={_=>{
              store.incrementCount();
          }}>increment</button>
          <button onClick={_=>{
              store.decrementCount();
          }}>decrement</button>
      </div>
    );
  }
}

export default App;
