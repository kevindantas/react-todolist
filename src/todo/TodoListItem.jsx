import React, { Component } from 'react';


class TodoListItem extends Component {

  render() {
    return (
      <li className="todo-list">
        <label>
          <input type="checkbox" />
          { this.props.item.descricao }
        </label>
      </li>
    );
  }
}

export default TodoListItem;