import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'nothing',
    }
  }

  handleInput = e => {
    let location = e.target.value;
    return location;
  }
  handleSearch = e => {
    e.prevenDefault();
    let loc = this.handleInput(e);
    this.props.locHandler(loc);

  };
  render(){
    return(
      <form>
        <input onChange={this.handleInput}/>
        <button onSubmit={this.handleSearch}>Search</button>
      </form>
    );
  }
}

export default SearchForm;