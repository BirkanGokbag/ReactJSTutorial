import React, { Component } from 'react';
import Game from './Game';
import SignIn from './SignIn';
import './Header.css';
import {BrowserRouter, Route} from 'react-router-dom';
var DATA = {
  player1Name: "",
  player2Name: "",
}
const Header = () => { 
    return (
        <div className="header">
          <h1>Connect 4</h1>
        </div>
    );
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Header />
              <p></p>
              <SignIn playerData={DATA}/>
            </div>
          )}/>
          <Route exact={true} path='/game' render={() => (
            <div className="App">
              <Header />
              <Game playerData={DATA}/>
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;