/** @format */

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

//importing redux elements
import { useSelector } from "react-redux";

//for scaling graph
import { scaleQuantile } from "d3-scale";

//for showing tooltip as we move across the graph of INDIA
import ReactTooltip from "react-tooltip";

//topographical data of INDIA
import INDIA_TOPO_JSON from "./india.topo.json";

export default function Map() {
	//storing the tooltip state
	const [tooltipContent, setTooltipContent] = useState("");

	//mapping the "Data" global state in Data
	const Data = useSelector((state) => state.Data);

	// Red Variants
	const COLOR_RANGE = [
		"#ffedea",
		"#ffcec5",
		"#ffad9f",
		"#ff8a75",
		"#ff5533",
		"#e2492d",
		"#be3d26",
		"#9a311f",
		"#782618",
	];

	//centering the graph according to the desired co-ordinates
	const PROJECTION_CONFIG = {
		scale: 350,
		center: [78.9629, 22.5937],
	};

	//configuring geographical styling
	const geographyStyle = {
		default: {
			outline: "none",
		},
		hover: {
			fill: "#ccc",
			transition: "all 250ms",
			outline: "none",
		},
		pressed: {
			outline: "none",
		},
	};

	const colorScale = scaleQuantile()
		.domain(Data.map((d) => d.value.value))
		.range(COLOR_RANGE);

	//defining the mouse enter and leave event listeners
	const onMouseEnter = (geo, current) => {
		return () => {
			setTooltipContent(
				`${geo.properties.name}: ${current ? current.value.value : "NA"}`
			);
		};
	};
	const onMouseLeave = () => {
		setTooltipContent("");
	};

	return (
		<div
			className='map'
			style={{
				position: "relative",
				overflow: "hidden",
				background: "rgba(53, 162, 235, 0.5)",
			}}>
			<ReactTooltip>{tooltipContent}</ReactTooltip>
			<ComposableMap
				style={{
					position: "absolute",
					height: "80vh",
					border: "none",
					outline: "none",
				}}
				projectionConfig={PROJECTION_CONFIG}
				projection='geoMercator'
				width={600}
				height={220}
				data-tip=''>
				<Geographies geography={INDIA_TOPO_JSON}>
					{({ geographies }) =>
						geographies.map((geo) => {
							const current = Data.find((s) => s.area_name === geo.properties.name);
							return (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									fill={current ? colorScale(current.value.value) : "white"}
									style={geographyStyle}
									onMouseEnter={onMouseEnter(geo, current)}
									onMouseLeave={onMouseLeave}
								/>
							);
						})
					}
				</Geographies>
			</ComposableMap>
		</div>
	);
}
