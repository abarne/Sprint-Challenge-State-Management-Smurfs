import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<AddSmurf />
					<Smurfs />
				</div>
			</div>
		);
	}
}

export default App;
