/** @format */

const Data = (initialState = [], action) => {
	switch (action.type) {
		case "NEW_DATA":
			return action.payload;
		default:
			return initialState;
	}
};

export default Data;
