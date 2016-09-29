import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';


class AddTarefas extends Component {

  render() {
    return (
      <div>
        <h4>Tarefas</h4>
        <TextField hintText="Adicionar tarefa..." />
      </div>
    )
  }
}


export default AddTarefas;