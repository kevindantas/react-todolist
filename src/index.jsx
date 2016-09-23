import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TodoGrid from './todo/GridCard';


// Método que renderiza os componentes do React no `index.html`
ReactDOM.render(

  // Componente Router vai ser renderizado
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TodoGrid} />
    </Route>
  </Router>,

  document.getElementById('root') // Onde o componente vai ser renderizado
);
