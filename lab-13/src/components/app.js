import React from 'react';
import Header from './header.js'
import Main from './main'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
      geoObject: {
        "search_query": "Lynnwood",
        "formatted_address": "Lynnwood, WA, USA",
        "latitude": 47.8209301,
        "longitude": -122.3151314
      }
    }
  }
  handleSearch = (value) => {
    this.setState({ 
      searchValue: value 
    });
      // console.log('inside of handleSearch',this.state.searchValue);
  }

  handleLocData = (data) => {
    this.setState({
      geoObject: data
    });
  }

  render(){
    // console.log(this.state.searchValue)
    // console.log(this.state.geoObject)
    return (
      <>
        <Header />
        <h1>{this.state.geoObject.formatted_address}</h1>
        <Main searchHandler = {this.handleSearch} locHandler = {this.handleLocData} locObj = {this.state.geoObject} searchVal = {this.state.searchValue}/>
      </> 
    );
  }

}


export default App;
