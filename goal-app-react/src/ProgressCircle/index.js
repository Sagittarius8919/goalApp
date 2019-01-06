import React, { Component } from 'react';
import _ from 'lodash';
import './style.css';

class ProgressCircle extends Component {
	state = {
		progress: 0,
		red: 0,
		green: 0,
		blue: 0,
	}

	componentDidMount() {
		this.setState({
			progress: this.props.progress,
			red: this.props.red,
			green: this.props.green,
			blue: this.props.blue,
		});
	}

	componentDidUpdate(prevProps) {
		if (!_.isEqual(prevProps, this.props)) {
			this.setState({
				progress: this.props.progress,
				green: this.props.green,
				blue: this.props.blue,
			});
		}
	}ß

	render() {
		const {
			progress,
			red,
			green,
			blue,
		} = this.state;
		return (
			<div>
				<img src="./pipette.png" alt="pipette"/>
				<div
					id="circle"
					style={{background: `rgb(${red}, ${green}, ${blue})`}}
				>
					{progress}%
				</div>
			</div>
		);
	}
}

export default ProgressCircle;