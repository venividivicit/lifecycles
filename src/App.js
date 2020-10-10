import React, { Component } from 'react'
import './App.css'
import Board from './components/Board'


export default class App extends Component {

  state = {
    toggle: true
  }

  deleteComp = () =>{
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.toggle ? <Board/> : <h1>Deleted</h1>}
          <button onClick={this.deleteComp}>{this.state.toggle ? "Unmount" : "Mount"}</button>
        </header>
      </div>
    )
  }
}
