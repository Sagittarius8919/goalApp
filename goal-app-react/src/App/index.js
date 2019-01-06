import React, { Component } from 'react';

import AudioBackground from '../AudioBackground/index';
import CurrentCircle from '../CurrentCircle/index';
import ProgressCircle from '../ProgressCircle/index';
import Slogan from '../Slogan/index';
import GoalText from '../GoalText/index';
import { getTodaysDate } from '../Services/helpers';
import {
	CURRENT_POSITION,
	WHOLE_ITERATION,
	START_DATE,
	START_YEAR_DATE,
	END_YEAR_DATE,
	DAYS_IN_MONTH,
	DAYS_IN_YEAR,
} from '../Services/constants';
import './style.css';

let interval = null;

class App extends Component {
	state = {
		progress: 0,
		red: 255,
		green: 255,
		blue: 255,
		percent: 0,
		currGreen: 0,
		currBlue: 0,
	}

	componentDidMount() {
		interval = setInterval(this.handleGradient, 500);
		this.getCurrentPosition();
	}

	handleGradient = () => {
		let {
			percent,
			red,
			green,
			blue,
		} = this.state;
		
		if (red === 255 && green === 0, blue === 0) {
			clearInterval(interval);
			interval = null;
			
			setTimeout(() => {
				this.setState({
					green: 255,
					blue: 255,
				});
				
				clearInterval(interval);
				interval = null;
				
				interval = setInterval(this.handleGradient, 500);
			}, 10 * 1000);
		} else {
			percent = Math.floor(((WHOLE_ITERATION - green) / WHOLE_ITERATION) * 100);
			green--;
			blue--;
			
			this.setState({
				progress: `${percent + 1}`,
				green,
				blue,
			});
    }
	}

	formatDate = () => {
		const today = getTodaysDate();
		return `${today.day}.${today.month}.${today.year}`;
	}

	getCurrentPosition = () => {
    let currGreen, currBlue, duration;
    const start = JSON.parse(JSON.stringify(START_DATE));
    const today = getTodaysDate();
    const firstDuration = DAYS_IN_MONTH - start.day;
    const nextDuration = today.day;
    if (start.year === today.year) {
        if (start.month === today.month) {
            duration = today.day - start.day;
        } else if (start.month < today.month) {
            let numberOfFullMonths = today.month - start.month > 1 ? (today.month - start.month - 1) : 0;
            duration = firstDuration + numberOfFullMonths * DAYS_IN_MONTH + nextDuration; 
        }
    } else if (start.year < today.year) {
        if (START_YEAR_DATE.month === today.month) {
            let numberOfFullMonthsInPrevYear = END_YEAR_DATE.month - start.month;
            duration = firstDuration + numberOfFullMonthsInPrevYear * DAYS_IN_MONTH + nextDuration;
        } else if (START_YEAR_DATE.month < today.month) {
            let numberOfFullYears = today.year - start.year > 1 ? (today.month - start.month - 1) : 0;
            let numberOfFullMonthsInPrevYear = END_YEAR_DATE.month - start.month;
            let numberOfFullMonthsInCurrYear = today.month - START_YEAR_DATE.month;
            const totalNumberOfFullMonths = numberOfFullMonthsInPrevYear + numberOfFullMonthsInCurrYear;
            duration = firstDuration + numberOfFullYears * DAYS_IN_YEAR + totalNumberOfFullMonths * DAYS_IN_MONTH + nextDuration;
        }
    }

    currGreen = CURRENT_POSITION - duration;
		currBlue = CURRENT_POSITION - duration;
		this.setState({
			currGreen,
			currBlue,
		});
	}

	render() {
		const {
			progress,
			red,
			green,
			blue,
			currGreen,
			currBlue,
		} = this.state;

		const today = this.formatDate();

    return (
      <div className="App">
				<div className="header">
        	<h6 id="title"><a name="top" href="#goal">My goal is coming...</a></h6>
					<AudioBackground />
				</div>

				<div className="gradient"></div>

				<div className="current">
					<CurrentCircle
						date={today}
						green={currGreen}
						blue={currBlue}
					/>
					<ProgressCircle
						progress={progress}
						red={red}
						green={green}
						blue={blue}
					/>
				</div>

				<Slogan />
				
				<p className="goal">
					<GoalText /><br/>
        	<a id="to-top" href="#top">To top</a>
    		</p>
      </div>
    );
  }
}

export default App;