import React from 'react';
import NavBar from './NavBar';

// Main class
class App extends React.Component {

	render() {
		return (
			<div>
				<NavBar />
					<div className="container">
						{this.props.children}
					</div>
			</div>
		)
	}
}

export default App;