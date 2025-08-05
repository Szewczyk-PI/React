import Joke from './components/joke';
import jokesData from './components/jodeData';

export default function App() {
	const jokeElements = jokesData.map((joke) => {
		return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
	});
	return <div>{jokeElements}</div>;
}
