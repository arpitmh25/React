import './App.css';
import React from 'react';
import { BrowserRouter as  Switch, Route } from 'react-router-dom';

import Home from './asset/component/Home';

class App extends React.Component {
  render() {
    return (
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </main>
    );
  }
}
export default App;
