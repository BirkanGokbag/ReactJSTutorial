import React, { Component } from 'react';
import Game from './Game';
import SignIn from './SignIn';
import {BrowserRouter, Route} from 'react-router-dom';
var DATA = {
  player1Name: "",
  player2Name: "",
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <SignIn playerData={DATA}/>
            </div>
          )}/>
          <Route exact={true} path='/game' render={() => (
            <div className="App">
              <Game playerData={DATA}/>
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;