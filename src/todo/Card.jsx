import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';


import List from './List';
import '../css/Card.css';

class TodoCard extends Component {
	state = {
		depth: 1
	}


  render() {
  	const cardStyle = {
			width: 253,
			display: 'inline-block',
			verticalAlign: 'middle',
			marginLeft: 16,
			marginBottom: 16
		}

    return (
		  <Paper 
		  	style={cardStyle}
		  	className="Card showUp"
		  	zDepth={this.state.depth} 
		  	onMouseLeave={() => this.setState({ depth: 1 }) }
		  	onMouseEnter={() => this.setState({ depth: 3 }) } >
	      <Card>
	        <CardTitle title={ this.props.todo.titulo } />

	        <CardText>
	        	<List itens={this.props.todo.itens} />
	        </CardText>
	      </Card>
      </Paper>
    );
  }
}

export default TodoCard;