import React from 'react';
import ReactDOM from 'react-dom/client';
import './test.css';
export default function Test() {
	return (
		<section>
			<h1>Signup form</h1>
			<form>
				<label>
					Email:
					<input type='email' name='email' placeholder='joe@schmoe.com' />
				</label>
				<br />
				<label htmlFor='password'>Password:</label>
				<input id='password' type='password' name='password'></input>
			</form>
		</section>
	);
}
