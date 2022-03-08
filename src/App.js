import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import labz from './asset/labz.jpg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
    }
  }


  //onNameChangefunction
  onNameChange = (event) => {
    console.log("click", event.target.value);
    this.setState({ userName: event.target.value })
  }
  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          <img src={labz} alt="BridgeLabz Image" />
            <input onChange={this.onNameChange} />

          <p>At BridgeLabz, we are a techie Community of</p>
          <ul>
            <li>Technologists</li>
            <li>Thinkers</li>
            <li>Builders</li>
          </ul>
          <p>Working together to keep the Tech Employability of Engineeers alive and accessible, so Tech Companies worldwide can get contributors and creators for Technology Solutions. We Believe this act of human collaboration across an employability platform
            is essential to individual growth and our collective future.</p>
          <p>To know more about us, visit <a href="https://www.bridgelabz.com/">
            BridgeLabz</a> to learn even more about our mission i.e <strong>Employability To All</strong></p>

        </div>
      </>
    );
  }
}
export default App;
