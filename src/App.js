import React, { Component } from 'react';
import './assets/css/App.css';
import axios from 'axios';

class App extends Component {

  componentWillMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=9').then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
