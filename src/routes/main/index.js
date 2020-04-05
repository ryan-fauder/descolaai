import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import { Button } from '@material-ui/core';

export default class App extends React.Component{

  render(){
    return(
      <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}
