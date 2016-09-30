import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class TarefaInput extends Component {

  constructor() {
    super();

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      touched: false,
      descricao: null
    }
  }


  handleKeyDown(e) {
    this.setState({
      touched: true
    });

    this.props.addInput();
  }

  handleChange(e) {
    this.setState({
      descricao: e.target.value
    });
  }


  render() {

    var eventKeyDown = null;
    if(!this.state.touched) {
      eventKeyDown = this.handleKeyDown
    }

    return (
      <div>
        <TextField
          onChange={this.handleChange}
          onKeyDown={eventKeyDown}
          hintText="Adicionar tarefa..." />
      </div>
    );
  }
}

export default TarefaInput;
