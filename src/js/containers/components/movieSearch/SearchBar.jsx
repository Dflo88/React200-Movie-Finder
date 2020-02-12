import React from 'react';

// import{
//     updateSearchBarDescription,
//     searchWeather
// } from './SearchBarActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        // this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        // this.handleGetWeather = this.handleGetWeather.bind(this);
        // this.handlePredefinedCityWeather = this.handlePredefinedCityWeather.bind(this);
    }

//     handleDescriptionInput(event) {
//         const { dispatch } = this.props;
//         const { value } = event.target;
//         dispatch(updateSearchBarDescription(value));
//     }

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
        return(
            <div className='searchBarContainer'>
                <input type='text' className='searchInput' placeholder='Enter a movie title to search'/>
                <button type='button' className='searchButton'>Go!</button>
            </div>
        );
    }
}