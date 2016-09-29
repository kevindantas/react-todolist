import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



/**
 * Componente principal que está sendo renderizado
 */
class App extends Component {

  /**
   * Renderiza o componente
   */
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Menu />
          <main>
            { this.props.children }
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

// Exporta o componente
export default App;
