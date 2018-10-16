import React from 'react';
import Root from './src/Root';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/redux/store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store.store}>
				<PersistGate persistor={store.persistor}>
					<Root />
				</PersistGate>
			</Provider>
		);
	}
}
