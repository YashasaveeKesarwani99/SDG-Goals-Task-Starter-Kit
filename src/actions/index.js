/** @format */

import DATA2018 from "../data/2018.json";
import DATA2019 from "../data/2019.json";
import DATA2020 from "../data/2020.json";

//Action creators
export const Calculate =
	({ year, goal }) =>
	(dispatch) => {
		//conditionally creating arrays according to the year and goal chosed
		if (year === "2018") {
			const resArray = DATA2018.map((obj) => {
				return {
					area_name: obj.area_name,
					value: obj.chartdata.find(
						(inner_obj) => inner_obj.name === goal.split(":")[0]
					),
				};
			});
			dispatch({
				type: "NEW_DATA",
				payload: resArray,
			});
		} else if (year === "2019") {
			const resArray = DATA2019.map((obj) => {
				return {
					area_name: obj.area_name,
					value: obj.chartdata.find(
						(inner_obj) => inner_obj.name === goal.split(":")[0]
					),
				};
			});
			dispatch({
				type: "NEW_DATA",
				payload: resArray,
			});
		} else if (year === "2020") {
			const resArray = DATA2020.map((obj) => {
				return {
					area_name: obj.area_name,
					value: obj.chartdata.find(
						(inner_obj) => inner_obj.name === goal.split(":")[0]
					),
				};
			});
			dispatch({
				type: "NEW_DATA",
				payload: resArray,
			});
		}
	};
