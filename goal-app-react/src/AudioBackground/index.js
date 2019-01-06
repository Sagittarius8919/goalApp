import React, { Component } from 'react';

import Track from '../Music/Antitla_lego.mp3';
import './style.css';

class AudioBackground extends Component {
	render() {
		return (
			<audio autoplay controls loop>
				<source src={Track} type="audio/mp3"></source>
			</audio>
		);
	}
}

export default AudioBackground;