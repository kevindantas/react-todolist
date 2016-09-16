import React, { Component, PropTypes } from 'react';

import TodoList from './TodoList';
import '../css/TodoCard.css';

class TodoCard extends Component {
  render() {
    return (
      <div className="todo-card">
        <h2>{ this.props.todo.titulo }</h2>
        <TodoList items={this.props.todo.itens} />
      </div>
    );
  }
}


export default TodoCard;