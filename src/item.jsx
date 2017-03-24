import React from 'react';

export default class ToDoItem extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			id: this.props.id,
			task: this.props.toDo,
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
						{this.state.task}
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
		this.props.removeItem(this.state.id);
	}

	onClickImportant (event) {
		if(this.state.colorClass == 'itemNotChecked') {
			this.setState({colorClass: 'itemImportant'});
			this.setState({isImportant: true});
		}
		else if (this.state.colorClass == 'itemImportant'){
			this.setState({colorClass: 'itemNotChecked'});
			this.setState({isImportant: false});
		}
		this.props.ifImportant(this.state.id);
	}

}
