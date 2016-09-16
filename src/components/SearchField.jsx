import React, { Component } from 'react';
import './SearchField.css';

/**
 * Icone e input para pesquisar
 *
 */
class SearchField extends Component {

  /**
   * Renderiza o componente
   */
  render() {
    return (
      <form className="search-form">
        <input
          type="search"
          placeholder="Pesquisar tarefa..." />
      </form>
    );
  }
}

// Exporta o componente
export default SearchField;