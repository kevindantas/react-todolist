import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


class Navigation extends Component {

	state = {
		isOpen: false
	}

	static childContextTypes = {
	  muiTheme: PropTypes.object.isRequired,
	}

	getChildContext() {
		return {
			muiTheme: getMuiTheme({
				palette: {
					primary1Color : '#FFCB00',
					alternateTextColor: '#323536'
				}
			})
		}
	}

	render() {
		return (
			<div>
				<AppBar 
					title="To Do List" 
					onLeftIconButtonTouchTap={() => this.setState({isOpen: true}) } />
				<Drawer
					docked={false}
					open={this.state.isOpen}
					onRequestChange={(isOpen) => this.setState({isOpen})} >
					<MenuItem><h1>To Do List</h1></MenuItem>
					<MenuItem>Listas não feitas</MenuItem>
					<MenuItem>Listas Feitas</MenuItem>
				</Drawer>
			</div>
		);
	}
}


export default Navigation;