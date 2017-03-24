import React from 'react';
import {render} from 'react-dom';
import ToDoInput from './input.jsx';
import ToDoItem from './item.jsx';
import ItemStats from './item_stats.jsx';

class App extends React.Component {

	constructor (props) {
		super(props);
		let toDos = [];
		let toDoCount = toDos.length;
		this.state= {
			key: 0,
			toDos: toDos,
			toDoCount: toDoCount
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.removeToDo = this.removeToDo.bind(this);
		this.updateToDoCount = this.updateToDoCount.bind(this);
		this.ifImportant = this.ifImportant.bind(this);
	}

	render () {

		return (<div>
					<ToDoInput value={this.state.value} onInput={this.onValueChange}/>
					{this.state.toDos}
					<ItemStats toDoCount={this.state.toDoCount}/>
				</div>);
	}

	onValueChange (newValue) {

		if(this.checkForDuplicates(this.state.toDos, newValue)) {
		}

		else {
			let newToDos = this.state.toDos
			newToDos.push(<ToDoItem key={this.state.key} id={this.state.key} toDo={newValue} removeItem={this.removeToDo} ifImportant={this.ifImportant}/>);
			let newKey = this.state.key+1;
			this.setState({key: newKey});
			this.setState({toDos: newToDos});
			this.updateToDoCount();
		}
	}

	checkForDuplicates (toDos, newValue) {
		for (let i = 0; i < toDos.length; i++) {
			if (toDos[i].toDo == newValue) {
				return true;
			}
		}

		return false;
	}

	removeToDo (id) {
		let newToDos = this.state.toDos;
		newToDos.splice(id, 1);
		this.setState({toDos: newToDos});
		this.updateToDoCount();
	}

	updateToDoCount () {
		let newCount = this.state.toDos.length;
		this.setState({toDoCount: newCount});
	}

	ifImportant (id) {
		let newToDos = this.state.toDos;
		let arrayId = 0;
		for(let i = 0; i < newToDos.length; i++) {
			if (newToDos[i].props.id == id)
			{
				arrayId = i;
			}
		}
		if (arrayId != 0) {
			let toMove = newToDos.splice(arrayId, 1);
			newToDos = toMove.concat(newToDos);
			this.setState({toDos: newToDos});
		}
	}

}

render(<App/>, document.getElementById('app'));
