/** @format */

import React, { useEffect } from "react";

import Chart from "../components/chart";
import Map from "../components/map";
import Controls from "../components/controls";

//triggering action
import { useDispatch } from "react-redux";

//getting state from the params
import { useParams } from "react-router-dom";

//importing actions
import { Calculate } from "../actions";

const ChartPage = ({ setInputs, inputs }) => {
	const dispatch = useDispatch();

	const { year, goal } = useParams();

	//dispatching actions after validating inputs
	useEffect(() => {
		if (year !== "Select%20Year") dispatch(Calculate({ year, goal }));
	}, [year, goal]);

	return (
		<div className='App'>
			<div className='side'>
				<Controls setInputs={setInputs} inputs={inputs} />
				<Chart />
			</div>
			<Map />
		</div>
	);
};

export default ChartPage;
