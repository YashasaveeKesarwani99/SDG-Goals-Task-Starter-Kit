/** @format */

import React from "react";
import { GOALS_LIST } from "../../config";

export default function Goal({ setInputs }) {
	return (
		<div className='goal'>
			<select
				onChange={(e) =>
					setInputs((ele) => {
						return {
							...ele,
							goal: e.target.value,
						};
					})
				}>
				<option>Select Goal</option>
				{GOALS_LIST.map((goal) => (
					<option value={goal.split(":")[0]}>{goal}</option>
				))}
			</select>
		</div>
	);
}
