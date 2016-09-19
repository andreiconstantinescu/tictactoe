import React, { Component } from 'react'
import './Tabla.css'
import Rand from './Rand.js'
class Tabla extends Component {
  render() {
    console.log('dadadas');
    return (
    <div className='Tabla'>
      <Rand changePlayer={this.props.changePlayer} currentPlayer={this.props.currentPlayer} number={0}/>
      <Rand changePlayer={this.props.changePlayer} currentPlayer={this.props.currentPlayer} number={1}/>
      <Rand changePlayer={this.props.changePlayer} currentPlayer={this.props.currentPlayer} number={2}/>
      </div>
     );
  }
}

export default Tabla;
