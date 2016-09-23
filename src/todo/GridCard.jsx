import React, { Component } from 'react';

import Card from './Card';

import SearchField from '../components/SearchField';
import Fab from '../components/Fab';


class GridCard extends Component {


  /**
   * Método construtor
   */
  constructor() {
    super();

    // Declara um valor padrão para o state todos que estamos usando
    this.state = {
      todos: [],
      search: ''
    }
  }



  handleSearch(value) {
    this.setState({
      search: value.toLowerCase()
    })
  }




  /**
   * Renderiza os nossos Cards
   *
   * @returns {Array}
   */
  renderCards() {

    // A função .indexOf pesquisa a ocorrência de um caracter em uma string
    // Retorna um inteiro
    //   -1 para caso não ache nenhuma ocorrência
    //   Ou o indice daquela ocorrencia
    // Ex.:
    //   var a = 'abcdefgh';
    //   a.indexOf('c'); // retorna 2 (0 = a, 1, = b, 2 = c)

    return this.state.todos.filter(todo => {
      return todo.titulo.toLocaleLowerCase().indexOf(this.state.search) > -1;
    }).map(todo => {
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
        <SearchField
          handleSearch={this.handleSearch.bind(this)}
          placeholder="Pesquisar tarefa..." />

        { this.renderCards() }


        <Fab />
      </div>
    );
  }
}

export default GridCard;