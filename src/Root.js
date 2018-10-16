import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './Home';
import Gifs from './Gifs';
import store from './redux/store';

export default class Root extends React.Component {
	render() {
		return (
			<Router>
				<Stack key="root">
					<Scene key="home" component={Home} title="Home" />
					<Scene key="gifs" component={Gifs} title="Gifs" />
				</Stack>
			</Router>
		);
	}
}
