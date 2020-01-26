import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer'

const rootReducer = combineReducers({
    searchBar: searchBarReducer,
});

export default rootReducer;