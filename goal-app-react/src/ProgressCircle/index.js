import React, { Component } from 'react';
import './style.css';

class ProgressCircle extends Component {
	render() {
		return (
			<div>
				<img src="./pipette.png" alt="pipette"/>
				<div id="circle">0%</div>
			</div>
		);
	}
}

export default ProgressCircle;