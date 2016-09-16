import React, { Component } from 'react';

import SearchField from '../components/SearchField';

class TodoGrid extends Component {
  render() {
    return (
      <div>
        <SearchField placeholder="Pesquisar tarefa..." />
      </div>
    );
  }
}

export default TodoGrid;