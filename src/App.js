import React from 'react';
import logo from './assets/logo.png';
import './App.css';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1>
        <img src={logo} className="App-logo" alt="logo" />
        </h1>
      </div>
    )
  }
}
