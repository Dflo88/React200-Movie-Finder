import React from 'react';

// import{
//     updateSearchBarDescription,
//     searchWeather
// } from './SearchBarActions';

export default class MovieMatches extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='movieSearchContainer'>
                <img className='moviePoster' src='https://vignette.wikia.nocookie.net/meme/images/4/42/1385136139955.png/revision/latest?cb=20150207013804' alt="not working" width='200' height='300'/>
                <div className='movieDetails'>
                    <p className='movieTitle'>Sanic The Hedgehog</p><hr/>
                    <p className='movieReleaseYear'>2019</p>
                    <button type='button' className='moreInfoButton'>More Info</button>
                </div>
            </div>
        );
    }
}