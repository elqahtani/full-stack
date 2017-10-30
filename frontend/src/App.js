import React, { Component } from 'react';
import './App.css';

const API_URL = "https://backend-dfzefqaelu.now.sh/"

class App extends Component {
  render() {
    return (
      <div id = "container">
        <p> {API_URL} </p>
      </div>
    );
  }
}

export default App;
