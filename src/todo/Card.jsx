import React, { Component } from 'react';

import List from './List';
import '../css/Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2>Teste</h2>

        <List />
      </div>
    );
  }
}

export default Card;