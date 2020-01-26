import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    console.log(this.props, 'inside index file')
    return {
        description: store.searchBar.description,
        // movieData: store.searchBar.movieData,
    };
}

export default connect(mapStoreToProps)(SearchBar)