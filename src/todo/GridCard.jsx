import React, { Component } from 'react';

import Card from './Card';

import SearchField from '../components/SearchField';

class GridCard extends Component {
  render() {
    return (
      <div>
        <SearchField placeholder="Pesquisar tarefa..." />

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    );
  }
}

export default GridCard;