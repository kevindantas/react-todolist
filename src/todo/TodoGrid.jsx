import React, { Component } from 'react';

import SearchField from '../components/SearchField';
import TodoCard from './TodoCard';

class TodoGrid extends Component {


  render() {
    var todo = {
      titulo: 'Alguma coisa muito legal',
      itens: [{
        descricao: 'Alguma coisa pra fazer'
      },
      {
        descricao: 'Outra coisa pra fazer'
      }]
    }

    return (
      <div className="todo-grid">
        <SearchField placeholder="Pesquisar tarefa..." />
        <TodoCard todo={todo} />
      </div>
    );
  }
}

export default TodoGrid;