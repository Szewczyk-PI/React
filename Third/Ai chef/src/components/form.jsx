function Form() {
	const ingredients = ['Chicken', 'Oregano', 'Tomatoes'];
	const listIng = ingredients.map((ing) => <li key={ing}>{ing}</li>);
	function consola() {
		console.log('Form submited!');
	}
	return (
		<main>
			<form onSubmit={consola()} className='add-ingredient-form'>
				<input aria-label='Add ingredient' placeholder='e.g. oregano' />
				<button>Add ingredient</button>
			</form>
			<ul>{listIng}</ul>
		</main>
	);
}

export default Form;
