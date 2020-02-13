import axios from 'axios';

// updates the search bar and keeps the values input into this
// search bar in the store
export function updateSearchBarDescription(description) {
    return {
        type: 'UPDATE_SEARCHBAR_DESCRIPTION',
        payload: { description }
    };
}

// makes an api call for the movie titled searched in the search bar
export function searchMovies(description) {
    return {
        type: 'SEARCH_MOVIE',
        payload: axios.get(`/movieInfo/:${description}`)
    };
}

//makes an api call for the movie details of a specific movie.
export function searchMovieDetails(movieId) {
    return {
        type: 'SEARCH_MOVIE_DETAILS',
        payload: axios.get(`/movie/${movieId}`)
    }
}