import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

const Smurfs = (props) => {
	useEffect(() => {
		props.fetchSmurfs();
	}, []);

	if (props.isFetching) {
		return <h1>Loading Smurfs...</h1>;
	}

	return (
		<div>
			<h1>Hello from smurfs component</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
