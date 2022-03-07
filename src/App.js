import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import bridge from './bridge.jpg'

class App extends React.Component {
  url = "https://www.bridgelabz.com"
  constructor() {
    super();
    this.state = {
      userName: ""
    }
  }

  //onclick function
  onClick = (event) => {
    console.log("save button is clicked", event);
    window.open(this.url, "_blank");
  }
  
  //onNameChangefunction
  onNameChange = (event) => {
    console.log("click", event.target.value);
    this.setState({ userName: event.target.value })
  }
  render() {
    return (
      <>
        <div >
          <h1>Hello {this.state.userName} from bridgelabz </h1>
          <img src={bridge} onClick={this.onClick}
            alt="The bridgelabz logo : bridge to the employment " />
        </div >
        <div>
          <input onChange={this.onNameChange} />
        </div>
      </>
    );
  }
}
export default App;
