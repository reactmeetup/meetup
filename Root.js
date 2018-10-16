import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './Home';
import Gifs from './Gifs';

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
