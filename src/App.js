import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#069c54',
		},
		secondary: {
			main: '#ff1744',
		},
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
		textTransform: 'none',

		button: {
			textTransform: 'none',
		},
	},
});

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="App">
				<ThemeProvider theme={theme}>
					<Switch>
						<Route exact path="/" component={Landing} />
						{/* <Route path="/signin" component={Login} />
						<Route path="/payment" component={Payment} /> */}
					</Switch>
				</ThemeProvider>
			</div>
		</Suspense>
	);
}

export default App;
