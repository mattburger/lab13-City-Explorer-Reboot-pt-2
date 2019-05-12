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

  handleMovieData= (value) =>{
    this.setState({ 
      movieData: value 
    });
  }

  handleYelpData= (value) =>{
    this.setState({ 
      yelpData: value 
    });
  }

  handleTrailsData= (value) =>{
    this.setState({ 
      trailsData: value 
    });
  }

  render() {
    return(
      <>
        <DarkSky locObj = {this.props.locObj} darkHandle = {this.handleDarkData} darkRenderedItems = {this.state.darkSkyData} />
        <Eventbrite locObj = {this.props.locObj} eventHandle = {this.handleEventData} eventRenderedItems = {this.state.eventData} />
        <MovieDB locObj = {this.props.locObj} movieHandle = {this.handleMovieData} movieRenderedItems = {this.state.movieData}/>
        <Yelp locObj = {this.props.locObj} yelpHandle = {this.handleYelpData} yelpRenderedItems = {this.state.yelpData}/>
        <Trails locObj = {this.props.locObj} trailsHandle = {this.handleTrailsData} trailsRenderedItems = {this.state.trailsData}/>
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
//comments made on this class to allow app to run on code 301 master city explorer backend
class Eventbrite extends React.Component {

  // componentDidMount(){
  //   this.getEventData(this.props.locObj);
  // }
  // componentDidUpdate(prevProps){
  //   if(this.props.locObj !== prevProps.locObj){
  //     this.getEventData(this.props.locObj);
  //   }
  // }
//commented out to run on class master backend
  getEventData = async geoData => {
    let svr_url = 'https://city-explorer-backend.herokuapp.com/events';
    // let svr_url = 'http://localhost:3000/events';
    let event_data = await superagent.get(svr_url).query({data: geoData});
    console.log('Eventbrite data after get', event_data);
    // let eventItems = event_data.body.map((item, i) => <li key={i}><h3><br />{`${item.name}`}</h3><br />{`${item.event_date}`}{`${item.summary}`}</li>);
    // console.log(eventItems);
    // this.props.eventHandle(eventItems);
  }

  render(){
    return(
      <section>
        <h3>Eventbrite</h3>
        {/* { <ul> {this.props.eventRenderedItems} </ul> } */}
      </section>

    );

  }
}

class MovieDB extends React.Component {

  componentDidMount(){
    this.getMovieData(this.props.locObj);
  }
  componentDidUpdate(prevProps){
    if(this.props.locObj !== prevProps.locObj){
      this.getMovieData(this.props.locObj);
    }
  }

  getMovieData = async geoData => {
    let svr_url = 'https://city-explorer-backend.herokuapp.com/movies';
    // let svr_url = 'http://localhost:3000/movies';
    let movie_data = await superagent.get(svr_url).query({data: geoData});
    console.log('MovieDB data after get', movie_data);
    let movieItems = movie_data.body.map((item, i) => <li key={i}><img src={item.image_url} alt={item.formatted_address}/><br />{item.overview}</li>);
    console.log(movieItems);
    this.props.movieHandle(movieItems);
  }

  render(){
    return(
      <section>
        <h3>MovieDB</h3>
        { <ul> {this.props.movieRenderedItems} </ul> }
      </section>

    );

  }

}

class Yelp extends React.Component {
  componentDidMount(){
    this.getYelpData(this.props.locObj);
  }
  componentDidUpdate(prevProps){
    if(this.props.locObj !== prevProps.locObj){
      this.getYelpData(this.props.locObj);
    }
  }
  getYelpData = async geoData => {
    let svr_url = 'https://city-explorer-backend.herokuapp.com/yelp';
    // let svr_url = 'http://localhost:3000/yelp';
    let yelp_data = await superagent.get(svr_url).query({data: geoData});
    console.log('yelp data after get', yelp_data);
    let yelpItems = yelp_data.body.map((item, i) => <li key={i}><h3>{item.name}</h3><br />{`The average rating is ${item.rating} out of 5 and the average cost is ${item.price} out of 5`}</li>);
    console.log(yelpItems);
    this.props.yelpHandle(yelpItems);
  }
  render(){
    return(
      <section>
        <h3>Yelp</h3>
        <ul>{this.props.yelpRenderedItems}</ul>
      </section>

    );

  }
}

class Trails extends React.Component {
  componentDidMount(){
    this.getTrailsData(this.props.locObj);
  }
  componentDidUpdate(prevProps){
    if(this.props.locObj !== prevProps.locObj){
      this.getTrailsData(this.props.locObj);
    }
  }
  getTrailsData = async geoData => {
    let svr_url = 'https://city-explorer-backend.herokuapp.com/trails';
    // let svr_url = 'http://localhost:3000/trails';
    let trails_data = await superagent.get(svr_url).query({data: geoData});
    console.log('trails data after get', trails_data);
  let trailsItems = trails_data.body.map((item, i) => <li key={i}>{'Hike name: '}<a href={item.image_url}>{item.name}</a>{', '}{'Location: '}{item.location}<br />{'On '}{item.condition_date}{' at '}{item.condition_time}{' trails conditions were reported as: '}{item.conditions}<br />{'This trail has a rating of '}{item.stars}{'stars (out of '}{item.star_votes}{' votes)'}</li>);
    console.log(trailsItems);
    this.props.trailsHandle(trailsItems);
  }
  render(){
    return(
      <section>
        <h3>Trails</h3>
        <ul>{this.props.trailsRenderedItems}</ul>
      </section>

    );

  }
}

export default Results;