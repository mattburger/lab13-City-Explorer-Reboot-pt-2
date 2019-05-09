import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'nothing',
    }
  }

  handleInput = e =>{
    let location = e.target.value;
    this.props.locationHandler(location);
  }
  handleSearch = e => {
    e.prevenDefault();
    let location = this.state.location;
    this.setState({location});

  };
  render(){
    return(
      <form>
        <input onChange={this.handleInput}/>
        <button onClick={this.handleSearch}>Search</button>
      </form>
    );
  }
}

export default SearchForm;