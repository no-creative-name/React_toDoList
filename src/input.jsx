import React from 'react';

export default class ToDoInput extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			value: ''
		}
		//console.log(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
    this.onClick = this.onClick.bind(this);
	}

	render () {
		return <div>
					<input className="input" value={this.state.value} onChange={this.onValueChange} onKeyPress={this.onEnterPress}/>
					<button className="addButton" onClick={this.onClick}>+</button>
				</div>;
	}

	onValueChange (event) {
			this.setState({value: event.target.value});
	}

	onEnterPress (event) {
		if(event.charCode==13) {
			this.props.onInput(this.state.value);
			this.setState({value: ''});
		}
	}

	onClick (event) {
			this.props.onInput(this.state.value);
      this.setState({value: ''});
		}

}
