import React, { Component, PropTypes } from 'react';


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
    var classNames = `list-item `;
    if(this.state.done)
      classNames += 'is-done';

    return (
      <li className={classNames}>
        <label>
          <input type="checkbox" defaultChecked={this.props.item.feito} onChange={this.checkItem.bind(this)} />
          { this.props.item.descricao }
        </label>

      </li>
    );
  }
}

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};