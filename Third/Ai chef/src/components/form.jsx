function Form() {
	const ingredients = ['Chicken', 'Oregano', 'Tomatoes'];
	const listIng = ingredients.map((ing) => <li key={ing}>{ing}</li>);
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newIngredient = formData.get('ingredient');
		ingredients.push(newIngredient);
		console.log(ingredients);
	}

	return (
		<main>
			<form onSubmit={handleSubmit} className='add-ingredient-form'>
				<input
					aria-label='Add ingredient'
					placeholder='e.g. oregano'
					name='ingredient'
				/>
				<button>Add ingredient</button>
			</form>
			<ul>{listIng}</ul>
		</main>
	);
}

export default Form;
