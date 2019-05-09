import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'nothing',
    }
  }

  handleSearch = e => {
    e.prevenDefault();
    let location = e.target.value;
    this.setState({location});
  };
  render(){
    return(
      <form>
        <input />
        <button onClick={this.handleSearch}>Search</button>
      </form>
    );
  }
}

export default SearchForm;