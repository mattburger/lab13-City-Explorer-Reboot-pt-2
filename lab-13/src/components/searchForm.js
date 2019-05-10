import React from 'react';
import superagent from 'superagent'
// import SearchResults from './searchResults';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchValue: this.props.searchVal,
      geoObject: this.props.locObj
    }
  }
  handleInput = e =>{
    this.props.searchHandler(e.target.value);
  }
  handleClick = async e => {
    e.preventDefault();
    let geo_url = 'https://city-explorer-backend.herokuapp.com/location';
    let searchQuery = this.props.searchVal;
    let geo_data = await superagent.get(geo_url).query({data: searchQuery});
    let gd = geo_data.body;
    console.log('geo_data after GET',gd);
    this.props.locHandler(gd);
    // DarkSky.getDarkData(this.props.locObj);
  };


  render(){

    // console.log('locObj',this.props.locObj)
    return(
      <>
        <form onSubmit={this.handleClick}>
          <input onChange={this.handleInput}/>
          <button>Explore</button>
        </form>
      </>
    );
  }
}

export default SearchForm;