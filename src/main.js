import React from 'react';
import Router from './router';
import {Helmet} from "react-helmet";

export default class App extends React.Component{

  render(){
    return(
      <>
        <Helmet>
          <link href={"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"} rel="stylesheet"/>
          <link href={"https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"} rel="stylesheet"/>
        </Helmet>
        <Router />
      </>
    )
  }
}