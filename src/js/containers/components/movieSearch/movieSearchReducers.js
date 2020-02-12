const defaultState = {
    description: '',
    movieData: null,
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
            console.log(action)
            return {
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

        default: {
            return state;
        }
    }  
}