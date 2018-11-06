import React, { Component } from 'react';
import Game from './Game';
import SignIn from './SignIn';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <SignIn />
            </div>
          )}/>
          <Route exact={true} path='/game' render={() => (
            <div className="App">
              <Game />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;