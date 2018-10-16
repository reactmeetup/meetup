import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducer';

const config = {
	key: 'meetup',
	storage: AsyncStorage
};

const store = createStore(persistReducer(config, reducer));
const persistor = persistStore(store);

export default {
	store,
	persistor
};
