import React, { Component } from 'react';

import ListItem from './ListItem';

import '../css/List.css';

class List extends Component {


  renderItems() {
    return this.props.itens.map(item => {
      return <ListItem key={item.id} item={item} />
    });
  }


  render() {
    return (
      <ul className="list">

        { this.renderItems() }

      </ul>
    );
  }
}

export default List;