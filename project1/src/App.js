import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
