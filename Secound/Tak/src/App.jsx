import Entry from './components/Entry';
import Navbar from './components/Navbar';
import data from './components/data';
export default function () {
	const dataEntry = data.map((dat) => {
		return <Entry key={dat.id} {...dat} />;
	});

	return (
		<>
			<Navbar />
			<main className='container'>{dataEntry}</main>
		</>
	);
}
