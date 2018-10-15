import { FAVORITE } from './actions';

export default (state = { favorites: [] }, action) => {
	switch (action.type) {
		case FAVORITE:
			const includes = state.favorites.findIndex((tmp) => tmp.id === action.payload.id) !== -1;
			if (!includes) {
				return { ...state, favorites: [ ...state.favorites, action.payload ] };
			} else {
				return { ...state, favorites: state.favorites.filter((tmp) => tmp.id !== action.payload.id) };
			}
		default:
			return state;
	}
};
