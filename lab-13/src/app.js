import React from 'react';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Header />
        <Map />
        <Search />
        <Columns />
      </React.Fragment> 
    );
  }

}
const Header = () => {
    return(
      <h1>
        City Explorer
      </h1>
    );
};
class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      // placeholder
      <img src ='https://uploads.visitseattle.org/2018/06/20095301/VSMap_Puget-Sound-e1529519202971-450x300.jpg' alt='placeholder - codefellows location' />
    );
  }

}

class Search extends React.Component {
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

class Columns extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <Weather />
        <Events />
        <Movies />
        <Yelp />
        <Hiking />
      </div>
    );
  }
}

class Weather extends Columns {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section>
        <h3>Forecast</h3>
        <p>
          {/* {this.state.location}<br/> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

    );

  }
}

class Events extends Columns {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section>
        <h3>Eventbrite</h3>
        <p>
          {/* {this.state.location}<br/> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

    );

  }
}

class Movies extends Columns {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section>
        <h3>The MovieDB</h3>
        <p>
          {/* {this.state.location}<br/> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

    );

  }
}

class Yelp extends Columns {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section>
        <h3>Yelp</h3>
        <p>
          {/* {this.state.location}<br/> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

    );

  }
}

class Hiking extends Columns {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section>
        <h3>Trails</h3>
        <p>
          {/* {this.state.location}<br/> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

    );

  }
}
export default App;
