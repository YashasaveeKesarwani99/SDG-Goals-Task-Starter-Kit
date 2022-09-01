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

	//parent state storing the year and specific goal entered by the user
	const [inputs, setInputs] = useState({
		year: 0,
		goal: "",
	});

	useEffect(() => {
		if (inputs.year && inputs.goal.length) {
			dispatch(actionName(inputs));
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
