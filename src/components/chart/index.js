/** @format */
import React from "react";
import "./style.css";

//importing chart elements from react chartjs
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

//importing redux elements
import { useSelector, useDispatch } from "react-redux";

export default function ChartComponent() {
	//registering neccesary elements of chartjs
	Chart.register(...registerables);

	//mapping the global "Data" state in Data
	const Data = useSelector((state) => state.Data);

	//initializing dispatch component
	const dispatch = useDispatch();

	//configuration of chart
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
		<>
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
		</>
	);
}
