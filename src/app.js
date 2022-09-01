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

	const [ut, setUt] = useState(false);

	//conditional dispatching of action when the fields have been validated
	useEffect(() => {
		if (inputs.year && inputs.goal.length && inputs.goal !== "Select Goal") {
			dispatch(actionName(inputs, ut));
		}
	}, [inputs.year, inputs.goal]);

	return (
		<div className='App'>
			<div className='side'>
				<Controls setInputs={setInputs} />
				<Chart setUt={setUt} />
			</div>
			<Map />
		</div>
	);
}

export default App;
