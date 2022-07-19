//imports from antd
import { Card, Col, Button, Image } from 'antd';

function FoodBox({ food, deleteFood }) {
	return (
		<Col>
			<Card title={food.name} style={{ width: 230, height: 350, margin: 10 }}>
				<Image src={food.image} width="150px" height="100px" />
				<p>Calories: {food.calories}</p>
				<p>
					Servings: <span className="boldText">{food.servings}</span>
				</p>
				<p className="boldText">Total calories: {food.calories * food.servings}</p>
				<Button type="primary" onClick={() => deleteFood(food.name)}>
					{' '}
					Delete{' '}
				</Button>
			</Card>
		</Col>
	);
}

export default FoodBox;
