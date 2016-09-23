import React, { Component, PropTypes } from 'react';


class ListItem extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox"/>
          { this.props.item.descricao }
        </label>

      </li>
    );
  }
}

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};