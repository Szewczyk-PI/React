import React from 'react';
import avatar from '../images/user.png';
import starFilled from '../images/star-filled.png';
import starEmpty from '../images/star-empty.png';
import './test.css';

export default function Test() {
	const [contact, setContact] = React.useState({
		firstName: 'John',
		lastName: 'Doe',
		phone: '+1 (212) 555-1212',
		email: 'itsmyrealname@example.com',
		isFavorite: false,
	});

	let starIcon = contact.isFavorite ? starFilled : starEmpty;
	let ariaCheck = contact.isFavorite
		? 'Remove from favorites'
		: 'Add to favorites';
	let altCheck = contact.isFavorite ? 'filled star icon' : 'unfilled star icon';
	function toggleFavorite() {
		setContact((prevContact) => {
			return {
				...prevContact,
				isFavorite: !prevContact.isFavorite,
			};
		});
	}

	return (
		<main>
			<article className='card'>
				<img
					src={avatar}
					className='avatar'
					alt='User profile picture of John Doe'
				/>
				<div className='info'>
					<button
						onClick={toggleFavorite}
						aria-pressed={contact.isFavorite}
						aria-label={ariaCheck}
						className='favorite-button'
					>
						<img src={starIcon} alt={altCheck} className='favorite' />
					</button>
					<h2 className='name'>
						{contact.firstName} {contact.lastName}
					</h2>
					<p className='contact'>{contact.phone}</p>
					<p className='contact'>{contact.email}</p>
				</div>
			</article>
		</main>
	);
}
