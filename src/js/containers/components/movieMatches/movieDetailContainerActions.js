import axios from 'axios';

export function searchMovieDetails(movieId) {
    return {
        type: 'SEARCH_MOVIE_DETAILS',
        payload: axios.get(`/movie/${movieId}`)
    }
}