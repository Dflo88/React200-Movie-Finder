import React from 'react';

export default function MovieSearchResults (props) {
    console.log(props)

    return (
        <div className='movieSearchContainer'>
            <img className='moviePoster' src={props.posterLink} alt="not working" width='200' height='300'/>
            <div className='movieDetails'>
                <p className='movieTitle'>{props.title}</p><br/>
                <p className='movieReleaseYear'>{props.releaseYear}</p>
                <button 
                type='button' 
                className='moreInfoButton'
                >More Info</button>
            </div>
        </div>
    )
}