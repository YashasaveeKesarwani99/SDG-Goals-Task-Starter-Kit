/** @format */
import "./style.css";
import Goal from "./goal/goal";
import Year from "./year/year";

const Controls = ({ setInputs, inputs }) => {
	return (
		<div className='control'>
			<Goal setInputs={setInputs} inputs={inputs} />
			<Year setInputs={setInputs} inputs={inputs} />
		</div>
	);
};

export default Controls;
