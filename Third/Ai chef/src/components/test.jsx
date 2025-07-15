import { useState } from 'react';

function Test() {
	let [result, setResult] = useState('Yes');

	console.log(result);

	function handleClick() {
		setResult('Hell Yes');
	}

	return (
		<>
			<h1 className='title'>Is state important to know?</h1>
			<button onClick={handleClick} className='value'>
				{result}
			</button>
		</>
	);
}

export default Test;
