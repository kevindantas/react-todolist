import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox"/>
          Label qualquer
        </label>

      </li>
    );
  }
}

export default ListItem;