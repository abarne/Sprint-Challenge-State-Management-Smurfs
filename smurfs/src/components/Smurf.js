import React from 'react';

const Smurf = (props) => {
	console.log('smurf component props ', props);

	return (
		<div className="smurf">
			<h1>dispaly smurf info here!</h1>
			<h3>{props.smurf.name}</h3>
			<h3>{props.smurf.age}</h3>
			<h3>{props.smurf.height}</h3>
		</div>
	);
};

export default Smurf;
