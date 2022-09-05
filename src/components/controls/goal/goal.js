/** @format */

import React from "react";
import { GOALS_LIST } from "../../../config";

export default function Goal({ setInputs, inputs }) {
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
				}
				value={inputs.goal}>
				<option>Select Goal</option>
				{GOALS_LIST.map((goal) => (
					<option value={goal} key={goal}>
						{goal}
					</option>
				))}
			</select>
		</div>
	);
}
