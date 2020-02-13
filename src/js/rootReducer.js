import { combineReducers } from 'redux';
import movieSearchReducers from './containers/components/movieSearch/movieSearchReducers';
import movieDetailContainerReducers from './containers/components/movieMatches/movieDetailContainerReducer';

const rootReducer = combineReducers({
    movieSearch: movieSearchReducers,
    movieDetails: movieDetailContainerReducers
});

export default rootReducer;