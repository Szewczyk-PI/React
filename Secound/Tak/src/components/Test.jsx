export default function Test(props) {
	return (
		<article className='contact-card'>
			<img src={props.img} alt='Photo of Mr. Whiskerson' />
			<h3>{props.name}</h3>
			<div className='info-group'>
				<img src='{props.img}' alt='phone icon' />
				<p>{props.phone}</p>
			</div>
			<div className='info-group'>
				<img src='./images/mail-icon.png' alt='mail icon' />
				<p>{props.email}</p>
			</div>
		</article>
	);
}
