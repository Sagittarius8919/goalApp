import React, { Component } from 'react';

import AudioBackground from '../AudioBackground/index';
import CurrentCircle from '../CurrentCircle/index';
import ProgressCircle from '../ProgressCircle/index';
import Slogan from '../Slogan/index';
import GoalText from '../GoalText/index';
import {
	// red,
	// green,
	// blue,
	WHOLE_ITERATION,
} from '../Services/constants';
import './style.css';

class App extends Component {
	state = {
		progress: 0,
		red: 255,
		green: 255,
		blue: 255,
		interval: null,
		percent: 0,
	}

	componentDidMount() {
		let { interval } = this.state;
		interval = setInterval(this.handleGradient, 500);
		this.setState({ interval });
	}

	handleGradient = () => {
		let {
			interval,
			percent,
			red,
			green,
			blue,
		} = this.state;
		
		if (red === 255 && green === 0, blue === 0) {
			clearInterval(interval);
			this.setState({ interval: null });
			
			setTimeout(() => {
				this.setState({
					green: 255,
					blue: 255,
				});
				
				clearInterval(interval);
				this.setState({ interval: null });
				
				interval = setInterval(this.handleGradient, 500);
			}, 10 * 1000);
		} else {
			percent = Math.floor(((WHOLE_ITERATION - green) / WHOLE_ITERATION) * 100);
			console.log(this.state.green--);
			console.log(this.state.blue--);
			
			this.setState({
				progress: `${percent + 1}`,
				green: this.state.green--,
				blue: this.state.blue--,
			});
    }
	}

  render() {
    return (
      <div className="App">
				<div className="header">
        	<h6 id="title"><a name="top" href="#goal">My goal is coming...</a></h6>
					<AudioBackground />
				</div>

				<div className="gradient"></div>

				<div className="current">
					<CurrentCircle />
					<ProgressCircle
						progress={this.state.progress}
						red={this.state.red}
						green={this.state.green}
						blue={this.state.blue}
					/>
				</div>

				<Slogan />
				
				<p className="goal">
					<GoalText />
        	<a id="to-top" href="#top">To top</a>
    		</p>
      </div>
    );
  }
}

export default App;