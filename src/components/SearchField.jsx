import React, { Component, PropTypes } from 'react';
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
          placeholder={this.props.placeholder} />
      </form>
    );
  }
}

// Valida as propriedades do componente
SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired
};


// Exporta o componente
export default SearchField;