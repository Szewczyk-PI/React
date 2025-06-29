import Entry from './components/Entry';
import Navbar from './components/Navbar';
import Test from './components/Test';
export default function () {
	return (
		<>
			<Navbar />
			<Entry />
			<Test
				img='./images/mr-whiskerson.png'
				name='Mr. Whiskerson'
				phone='(212) 555-1234'
				email='mr.whiskaz@catnap.meow'
			/>
			<Test
				img='./images/fluffykins.png'
				name='Fluffykins'
				phone='(212) 555-2345'
				email='fluff@me.com'
			/>
			<Test
				img='./images/felix.png'
				name='Felix'
				phone='(212) 555-4567'
				email='thecat@hotmail.com'
			/>
			<Test
				img='./images/pumpkin.png'
				name='Pumpkin'
				phone='(0800) CAT KING'
				email='pumpkin@scrimba.com'
			/>
		</>
	);
}
