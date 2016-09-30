import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import TarefaInput from './TarefaInput';

class AddTarefas extends Component {

  constructor() {
    super();
    this.state = {
      tarefas: [{}]
    };

    this.addInput = this.addInput.bind(this);
  }



  addInput(e) {
    this.state.tarefas.push({});

    this.setState({
      tarefas: this.state.tarefas
    })
  }


  getDescricoes() {
    var descricoes = [];
    
    for(var i in this.refs) {
      descricoes.push(this.refs[i].state.descricao)
    }

    descricoes = descricoes.filter((value) => value);


    return descricoes;
  }



  renderTarefas() {
    return this.state.tarefas.map((tarefa, i) => (
      <TarefaInput
        key={i}
        tarefa={tarefa}
        ref={`tarefa${i}`}
        addInput={this.addInput} />
    ));
  }

  render() {
    return (
      <div>
        <h4>Tarefas </h4>
        { this.renderTarefas() }
      </div>
    )
  }
}


export default AddTarefas;