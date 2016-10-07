import React, { Component, PropTypes } from 'react';
import './SearchField.css';
import SearchIcon from './SearchIcon.svg';

import TextField from 'material-ui/TextField';

/**
 * Icone e input para pesquisar
 *
 */
class SearchField extends Component {


  handleKeyUp(e) {

    var searchValue = this.refs.textInput.getValue();

    this.props.handleSearch(searchValue);
  }



  /**
   * Renderiza o componente
   */
  render() {
    const style = {
      background: `#fff url(${SearchIcon}) no-repeat`,
      backgroundPosition: 10,
      padding: 16,
      paddingLeft: 36
    }

    const hintStyle = {
      paddingLeft: 36,
      zIndex: 1
    }
    const underlineStyle = {
      bottom: 0,
      borderWidth: 4
    }

    return (
      <form className="search-form">
        <TextField
          fullWidth={true}
          ref="textInput"
          type="search"
          inputStyle={style}
          hintStyle={hintStyle}
          underlineStyle={underlineStyle}
          onChange={this.handleKeyUp.bind(this)}
          hintText={this.props.placeholder} />
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