import React, { Component } from 'react';

import AudioBackground from '../AudioBackground/index';
import CurrentCircle from '../CurrentCircle/index';
import ProgressCircle from '../ProgressCircle/index';
import Slogan from '../Slogan/index';
import GoalText from '../GoalText/index';
import './style.css';

class App extends Component {
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
					<ProgressCircle />
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