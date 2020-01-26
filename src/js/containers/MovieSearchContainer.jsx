import React from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import MovieMatches from '../components/movieMatches/MovieMatches';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props, 'from movie search container')
        return (
            <div>
                <SearchBar/>
                <MovieMatches/>
            </div>
        )
    }
}

export default MovieSearchContainer;