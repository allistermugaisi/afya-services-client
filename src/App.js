import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import { Landing } from './components';
import { Loading } from './Loading';
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

// Code-splitting
const Homepage = lazy(() => import('./components/Landing/Landing'));

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Switch>
					<Suspense fallback={<Loading />}>
						<Route exact path="/" component={Homepage} />
					</Suspense>
					{/* <Route path="/signin" component={Login} />
						<Route path="/payment" component={Payment} /> */}
				</Switch>
			</ThemeProvider>
		</div>
	);
}

export default App;
