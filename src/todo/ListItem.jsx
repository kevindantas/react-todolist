import React, { Component, PropTypes } from 'react';

import Checkbox from 'material-ui/Checkbox';

class ListItem extends Component {

  componentWillMount() {
    this.state = {
      done: this.props.item.feito
    };
  }


  checkItem(e) {

    var isChecked = e.target.checked;

    this.setState({
      done: isChecked
    });
    
    fetch(`https://private-00cf6-reacttodo.apiary-mock.com/item/${this.props.item.id}`, {
      method: 'put',
      body: JSON.stringify({feito: isChecked})
    });

  }


  render() {

    const isDoneStyle = {
      textDecoration: 'line-through',
      color: '#8fca8b'
    }

    const iconStyle = {
      fill: '#8fca8b'
    }

    return (
      <li className="list-item">
        <label>
          <Checkbox 
            iconStyle={this.state.done ? iconStyle: null}
            labelStyle={this.state.done ? isDoneStyle : null}
            label={this.props.item.descricao} 
            defaultChecked={this.props.item.feito} 
            onCheck={this.checkItem.bind(this)} />
        </label>
      </li>
    );
  }
}

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};