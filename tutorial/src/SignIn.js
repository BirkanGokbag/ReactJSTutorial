import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
export default class SignUp extends Component { 
constructor(props) {
    super(props);
    this.state = {valuePlayer1: '',
                  valuePlayer2: '',
                  toGame: false,
                };

    this.handleChangePlayer1 = this.handleChangePlayer1.bind(this);
    this.handleChangePlayer2 = this.handleChangePlayer2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const player1 = this.props.player1;
  }

  handleChangePlayer1(event) {
    this.setState({valuePlayer1: event.target.value});
  }
  handleChangePlayer2(event) {
    this.setState({valuePlayer2: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.valuePlayer2 != '' && this.state.valuePlayer1 != ''){
      this.props.playerData.player1Name = this.state.valuePlayer1;
      this.props.playerData.player2Name = this.state.valuePlayer2;
      this.setState({toGame: true});
    }
    else{
      alert('please enter a name for both players');
    }
  }

  render() {
    if(this.state.toGame === true){
      return <Redirect to ='/game' />
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Player 1 Name:
          <input type="text" value={this.state.valuePlayer1} onChange={this.handleChangePlayer1} />
        </label>
        <label>
          Player 2 Name:
          <input type="text" value={this.state.valuePlayer2} onChange={this.handleChangePlayer2} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}