import { useState } from 'react';

function Test() {
	let [op, setOp] = useState(0);

	function handlePlus() {
		setOp((prevOp) => prevOp + 1);
	}
	function handleMinus() {
		setOp((prevOp) => prevOp - 1);
	}

	return (
		<>
			<h1>How many times will Bob say "state" in this section?</h1>
			<div className='counter'>
				<button
					onClick={handleMinus}
					className='minus'
					aria-label='Decrease count'
				>
					–
				</button>
				<h2 className='count'>{op}</h2>
				<button
					onClick={handlePlus}
					className='plus'
					aria-label='Increase count'
				>
					+
				</button>
			</div>
		</>
	);
}

export default Test;
