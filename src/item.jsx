import React from 'react';

export default class ToDoItem extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			task: '',
			colorClass: 'itemNotChecked',
			isImportant: false
		}
		this.onClickCheck = this.onClickCheck.bind(this);
		this.onClickImportant = this.onClickImportant.bind(this);
		this.onClickRemove = this.onClickRemove.bind(this);
	}

	render () {
			return (
				<div className= {"item " + this.state.colorClass}>
					<span className="toDoText">
						{this.props.toDo}
					</span>
					<div className="itemButtons">
						<button onClick={this.onClickCheck}>✓</button>
						<button onClick={this.onClickImportant}>!</button>
						<button onClick={this.onClickRemove}>x</button>
					</div>
				</div>
			);
		}

	onClickCheck (event) {
		if(this.state.colorClass == 'itemNotChecked' || this.state.colorClass == 'itemImportant') {
			this.setState({colorClass: 'itemChecked'});
		}
		else {
			this.setState({colorClass: 'itemNotChecked'});
		}
	}

	onClickRemove (event) {
		this.props.removeItem(this.props.toDo);
	}

	onClickImportant (event) {
		if(this.state.colorClass == 'itemNotChecked') {
			this.setState({colorClass: 'itemImportant'});
			this.setState({isImportant: true});
			this.props.ifImportant(toDo);
		}
		else if (this.state.colorClass == 'itemImportant'){
			this.setState({colorClass: 'itemNotChecked'});
			this.setState({isImportant: false});
			this.props.ifImportant(toDo);
		}
	}

}
