import React, { Component } from 'react';
import './style.css';

class Slogan extends Component {
	render() {
		return (
			<div>
				<p>
          Imagine you have an eyedropper full of red dye and every day you squeezed one drop of dye into a large bowl
          of water. At first you would see no effect, because the dye would quickly dissipate and be absorbed.
          If, however, you continued to add a drop every day, the water would gradually turn from clear to pale pink,
          to deep rose, and finally to brilliant red.
        </p>
        <p>
          Представьте себе пипетку, наполненную красной краской. Каждый день вы капаете по одной капле в большой сосуд
          с водой. Сначала вы не заметите никакого эффекта: краска будет быстро растворяться и поглощаться водой.
          Однако, продолжая капать по капле в день, вы увидите, что сначала вода станет бледно-розовой, затем розовой,
          пока наконец не превратится в насыщенный красный раствор.
        </p>
			</div>
		);
	}
}

export default Slogan;