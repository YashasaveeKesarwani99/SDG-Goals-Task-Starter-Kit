/** @format */

import { useEffect, useState } from "react";
import "./app.css";

import Chart from "./components/chart";
import Map from "./components/map";
import Controls from "./components/controls";

//importing actions
import { actionName } from "./actions";

//importes for managing state
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();

	const [inputs, setInputs] = useState({
		year: 0,
		goal: "",
	});

	useEffect(() => {
		var local_year = inputs.year;
		var local_goal = inputs.goal;

		if (local_year && local_goal.length) {
			dispatch(actionName({ year: local_year, goal: local_goal }));
		}
	}, [inputs.year, inputs.goal]);

	return (
		<div className='App'>
			<div className='side'>
				<Controls setInputs={setInputs} />
				<Chart />
			</div>
			<Map />
		</div>
	);
}

export default App;
