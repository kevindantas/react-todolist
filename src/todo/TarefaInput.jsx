import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class TarefaInput extends Component {

  constructor() {
    super();

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      touched: false
    }
  }


  handleKeyDown(e) {
    this.setState({
      touched: true
    });

    this.props.addInput();
  }


  render() {

    var eventKeyDown = null;
    if(!this.state.touched) {
      eventKeyDown = this.handleKeyDown
    }

    return (
      <div>
        <TextField
          ref="input"
          onKeyDown={eventKeyDown}
          hintText="Adicionar tarefa..." />
      </div>
    );
  }
}

export default TarefaInput;
