//imports from antd
import { Divider, Input } from 'antd';
//import useState
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
	const [ name, setName ] = useState('');
	const [ calories, setCalories ] = useState(0);
	const [ image, setImage ] = useState('');
	const [ servings, setServings ] = useState(0);

	const handleNameInput = (e) => setName(e.target.value);

	const handleCaloriesInput = (e) => setCalories(e.target.value);

	const handleImageInput = (e) => setImage(e.target.value);

	const handleServingsInput = (e) => setServings(e.target.value);

	const submitFormInfo = (e) => {
		e.preventDefault();
		const newFood = { name, image, calories, servings };

		console.log('Submitted', newFood);
		props.addFood(newFood);

		// Reset the state
		setName('');
		setCalories(0);
		setImage('');
		setServings(0);
	};

	return (
		<div className="parentDivForm">
			<Divider>
				<h1>Add food entry</h1>
			</Divider>
			<form className="formAddFoodForm" onSubmit={submitFormInfo}>
				<label className="boldText">Name</label>
				<Input value={name} type="text" onChange={handleNameInput} />

				<label className="boldText">Image</label>
				<Input value={image} type="text" onChange={handleImageInput} />

				<label className="boldText">Calories</label>
				<Input value={calories} type="number" onChange={handleCaloriesInput} />

				<label className="boldText">Servings</label>
				<Input value={servings} type="number" onChange={handleServingsInput} />

				<button type="submit">Create</button>
			</form>
		</div>
	);
}

export default AddFoodForm;
