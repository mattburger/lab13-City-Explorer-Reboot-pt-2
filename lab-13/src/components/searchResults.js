import React from 'react';
import Results from './results.js'

class SearchResults extends React.Component {

  render(){
    return(
      <>
        <Results locObj = {this.props.locObj} />
      </>
    );
  }
}

export default SearchResults;