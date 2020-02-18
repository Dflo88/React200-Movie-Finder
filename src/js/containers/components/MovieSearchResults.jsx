import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

export default function MovieSearchResults (props) {
    const { posterLink, title, releaseYear, imdbID } = props
    return (
        <div className='movieSearchContainer'>
            <img className='moviePoster' src={posterLink} alt='no movie poster available' width='200' height='300'/>
            <div className='movieDetails'>
                <p className='movieTitle'>{title}</p><br/>
                <p className='movieReleaseYear'>{releaseYear}</p>
                <Link to={'/movie/' + title}>
                <button 
                type='button' 
                className='moreInfoButton'
                onClick={() => props.handleMovieIdClick(imdbID)}
                >More Info</button>
                </Link>
            </div>
        </div>
    )
}