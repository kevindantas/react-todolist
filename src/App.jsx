import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
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
          <Navigation />
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
