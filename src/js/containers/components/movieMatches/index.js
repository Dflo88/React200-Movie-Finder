import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    return {
        movieDetails: store.movieSearch.movieDetails
    };
}

export default connect(mapStoreToProps)(MovieDetailContainer);