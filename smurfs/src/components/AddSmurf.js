import React from 'react';
import axios from 'axios';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';

class AddSmurf extends React.Component {
	state = {
		name: '',
		age: 0,
		height: ''
	};

	handleNameChange = (event) => {
		this.setState({
			...this.state,
			name: event.target.value
		});
	};
	handleAgeChange = (event) => {
		this.setState({
			...this.state,
			age: Number(event.target.value)
		});
	};
	handleHeightChange = (event) => {
		this.setState({
			...this.state,
			height: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const smurf = {
			name: this.state.name,
			age: this.state.age,
			height: this.state.height
		};
		console.log(smurf);
		axios.post(`http://localhost:3333/smurfs`, smurf).then((res) => {
			console.log(res);
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Smurf Name:
						<input type="text" name="name" onChange={this.handleNameChange} />
					</label>
					<label>
						Smurf Age:
						<input type="number" name="age" onChange={this.handleAgeChange} />
					</label>
					<label>
						Smurf Height:
						<input type="text" name="height" onChange={this.handleHeightChange} />
					</label>
					<button type="submit">Add Smurf</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		error: state.error
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(AddSmurf);
