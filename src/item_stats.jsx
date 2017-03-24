import React from 'react';

export default class ItemStats extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
		};

	}

	render () {
			return (
				<div id="itemStats">
					Total number of tasks: {this.props.toDoCount}
				</div>
			);
		}


}
