import React, { Component } from 'react';

import Card from './Card';

import SearchField from '../components/SearchField';

class GridCard extends Component {


  /**
   * Método construtor
   */
  constructor() {
    super();

    // Declara um valor padrão para o state todos que estamos usando
    this.state = {
      todos: []
    }
  }

  /**
   * Renderiza os nossos Cards
   *
   * @returns {Array}
   */
  renderCards() {
    return this.state.todos.map(todo => {
      return <Card key={todo.id} todo={todo} />
    });
  }

  /**
   * Faz a requisição para a API
   * e seta o state com o valor da request
   */
  componentDidMount() {
    // Essa URL seria trocada pela da API quando ficar pronta
    fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista')
      .then(response => response.json())
      .then(response => this.setState({
        todos: response
      }));
  }


  render() {
    return (
      <div>
        <SearchField placeholder="Pesquisar tarefa..." />

        { this.renderCards() }

      </div>
    );
  }
}

export default GridCard;