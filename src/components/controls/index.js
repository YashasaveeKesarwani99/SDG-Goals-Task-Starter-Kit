/** @format */
import "./style.css";
import Goal from "./goal/goal";
import Year from "./year/year";

const Controls = () => {
	return (
		<div className='control'>
			<Goal setInputs={setInputs} />
			<Year setInputs={setInputs} />
		</div>
	);
};

export default Controls;
