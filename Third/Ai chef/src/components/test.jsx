import React from 'react';

export default function Test() {
	function signUp(formData) {
		const data = Object.fromEntries(formData);
		const dieta = formData.getAll('dietaryRestrictions');
		const allData = {
			...data,
			dietaryRestrictions: dieta,
		};
		console.log(allData);
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
					<label htmlFor='favColor'>What is yout favorite color?</label>
					<select name='favColor' id='favColor' required>
						<option value='' disabled>
							Pick Color
						</option>
						<option value='Red'>Red</option>
						<option value='Blue'>Blue</option>
						<option value='Green'>Green</option>
					</select>
				</fieldset>

				<button>Submit</button>
			</form>
		</section>
	);
}
