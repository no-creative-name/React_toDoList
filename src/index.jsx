import React from 'react';
import {render} from 'react-dom';
import ToDoInput from './input.jsx';
import ToDoItem from './item.jsx';
import ItemStats from './item_stats.jsx';

class App extends React.Component {

	constructor (props) {
		super(props);
		let toDos = ['Buy','Sell','Go'];
		let toDoCount = toDos.length;
		this.state= {
			toDos: toDos,
			toDoCount: toDoCount
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.removeToDo = this.removeToDo.bind(this);
		this.updateToDoCount = this.updateToDoCount.bind(this);
		this.ifImportant = this.ifImportant.bind(this);
	}

	render () {
		let toDos = [];
		for (let i = 0; i < this.state.toDos.length; i++) {
			toDos.push(<ToDoItem key={i} toDo={this.state.toDos[i]} removeItem={this.removeToDo} ifImportant={this.ifImportant}/>);
		}

		return (<div>
					<ToDoInput value={this.state.value} onInput={this.onValueChange}/>
					{toDos}
					<ItemStats toDoCount={this.state.toDoCount}/>
				</div>);
	}

	onValueChange (newValue) {

		if(this.checkForDuplicates(this.state.toDos, newValue)) {
		}

		else {
			let newToDos = this.state.toDos;
			newToDos.push(newValue);
			this.setState({toDos: newToDos});
			this.updateToDoCount();
		}
	}

	checkForDuplicates (toDos, newValue) {
		for (let i = 0; i < toDos.length; i++) {
			if (toDos[i] == newValue) {
				return true;
			}
		}

		return false;
	}

	removeToDo (toDo) {
		let newToDos = this.state.toDos;
		let i = newToDos.indexOf(toDo);
		newToDos.splice(i, 1);
		this.setState({toDos: newToDos});
		this.updateToDoCount();
	}

	updateToDoCount () {
		let newCount = this.state.toDos.length;
		this.setState({toDoCount: newCount});
	}

	ifImportant (toDos, toDo, isIt) {

				if (isIt)
				{
					let sortedToDos = this.state.toDos;
					let i = sortedToDos.indexOf(toDo);
					let removed = sortedToDos.splice(i, 1);
					sortedToDos.unshift(removed);
					this.setState({toDos: sortedToDos});
				}

		}

}

render(<App/>, document.getElementById('app'));
