/** @format */

import React from "react";
import { YEARS } from "../../../config";

export default function Year({ setInputs, inputs }) {
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
				}
				value={inputs.year}>
				<option>Select Year</option>
				{YEARS.map((year) => (
					<option value={year} key={year}>
						{year}
					</option>
				))}
			</select>
		</div>
	);
}
