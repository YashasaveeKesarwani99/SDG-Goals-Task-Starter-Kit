/** @format */
import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart, registerables } from "chart.js";

export default function ChartComponent() {
	Chart.register(...registerables);

	const Data = useSelector((state) => state.Data);

	const labels = Data.map((obj) => obj.area_name);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Chart.js Bar Chart",
			},
		},
	};

	return (
		<div className='chart'>
			<Bar
				options={options}
				data={{
					labels,
					datasets: [
						{
							label: "dataset 1",
							data: Data.map((obj) => obj.value.value),
						},
					],
				}}
			/>
		</div>
	);
}
