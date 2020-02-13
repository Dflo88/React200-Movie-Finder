const defaultState = {
    movieDetails: [],
};

export default function movieDetailContainerReducer (state = defaultState, action){
    const { type, payload } = action;

    switch (type) {
        case 'SEARCH_MOVIE_DETAILS_FULFILLED': {
            return {
                movieDetails: payload.data
            }
        }

        default: {
            return state;
        }
    }  
}