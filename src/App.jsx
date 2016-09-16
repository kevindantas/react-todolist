import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';

/**
 * Componente principal que está sendo renderizado
 */
class App extends Component {

  /**
   * Renderiza o componente
   */
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <h3 className="logo">ToDo List</h3>
        </nav>
        <SearchField placeholder="Pesquiser tarefa..." />
      </div>
    );
  }
}

// Exporta o componente
export default App;
