import React, { Component } from 'react'

const API_URL = "https://backend-dfzefqaelu.now.sh"

class App extends Component {
  constructor (props) {
  super(props)
  this.state = {
    data: []
  }
}

  async getInitialState() {
    const RESPONSE = await fetch(API_URL)
    const DATA = await RESPONSE.json()
    console.log(DATA)
    this.setState(state => {
      return {
        data: DATA
      }
    })
  }

  render() {
    return (
      <div id = "container">
        <p> {API_URL} </p>
      </div>
    )
  }
}

export default App;
