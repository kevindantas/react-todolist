import React, { Component } from 'react';

import SearchField from '../components/SearchField';

class GridCard extends Component {
  render() {
    return (
      <div>
        <SearchField placeholder="Pesquisar tarefa..." />
      </div>
    );
  }
}

export default GridCard;