import React, { Component } from 'react';

import List from './List';
import '../css/Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2>{ this.props.todo.titulo }</h2>

        <List itens={this.props.todo.itens} />
      </div>
    );
  }
}

export default Card;