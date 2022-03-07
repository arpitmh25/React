import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import bridge from './bridge.jpg'

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        title : 'Hello from bridgelabz'
      }
    }
    render() {
        return ( 
          <div >
            <h1> { this.state.title } </h1>    
            <img src={bridge}
            alt="The bridgelabz logo : bridge to the employment "/>
         </div >
        );
    }
}
export default App;
