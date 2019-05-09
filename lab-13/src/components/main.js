import React from 'react';
import Map from './map.js';
import SearchForm from './searchForm';
import SearchResults from './searchResults';

class Main extends React.Component {
  render() {
    return(
      <>
        <Map />
        <SearchForm locationHandler = {this.props.locationHandler}/>
        <SearchResults />
      </>
    );
  }
}

export default Main;