/** @format */

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useSelector } from "react-redux";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";

import INDIA_TOPO_JSON from "./india.topo.json";

export default function Map() {
	const [tooltipContent, setTooltipContent] = useState("");
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

	const PROJECTION_CONFIG = {
		scale: 350,
		center: [78.9629, 22.5937],
	};

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

	const onMouseEnter = (geo, current) => {
		return () => {
			setTooltipContent(`${geo.properties.name}: ${current.value.value}`);
		};
	};

	const onMouseLeave = () => {
		setTooltipContent("");
	};

	return (
		<div className='map'>
			<ReactTooltip>{tooltipContent}</ReactTooltip>
			<ComposableMap
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
