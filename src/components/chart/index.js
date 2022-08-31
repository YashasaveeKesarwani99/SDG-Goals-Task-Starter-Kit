/** @format */
import React from "react";
import "./style.css";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart, registerables } from "chart.js";

export default function ChartComponent() {
	Chart.register(...registerables);

	const Data = useSelector((state) => state.Data);

	const labels = Data.map((obj) => obj.area_name);

	const options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				position: "left",
				text: "SDG scores",
			},
		},
	};

	return (
		<div className='container-chart'>
			<div className='chart'>
				<Bar
					options={options}
					data={{
						labels,
						datasets: [
							{
								label: "score",
								data: Data.map((obj) => obj.value.value),
								backgroundColor: "rgba(53, 162, 235, 0.5)",
							},
						],
					}}
				/>
			</div>
		</div>
	);
}
