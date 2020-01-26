import React from 'react';

import{
    updateSearchBarDescription,
    searchMovies,
} from '../../actions/index';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        // this.handleSearchMovieTitles = this.handleSearchMovieTitles.bind(this);
    }

    handleDescriptionInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateSearchBarDescription(value));
    }

//     handleGetWeather() {
//         const { description, dispatch } = this.props;
//         dispatch(searchWeather(description));
//     }
// // This function finds the weather for predefined cities located above the search bar.
//     handlePredefinedCityWeather(event) {
//         const { dispatch } = this.props;
//         const { value } = event.target;
//         dispatch(searchWeather(value));
//     }

    render() {
        console.log(this.props, 'inside the searchBar')
        return(
            <div className='searchBarContainer'>
                <input 
                    type='text' 
                    className='searchInput' 
                    placeholder='Enter a movie title to search'
                    onChange = { this.handleDescriptionInput }
                    // value = { movieData }
                    />
                <button type='button' className='searchButton'>Go!</button>
                {/* <div className='movieSearchContainer'>
                        <img className='moviePoster' src="https://pbs.twimg.com/media/DYSSNlFU8AE4ZK9?format=jpg&name=900x900" alt="not working" width='200' height='300'/>
                        <div className='movieDetails'>
                            <p className='movieTitle'>Sanic The Hedgehog</p><br/>
                            <p className='movieReleaseYear'>2019</p>
                            <button type='button' className='moreInfoButton'>More Info</button>
                        </div>
                    </div> */}  
            </div>
        );
    }
}