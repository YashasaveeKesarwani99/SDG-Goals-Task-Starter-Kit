/** @format */

import React from "react";
import { YEARS } from "../../config";

export default function Year({ setInputs }) {
	return (
		<div className='goal'>
			<select
				onChange={(e) =>
					setInputs((ele) => {
						return {
							...ele,
							year: e.target.value,
						};
					})
				}>
				<option>Select Year</option>
				{YEARS.map((goal) => (
					<option value={goal}>{goal}</option>
				))}
			</select>
		</div>
	);
}
