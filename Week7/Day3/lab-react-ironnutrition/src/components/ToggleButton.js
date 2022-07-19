//imports from antd
import { Divider, Input } from 'antd';

function ToggleButton({ searchInput, searchFoodFilter }) {
	return (
		<div className="parentDivSearch">
			<Divider>
				<h1>Search food</h1>
			</Divider>
			<Input type="text" placeholder="Search food..." value={searchInput} onChange={(e) => searchFoodFilter(e)} />
		</div>
		// <div className="FilterMovies">
		// 	<label>Show movies by first letter:</label>
		// 	<select value={firstLetter} onChange={handleSelect}>
		// 		<option value="All">All</option>
		// 		<option value="A">A</option>
		// 		<option value="B">B</option>
		// 		<option value="C">C</option>
		// 		<option value="D">D</option>
		// 	</select>
		// </div>
	);
}

export default ToggleButton;
