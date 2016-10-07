import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FAB from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import Snackbar from 'material-ui/Snackbar';

import AddTarefas from './AddTarefas';


class AddTodo extends Component {


  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      snackbarOpen: false,
      message: 'To Do criado com sucesso :D',
      tarefas: []
    };


    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleClose() {
    this.setState({
      dialogOpen: false
    })
  }


  handleSubmit() {


    var todoForm = {
      titulo: this.refs.titulo.getValue(),
      tarefas: this.refs.tarefas.getDescricoes()
    };

    fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista', { method: 'POST'})
      .then(response => response.json())
      .then(response => {

        this.props.handleAdd(response);
        this.setState({
          dialogOpen: false,
          snackbarOpen: true
        })
      });


  }



  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        onClick={this.handleClose}
        />,
      <RaisedButton
        label="Cadastrar"
        primary={true}
        onClick={this.handleSubmit}
        icon={<AddIcon />}
      />
    ];


    const FABStyle = {
      position: 'fixed',
      bottom: '5%',
      right: '5%'
    };

    return (
      <div>
        <FAB style={FABStyle} onClick={ () => this.setState({dialogOpen: true }) }>
          <AddIcon />
        </FAB>

        <Dialog
          title="Cadastrar novo To Do"
          autoScrollBodyContent={true}
          open={this.state.dialogOpen}
          actions={actions}
          onRequestClose={this.handleClose}>

          <form style={{height: 350 }}>
            <TextField
              ref="titulo"
              name="tituloTodo"
              fullWidth={true}
              floatingLabelText="Título do To Do" />

            <AddTarefas ref="tarefas" />
          </form>

        </Dialog>

        <Snackbar 
          action="Desfazer"
          autoHideDuration={3000}
          message={this.state.message} 
          open={this.state.snackbarOpen}
          onActionTouchTap={() => this.setState({message: 'To Do desfeito'})}
          onRequestClose={(snackbarOpen) => this.setState({snackbarOpen: false})} />
      </div>
    );
  }
}



export default AddTodo;