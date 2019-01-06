import React, { Component } from 'react';
import './style.css';

class CurrentCircle extends Component {
	render() {
		const {
			date,
			green,
			blue,
		} = this.props;
		return (
			<div>
				<div id="date">Today it is:
					{
						date && <div className='date-now'>{date}</div>
					}
				</div>
				<div
					id="current-position-color"
					style={{background: `rgb(255, ${green}, ${blue})`}}
				>
					Now
				</div>
			</div>
		);
	}
}

export default CurrentCircle;