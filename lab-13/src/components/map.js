import React from 'react';

class Map extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     geoObject: this.props.locObj
  //   }
  // }

  render(){
    // console.log(this.props.locObj)
    let lat = this.props.locObj.latitude;
    let lng = this.props.locObj.longitude;
    return(
      <img src ={`https://maps.googleapis.com/maps/api/staticmap?center=${lat}%2c%20${lng}&zoom=13&size=600x300&maptype=roadmap
      &key=${this.props.daK}`} alt={'code fellows'} />
    );
  }

}

export default Map;