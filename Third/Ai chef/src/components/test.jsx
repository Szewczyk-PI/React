import { useState } from 'react';
import './test.css';

function Test() {
	let [isGoingOut, setIsGoingOutsetToggle] = useState(true);
	function toggle() {
		setIsGoingOutsetToggle(!isGoingOut);
	}

	let changeSet = isGoingOut ? 'yes' : 'no';

	return (
		<main>
			<h1 className='title'>Do I feel like going out tonight?</h1>
			<button onClick={toggle} className='value'>
				{changeSet}
			</button>
		</main>
	);
}

export default Test;
