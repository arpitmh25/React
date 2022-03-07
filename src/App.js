import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import bridge from './bridge.jpg'

class App extends React.Component {
  url = "https://www.bridgelabz.com/"
  constructor() {
    super();
    this.state = {
      title: 'Hello from bridgelabz'
    }
  }

  //onclick function
  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  }
  render() {
    return (
      <div >
        <h1> {this.state.title} </h1>
        <img src={bridge} onClick={this.onClick}
          alt="The bridgelabz logo : bridge to the employment " />
      </div >
    );
  }
}
export default App;
