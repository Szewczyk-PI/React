import { useState } from 'react';

export default function Joke(props) {
	const [isShown, setIsShown] = useState(false);

	function toggleShown() {
		setIsShown((prevShown) => !prevShown);
	}

	return (
		<div>
			{props.setup && <h3>{props.setup}</h3>}
			<button onClick={toggleShown}>Show punchline</button>
			{isShown && <p>{props.punchline}</p>}

			<hr />
		</div>
	);
}
