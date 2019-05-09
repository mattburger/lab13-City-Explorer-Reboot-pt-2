import React from 'react';
import Results from './results.js'
import superagent from 'superagent'

class SearchResults extends React.Component {
  getLocation(url){
    let url = 'https://https://city-explorer-backend.herokuapp.com/location';
    fetch(url)
    .then
  }
  render(){
    return(
      <>
        <Results />
      </>
    );
  }
}

export default SearchResults;