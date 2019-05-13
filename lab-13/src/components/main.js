import React from 'react';
import Map from './map.js';
import SearchForm from './searchForm';
import SearchResults from './searchResults';

class Main extends React.Component {
  render() {
    // console.log(this.props.locObj)
    return(
      <>
        <Map daK = {process.env.REACT_APP_GEOCODE_API_KEY} locObj = {this.props.locObj}/>
        <SearchForm 
          searchHandler = {this.props.searchHandler} 
          locHandler = {this.props.locHandler} 
          locObj = {this.props.locObj} 
          searchVal = {this.props.searchVal}
        />
        <SearchResults locObj = {this.props.locObj} searchVal = {this.props.searchValue}/>
      </>
    );
  }
}

export default Main;