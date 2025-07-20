import React from 'react';
import ReactDOM from 'react-dom/client';
// import './test.css';
export default function Test() {
	function handleSubmit(formData) {
		const email = formData.get('email');
		const pass = formData.get('password');
		console.log(email);
		console.log(pass);
	}

	return (
		<section>
			<h1>Signup form</h1>
			<form action={handleSubmit}>
				<label htmlFor='email'>Email:</label>
				<input
					id='email'
					type='email'
					name='email'
					placeholder='joe@schmoe.com'
				/>

				<br />
				<label htmlFor='password'>Password:</label>
				<input id='password' type='password' name='password'></input>
				<br />
				<button>Submit</button>
			</form>
		</section>
	);
}
