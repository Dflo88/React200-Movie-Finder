const defaultState = {
    description: '',
    movieData:[],
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
                description: '',
                movieData: [{
                    'Title': action.payload.Title,
                    'Release Year': action.payload.Year,
                    'Movie Poster': action.payload.Poster,
                    'IMBD ID': action.payload.imbdID,
                }],
            };
        }

        case 'SEARCH_MOVIE_REJECTED': {
            alert(`I'm sorry, but we cant seem to find any movies matching that title in our database. Please enter a different movie title.`)
            return {
                ...state
            };
        }

        case 'SEARCH_WEATHER_PENDING': {
            return {
                ...state
            };
        }

        default: {
            return state;
        }
    }  
}