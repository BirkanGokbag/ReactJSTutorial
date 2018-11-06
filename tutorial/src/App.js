import React, { Component } from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: 1,
      board: [],
      gameOver: false,
      message: ''
    };
    
    // Bind play function to App component
    this.play = this.play.bind(this);
  }
  
  // Starts new game
  initBoard() {
    // Create a blank 6x7 matrix
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
        board.push(row);
    }
    
    this.setState({
      board,

    });
  }
  
  togglePlayer() {
    return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
  }
  
  play(c) {
    if (!this.state.gameOver) {
      // Place piece on board
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      // Check status of board
      let result = this.checkAll(board);
      if (result === this.state.player1) {
        this.setState({ board, gameOver: true, message: 'Player 1 (red) wins!' });
      } else if (result === this.state.player2) {
        this.setState({ board, gameOver: true, message: 'Player 2 (yellow) wins!' });
      } else if (result === 'draw') {
        this.setState({ board, gameOver: true, message: 'Draw game.' });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    } else {
      this.setState({ message: 'Game over. Please start a new game.' });
    }
  }
  
  checkVertical(board) {
    // Check only if row is 3 or greater
    for (let row = 3; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        if (board[row][col]) {
          if (board[row][col] === board[row - 1][col] &&
              board[row][col] === board[row - 2][col] &&
              board[row][col] === board[row - 3][col]) {
            return board[row][col];    
          }
        }
      }
    }
  }
  
  checkHorizontal(board) {
    // Check only if column is 3 or less
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (board[row][col]) {
          if (board[row][col] === board[row][col + 1] && 
              board[row][col] === board[row][col + 2] &&
              board[row][col] === board[row][col + 3]) {
            return board[row][col];
          }
        }
      }
    }
  }
  
  checkDiagonalRight(board) {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let row = 3; row < 6; row++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[row][col] === board[row - 1][col + 1] &&
              board[row][col] === board[row - 2][col + 2] &&
              board[row][col] === board[row - 3][col + 3]) {
            return board[row][col];
          }
        }
      }
    }
  }
  
  checkDiagonalLeft(board) {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let row = 3; row < 6; row++) {
      for (let col = 3; col < 7; col++) {
        if (board[row][c]) {
          if (board[row][col] === board[row - 1][col - 1] &&
              board[row][col] === board[row - 2][col - 2] &&
              board[row][col] === board[row - 3][col - 3]) {
            return board[row][col];
          }
        }
      }
    }
  }
  
  checkDraw(board) {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        if (board[row][col] === null) {
          return null;
        }
      }
    }
    return 'draw';    
  }
  
  checkAll(board) {
    return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
  }
  
  componentWillMount() {
    this.initBoard();
  }
  
  render() {
    return (
      <div>
        <div className="button" onClick={() => {this.initBoard()}}>New Game</div>
        
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>
        
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

// Row component
const Row = ({ row, play }) => {
  return (
    <tr>
      {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
    </tr>
  );
};

const Cell = ({ value, columnIndex, play }) => {
  let color = 'noPlayer';
  if (value === 1) {
    color = 'player1color';
  } else if (value === 2) {
    color = 'player2color';
  }
    
  return (
    <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        <div className={color}></div>
      </div>
    </td>
  );
};


export default App;
