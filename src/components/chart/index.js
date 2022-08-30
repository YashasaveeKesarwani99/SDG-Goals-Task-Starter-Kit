/** @format */

import React from "react";

import { useSelector } from "react-redux";

export default function Chart() {
	const data = useSelector((state) => state.Data);

	console.log(data);

	return <div className='chart'>Chart Here (Bar Chart preferred)</div>;
}
