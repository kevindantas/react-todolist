import React, { Component } from 'react';

import ListItem from './ListItem';

import '../css/List.css';

class List extends Component {
  render() {
    return (
      <ul className="list">
        <ListItem />
      </ul>
    );
  }
}

export default List;