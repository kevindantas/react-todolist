import React, { Component } from 'react';

import TodoListItem from './TodoListItem';
import '../css/TodoList.css';

class TodoList extends Component {


  renderItems() {
    return this.props.items.map((item, i) => (
      <TodoListItem item={item} key={i} />
    ));
  }

  render() {
    return (
      <ul className="todo-list">
        { this.renderItems() }
      </ul>
    );
  }
}

export default TodoList;