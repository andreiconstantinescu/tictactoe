import React, { Component } from 'react'
import './Celula.css'
class Celula extends Component {
    constructor() {
      super()
      this.handleClick = this.handleClick.bind(this)
    }

    state = {
      value: ''
    }

    handleClick() {
      if (this.state.value) {
        return
      }


      this.setState({
        value: this.props.currentPlayer
      }, () => {
          this.props.changePlayer(this.state.position, this.state.value)
      })



    }

    componentWillMount() {
      let id = this.props.cellId.split('-')
      this.setState({
        position: {
          x: id[0],
          y: id[1]
        }
      })
    }

    render() {
      return (
        <div className='Celula' onClick={this.handleClick}>{this.state.value}</div>
      )
    }
}

export default Celula
