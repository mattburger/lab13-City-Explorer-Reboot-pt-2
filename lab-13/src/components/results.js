import React from 'react';

class Results extends React.Component {
  render() {
    return(
      <>
        <DarkSky />
        <Eventbrite />
        <MovieDB />
        <Yelp />
        <Trails />
      </>
    );
  }
}

class DarkSky extends React.Component {
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

class Eventbrite extends React.Component {
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

class MovieDB extends React.Component {
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

class Yelp extends React.Component {
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

class Trails extends React.Component {
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

export default Results;