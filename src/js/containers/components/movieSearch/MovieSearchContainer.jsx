import React from 'react';
import MovieSearchResults from '../MovieSearchResults'
import {
    updateSearchBarDescription,
    searchMovies,
} from './movieSearchActions'

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.movieSearch = this.movieSearch.bind(this);
    }

    handleDescriptionChange(event) {
        const { value } = event.target;
        const { dispatch } = this.props;
        dispatch(updateSearchBarDescription(value));
    }

    movieSearch() {
        const { dispatch, description } = this.props;
        dispatch(searchMovies(description));
    }
    
    render() {
        const { description, movieSearchResults } = this.props;
        return (
            <div>
                <h1>Movie Search Container</h1>
                <div className='searchBarContainer'>
                    <input 
                    type='text' 
                    className='searchInput' 
                    placeholder='Enter a movie title to search'
                    onChange={this.handleDescriptionChange}
                    value={description}
                    />
                    <button 
                    type='button' 
                    className='searchButton'
                    onClick={this.movieSearch}
                    >Go!</button>
                </div>
                {
        
                    movieSearchResults && movieSearchResults.map( data => 
                        <MovieSearchResults
                        key = {data.imdbID}
                        data = {data}
                        title = {data.Title}
                        posterLink = {data.Poster}
                        releaseYear = {data.Year}
                        imdbID = {data.imdbID}
                        />
                    )

                }
            </div>
        )
    }
}

export default MovieSearchContainer;