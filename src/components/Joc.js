import React, { Component } from 'react'
import Tabla from './Tabla.js'
import './Joc.css'

/*
  X     = 1
  0     = 0
  null  = -1
*/

const  initialValues = {
  toMove: 'X',
  matrix: [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
  ]
}
class Joc extends Component {
  constructor() {
    super()
    this.changePlayer = this.changePlayer.bind(this)
    this.getmatrixValue = this.getmatrixValue.bind(this)
    this.updateMatrix = this.updateMatrix.bind(this)
    this.checkArray = this.checkArray.bind(this)
    this.checkWinner = this.checkWinner.bind(this)
    this.checkFirstDiagonal = this.checkFirstDiagonal.bind(this)
    this.checkSecondDiagonal = this.checkSecondDiagonal.bind(this)
    this.checkLines = this.checkLines.bind(this)
  }

  state = initialValues

  getmatrixValue (value) {
    console.log('value', value);
    if (value === 'X')
      return 1
    if (value === 0)
      return 0

    return null
  }



  checkArray (array) {
    let i,
    winner = true
console.log('arrayul', array);

    for (i = 1; i < 3; i++) {
      if (array[i] !== -1 && array[i-1] !== -1) {

        console.log('elem', array[i], array[i-1]);
        if (array[i] !== array[i-1] ) {
          winner = false
        }
      } else {
        winner = false
      }

    }

    return winner
  }

  checkFirstDiagonal () {
    let winner = true, i = 0;
    const matrix = this.state.matrix;
    //first Diagonal
    for (i = 0; i < 2; i++) {
      if (matrix[i+1][i+1] != -1) {
        if (matrix[i][i] != matrix[i+1][i+1]) {
          winner = false
        }
      } else {
        winner = false
      }
    }

    return winner;
  }

  checkSecondDiagonal () {
    console.log('check 2nd');
    let winner = true, i = 0
    const matrix = this.state.matrix;

    //second Diagonal
    for (i = 0; i < 2; i++) {
      if (matrix[i][2-i] !== -1) {
        if (matrix[i][2-i] !== matrix[i+1][2- (i + 1)]) {
          winner = false
        }
      } else {
      winner = false
    }
    }

    return winner
  }

  checkLines () {
    let i, j, matrix = this.state.matrix, winner = true
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 2; j++) {
        if (matrix[i][j] !== -1 || matrix[i][j+1] !== -1) {
          console.log('here', matrix[i][j], matrix[i][j+1]);
          if (matrix[i][j] !== matrix[i][j+1] && j+1 != 3) {
            winner = false
          }
        } else {
          winner = false
        }
      }
    }

    return winner
  }

  checkWinner (position) {
    let i, j, diag1=[], diag2=[];
    let matrix = this.state.matrix

    let winner
    // debugger


    // for (i = 0; i < 3; i++) {
    //   for (j = 0; j < 3; j++) {
    //     if (matrix[i][j]) {
    //
    //     if (i === j) {
    //       console.log('push diag1', matrix[i][j]);
    //       diag1.push(matrix[i][j])
    //     } else {
    //       if (i+j === 4) {
    //         console.log('push diag2');
    //
    //         diag2.push(matrix[i][j])
    //       }
    //     }
    //   }
    //   }
    // }

    // console.log('tyuiop', this.checkArray(diag1));
    // if (this.checkArray(diag1)) {
    //   winner = true
    //   return winner
    // }

    // if (this.checkArray(diag2)) {
    //   winner = true
    //   return winner
    // }

    // for (i = 0; i < 3; i++) {
    //   for (j = 1; j < 3; j++) {
    //     console.log(i, j, matrix[i][j]);
    //     if (matrix[i][j-1] && matrix[i][j]) {
    //       if (matrix[i][j] !== matrix[i][j-1]) {
    //         console.log('aici');
    //       return
    //       } else {
    //             winner = true
    //             console.log(winner);
    //     }
    //   }
    //
    //   }
    //
    //   if (winner) {
    //     console.log('AM IESIT BOSS');
    //     return winner
    //   }
    // }

    // for (i = 0; i < 3; i++) {
    //   for (j = 1; j < 3; j++) {
    //     if ( matrix[j-1][i] && matrix[i][j]) {
    //     if (matrix[j][i] !== matrix[j-1][i]) {
    //       return
    //     }
    //     winner = true
    //   }
    // }
    //
    //   if (winner) {
    //     return winner
    //   }
    // }
    console.log(this.checkLines());
    return this.checkFirstDiagonal() || this.checkSecondDiagonal() || this.checkLines()
  }

  updateMatrix (position, value, cb) {
    let matrix = this.state.matrix

    console.log('update', value, position,  this.getmatrixValue(value));

    matrix[position.x][position.y] = this.getmatrixValue(value)

    console.log('matrix', matrix);
    this.setState({
      matrix: matrix
    }, cb)
  }

  changePlayer(position, value) {
    let newPlayer;

    this.updateMatrix(position, value, () => {


    if (this.checkWinner(position)) {
      alert(`${value} wins!`)
    }

    if (this.state.toMove === 'X') {
      newPlayer = 'O'
    } else {
      newPlayer = 'X'
    }

    this.setState({toMove: newPlayer})

    })
  }

  render () {
    return (
      <div className='TheGame'>
      <h1></h1>
      <h1>Next to move: { this.state.toMove }</h1>
      <Tabla
      currentPlayer={this.state.toMove}
      changePlayer={ this.changePlayer } />
      </div>

    )
  }
}

export default Joc
