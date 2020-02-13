import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
        description: store.movieSearch.description,
        movieSearchResults: store.movieSearch.movieData,
        movieInfo: store.movieSearch.movieDetails
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);