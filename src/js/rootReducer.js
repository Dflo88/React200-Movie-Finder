import { combineReducers } from 'redux';
import movieSearchReducers from './containers/components/movieSearch/movieSearchReducers'

const rootReducer = combineReducers({
    movieSearch: movieSearchReducers,
});

export default rootReducer;