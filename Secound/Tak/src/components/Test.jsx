export default function Test(props) {
	console.log(props);
	return (
		<>
			{props.setup && <p>Setup: {props.setup}</p>}
			<p>Punchline: {props.punchline}</p>
			<hr />
		</>
	);
}
