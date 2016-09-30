import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FAB from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import AddTarefas from './AddTarefas';


class AddTodo extends Component {


  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      tarefas: []
    };


    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleOpen() {
    this.setState({
      dialogOpen: true
    })
  }


  handleClose() {
    this.setState({
      dialogOpen: false
    })
  }


  handleSubmit() {
    this.setState({
      dialogOpen: false
    })
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
        <FAB style={FABStyle} onClick={this.handleOpen.bind(this)}>
          <AddIcon />
        </FAB>


        <Dialog
          title="Cadastrar novo To Do"
          autoScrollBodyContent={true}
          open={this.state.dialogOpen}
          actions={actions}
          onRequestClose={this.handleClose}>

          <form style={{
            height: 350
          }}>
            <TextField
              ref="titulo"
              name="tituloTodo"
              fullWidth={true}
              floatingLabelText="Título do To Do" />

            <AddTarefas ref="tarefas" />
          </form>

        </Dialog>
      </div>
    );
  }
}



export default AddTodo;