import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// Método que renderiza os componentes do React no `index.html`
ReactDOM.render(
  <App />, // Qual componente vai ser renderizado
  document.getElementById('root') // Onde o componente vai ser renderizado
);
