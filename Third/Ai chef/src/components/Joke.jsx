import { useState } from 'react';

export default function Joke(props) {
	/**
	 * Challenge:
	 * - Create state `isShown` (boolean, default to `false`)
	 * - Add a button that toggles the value back and forth
	 */
	const [isShown, setIsShown] = useState(false);

	function toggleShown() {
		setIsShown((prevShown) => !prevShown);
	}
	console.log();
	return (
		<div>
			{props.setup && <h3>{props.setup}</h3>}
			<button onClick={toggleShown}>Show punchline</button>
			<p>{props.punchline}</p>
			<hr />
		</div>
	);
}
