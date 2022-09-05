/** @format */

import { useEffect, useState } from "react";
import "./app.css";

//importing components
import Main from "./routes/main";
import ChartPage from "./routes/chartPage";

//importing routing elements
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();

	//parent state storing the year and specific goal entered by the user
	const [inputs, setInputs] = useState({
		year: 0,
		goal: "",
	});

	//conditional dispatching of action when the fields have been validated
	useEffect(() => {
		if (inputs.year && inputs.goal.length && inputs.goal !== "Select Goal") {
			navigate(`/${inputs.year}/${inputs.goal}`);
		}
	}, [inputs.year, inputs.goal]);

	return (
		<Routes>
			<Route
				path='/:year/:goal'
				element={<ChartPage setInputs={setInputs} inputs={inputs} />}
			/>
			<Route path='/' element={<Main setInputs={setInputs} inputs={inputs} />} />
		</Routes>
	);
}

export default App;
