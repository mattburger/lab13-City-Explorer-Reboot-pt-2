import React from 'react';
import Map from './map.js';
import SearchForm from './searchForm';
import SearchResults from './searchResults';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <Map />
        <SearchForm locHandler = {this.props.locHandler} />
        <SearchResults location = {this.state.location}/>
      </>
    );
  }
}

export default Main;