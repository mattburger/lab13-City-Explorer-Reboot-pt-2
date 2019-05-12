import React from 'react';
import superagent from 'superagent';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  handleDarkData = (value) =>{
    this.setState({ 
      darkSkyData: value 
    });
  }
  handleEventData= (value) =>{
    this.setState({ 
      eventData: value 
    });
  }
  render() {
    return(
      <>
        <DarkSky locObj = {this.props.locObj} darkHandle = {this.handleDarkData} darkRenderedItems = {this.state.darkSkyData} />
        <Eventbrite locObj = {this.props.locObj} eventHandle = {this.handleEventData} eventRenderedItems = {this.state.eventData} />
        <MovieDB />
        <Yelp />
        <Trails />
      </>
    );
  }
}
class DarkSky extends React.Component {

  componentDidMount(){
    //console.log('DarkSky1 ***********', this.props.locObj)
    this.getDarkData(this.props.locObj);
  }
  componentDidUpdate(prevProps){
    if(this.props.locObj !== prevProps.locObj){
      this.getDarkData(this.props.locObj);
      //console.log('DarkSky2 ***********', this.props.locObj)
    }
  }

  getDarkData = async geoData => {
    let svr_url = 'https://city-explorer-backend.herokuapp.com/weather';
    // let svr_url = 'http://localhost:3000/weather';
    let dark_data = await superagent.get(svr_url).query({data: geoData});
    console.log('darksky data after get',dark_data);
    let darkItems = dark_data.body.map((item, i) => <li key={i}>{`${item.time}: ${item.forecast}`}</li>);
    console.log(darkItems);
    this.props.darkHandle(darkItems);
  }

  render(){
    return(
      <section>
        <h3>Forecast</h3>
        <ul>{this.props.darkRenderedItems}</ul>
      </section>

    );

  }
}

class Eventbrite extends React.Component {

  componentDidMount(){
    this.getEventData(this.props.locObj);
  }
  componentDidUpdate(prevProps){
    if(this.props.locObj !== prevProps.locObj){
      this.getEventData(this.props.locObj);
    }
  }

  getEventData = async geoData => {
    console.log('INSIDE GETEVENDATA!!!!!!');
    let svr_url = 'https://city-explorer-backend.herokuapp.com/events';
    // let svr_url = 'http://localhost:3000/events';
    let event_data = await superagent.get(svr_url).query({data: geoData});
    console.log('Eventbrite data after get', event_data);
    // let eventItems = event_data.body.map((item, i) => <li key={i}>{`${item.time}: ${item.forecast}`}</li>);
    console.log(event_data);
    // this.props.eventHandle(eventItems);
  }

  render(){
    return(
      <section>
        <h3>Eventbrite</h3>
        {/* <ul> {this.props.eventRenderedItems} </ul> */}
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