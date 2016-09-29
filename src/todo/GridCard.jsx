import React, {Component} from 'react';

import Card from './Card';

import SearchField from '../components/SearchField';
import AddTodo from './AddTodo';

class GridCard extends Component {


  /**
   * Método construtor
   */
  constructor() {
    super();

    // Declara um valor padrão para o state todos que estamos usando
    this.state = {
      todos:  null,
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

    const styleH3 = {
      textAlign: 'center'
    };


    var todoList = this.state.todos;


    // Se o state.todos está null, então mostramos a mensagem de carregando
    if (!todoList) {
      return (<h3 style={styleH3}>Carregando...</h3>); // return para a a função
    }


    /***********************  Filtra os todos  **********************
    *                                                               *
    *   A função indexOf pesquisa um caracter em uma string/array   *
    *   E Retorna um inteiro:                                       *
    *     -1 para caso não ache nenhuma ocorrência                  *
    *     Ou o indice daquela ocorrencia caso ache alguma coisa     *
    *   Ex.:                                                        *
    *     var a = 'abcdefgh';                                       *
    *     a.indexOf('c'); // retorna 2 (0 = a, 1, = b, 2 = c)       *
    *                                                               *
    *****************************************************************/
    var todoListFiltered = todoList.filter(todo => {
      return todo.titulo.toLocaleLowerCase().indexOf(this.state.search) > -1;
    });


    // Se a quantidade de todos filtrados for menor que 1, mostra mensagem de não encontrado
    if (todoListFiltered < 1) {
      return (<h3 style={styleH3}>Nenhum resultado encontrado!</h3>);
    }


    return todoListFiltered.map(todo => {
      return <Card key={todo.id} todo={todo}/>
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


        <AddTodo />
      </div>
    );
  }
}

export default GridCard;