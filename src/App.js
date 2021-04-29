import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components';

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Landing} />
				</Switch>
			</div>
		</Suspense>
	);
}

export default App;
