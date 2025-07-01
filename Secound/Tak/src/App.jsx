import Entry from './components/Entry';
import Navbar from './components/Navbar';
import Test from './components/Test';
export default function () {
	return (
		<>
			<Navbar />
			<Entry />
			<Test punchline="It's hard to explain puns to kleptomaniacs because they always take things literally." />
			<Test
				setup='How did the hacker escape the police?'
				punchline='He just ransomware!'
			/>
			<Test
				setup="Why don't pirates travel on mountain roads?"
				punchline='Scurvy.'
			/>
			<Test
				setup='Why do bees stay in the hive in the winter?'
				punchline='Swarm.'
			/>
			<Test
				setup="What's the best thing about Switzerland?"
				punchline="I don't know, but the flag is a big plus!"
			/>
		</>
	);
}
