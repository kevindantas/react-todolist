import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';


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
        <Menu />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}

// Exporta o componente
export default App;
