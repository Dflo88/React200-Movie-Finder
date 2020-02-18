import React from 'react';
import {
    HashRouter as Router,
    Link
  } from 'react-router-dom';

class MovieDetailContainer  extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // console.log(this.props.movieDetails.data.Title)
        const { movieDetails } = this.props   
        
        let moviePoster;
        if (movieDetails.Poster){
            moviePoster = <div className='movieDetailContainer'>
            <div className='moviePosterContainer'>
                <img className='specificMovieDetailPoster' src={movieDetails.Poster} alt="not working" width='200' height='300'/>
            </div>
        </div>
        }
        

        return (
            <div>
                <h1>Movie Finder</h1>
                <div className='movieDetailContainer'>
                    <div className='moviePosterContainer'>
                        <img className='specificMovieDetailPoster' src={movieDetails.Poster} alt="no movie poster available" width='200' height='300'/>
                    </div>
                    <div className='specificMovieDetailContainer'>
                        <p className='specificMovieDetailTitle'><strong>{movieDetails.Title}</strong></p>
                        <p className='specificMovieDetailBubbles'>Released {movieDetails.Year}</p>
                        <p className='specificMovieDetailBubbles'>{movieDetails.Runtime}</p>
                        <p className='specificMovieDetailBubbles'>{movieDetails.Genre}</p>
                        <p className='specificMovieDetailPlot'>{movieDetails.Plot}</p>
                        <p className='specificMovieDetailAwards'>{movieDetails.Awards}</p>
                        <p className='specificMovieDetailScores'><strong>Metascore:</strong> {movieDetails.Metascore}</p>
                        <p className='specificMovieDetailScores'><strong>IMDB:</strong> {movieDetails.imdbRating}</p>
                    </div>
                    <div>
                        <Link to='/'>
                            <button className='returnButton' >Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetailContainer;