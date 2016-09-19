import React, { Component } from 'react'
import './Rand.css'
import Celula from "./Celula.js"

class Rand extends Component {
  render() {
    return (
    <div className='Rand'>
    <Celula changePlayer={this.props.changePlayer} currentPlayer={this.props.currentPlayer} cellId={`${this.props.number}-0`}/>
    <Celula changePlayer={this.props.changePlayer} currentPlayer={this.props.currentPlayer} cellId={`${this.props.number}-1`}/>
    <Celula changePlayer={this.props.changePlayer} currentPlayer={this.props.currentPlayer} cellId={`${this.props.number}-2`}/>
    </div>)
  }
}
export default Rand
