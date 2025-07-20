import React from 'react';
import ReactDOM from 'react-dom/client';
import './test.css';

export default function Test() {
	function signUp(formData) {
		const email = formData.get('email');
		const password = formData.get('password');
		const check = formData.get('employmentStatus');
		const check2 = formData.getAll('dietaryRestrictions');
		console.log(check2);
	}

	return (
		<section>
			<h1>Signup form</h1>
			<form action={signUp}>
				<label htmlFor='email'>Email:</label>
				<input
					id='email'
					defaultValue='joe@schmoe.com'
					type='email'
					name='email'
					placeholder='joe@schmoe.com'
				/>

				<label htmlFor='password'>Password:</label>
				<input
					id='password'
					defaultValue='password123'
					type='password'
					name='password'
				/>

				<label htmlFor='description'>Description:</label>
				<textarea
					id='description'
					name='description'
					defaultValue='This is a description'
				></textarea>

				<fieldset>
					<legend>Employment Status:</legend>
					<label>
						<input type='radio' name='employmentStatus' value='Unemployed' />
						Unemployed
					</label>
					<label>
						<input type='radio' name='employmentStatus' value='Part-time' />
						Part-time
					</label>
					<label>
						<input
							type='radio'
							name='employmentStatus'
							value='Full-time'
							defaultChecked={true}
						/>
						Full-time
					</label>
				</fieldset>

				<fieldset>
					<legend>Dietary restrictions:</legend>
					<label>
						<input type='checkbox' name='dietaryRestrictions' value='kosher' />
						Kosher
					</label>
					<label>
						<input type='checkbox' name='dietaryRestrictions' value='vegan' />
						Vegan
					</label>
					<label>
						<input
							type='checkbox'
							name='dietaryRestrictions'
							defaultChecked={true}
							value='gluten-free'
						/>
						Gluten-free
					</label>
				</fieldset>

				<button>Submit</button>
			</form>
		</section>
	);
}
