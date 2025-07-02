import Entry from './components/Entry';
import Navbar from './components/Navbar';
import jokesData from './components/jokesData';
import Test from './components/Test';
import data from './components/data';
export default function () {
	const dataEntry = data.map((dat) => {
		return (
			<Entry
				img={{
					src: dat.img.src,
					alt: dat.img.alt,
				}}
				title={dat.title}
				country={dat.country}
				googleMapsLink={dat.googleMapsLink}
				dates={dat.dates}
				text={dat.text}
			/>
		);
	});

	return (
		<>
			<Navbar />
			<main className='container'>{dataEntry}</main>
		</>
	);
}
