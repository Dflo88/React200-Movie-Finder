const defaultState = {
    description: '',
    movieData: null,
    movieDetails: '',
};

export default function SearchBarReducer (state = defaultState, action){
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCHBAR_DESCRIPTION': {
            return {
                ...state,
                description: payload.description
            };
        }
        
        case 'SEARCH_MOVIE_FULFILLED': {
            return {
                ...state,
                description: '',
                movieData: payload.data.Search,
            };
        }

        case 'SEARCH_MOVIE_REJECTED': {
            alert(`I'm sorry, but we cant seem to find any movies matching that title in our database. Please enter a different movie title.`)
            return {
                ...state
            };
        }

        case 'SEARCH_MOVIE_DETAILS_FULFILLED': {
            return {
                ...state,
                movieDetails: payload
            }
        }

        default: {
            return state;
        }
    }  
}