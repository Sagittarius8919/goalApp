import React, { Component } from 'react';
import './style.css';

class CurrentCircle extends Component {
	render() {
		return (
			<div>
				<div id="date">Today it is:</div>
				<div id="current-position-color">Now</div>
			</div>
		);
	}
}

export default CurrentCircle;