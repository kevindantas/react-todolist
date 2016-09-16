import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {
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

export default SearchField;