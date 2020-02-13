import React from 'react';
import {
    HashRouter as Router,
    Link
  } from 'react-router-dom';
  import {
    searchMovieDetails,
  } from './movieDetailContainerActions'

class MovieDetailContainer  extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(searchMovieDetails('tt0076759'))
    }

    
    render() {
        // console.log(this.props.movieDetails.data.Title)
        // let moviePoster;
        // if (this.props.movieDetails.data.Title){
        //     moviePoster = <div className='movieDetailContainer'>
        //     <div className='moviePosterContainer'>
        //         <img className='moviePoster' src={this.props.movieDetails.data.Poster} alt="not working" width='200' height='300'/>
        //     </div>
        // </div>
        // // }
        const { movieDetails } = this.props   
        console.log(movieDetails) 
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
                <Link to='/'>
                    <p>Go Back</p>
                </Link>
                {
                    (movieDetails.Title) ? (<p>{movieDetails.Title}</p>) : (<p>false</p>)
                }
                {/* <div className='movieDetailContainer'>
                    <div className='moviePosterContainer'>
                        <img className='moviePoster' src={this.props.movieInfo.data.Poster} alt="not working" width='200' height='300'/>
                    </div>
                </div>
                {moviePoster} */}
            </div>
        )
    };
}

export default MovieDetailContainer;