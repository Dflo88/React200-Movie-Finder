import React from 'react';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Movie Search Container</h1>
                <div className='searchBarContainer'>
                    <input type='text' className='searchInput' placeholder='Enter a movie title to search'/>
                    <button type='button' className='searchButton'>Go!</button>
                </div>
                <div className='movieSearchContainer'>
                    <img className='moviePoster' src="https://pbs.twimg.com/media/DYSSNlFU8AE4ZK9?format=jpg&name=900x900" alt="not working" width='200' height='300'/>
                    <div className='movieDetails'>
                        <p className='movieTitle'>Sanic The Hedgehog</p><br/>
                        <p className='movieReleaseYear'>2019</p>
                        <button type='button' className='moreInfoButton'>More Info</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieSearchContainer;