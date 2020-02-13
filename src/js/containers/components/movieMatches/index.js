import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    return {
        movieDetails: store.movieDetails.movieDetails
    };
}

export default connect(mapStoreToProps)(MovieDetailContainer);