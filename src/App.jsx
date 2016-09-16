import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <h3 className="logo">ToDo List</h3>
        </nav>
        <SearchField />
      </div>
    );
  }
}

export default App;
