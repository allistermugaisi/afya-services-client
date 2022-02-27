import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components';
import { Loading } from './utils/useLoading';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
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
		<div className="App">
			<ThemeProvider theme={theme}>
				<Switch>
					<Suspense fallback={<Loading />}>
						<Route exact path="/" component={Landing} />
					</Suspense>
					{/* <Route path="/signin" component={Login} />
						<Route path="/payment" component={Payment} /> */}
				</Switch>
			</ThemeProvider>
		</div>
	);
}

export default App;
