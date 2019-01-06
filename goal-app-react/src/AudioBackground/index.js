import React, { Component } from 'react';
import './style.css';

class AudioBackground extends Component {
	render() {
		return (
			<audio autoPlay controls loop
					src="./music/Antitla_lego.mp3" type="audio/mp3">
			</audio>
		);
	}
}

export default AudioBackground;