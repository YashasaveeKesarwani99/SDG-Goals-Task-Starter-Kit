/** @format */

import React from "react";

import Chart from "../components/chart";
import Map from "../components/map";
import Controls from "../components/controls";

const Main = ({ setInputs, inputs }) => {
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

export default Main;
