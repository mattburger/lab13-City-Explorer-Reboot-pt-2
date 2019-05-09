import React from 'react';
import Results from './results.js'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <>
        <Results location = {this.state}/>
      </>
    );
  }
}

export default SearchResults;