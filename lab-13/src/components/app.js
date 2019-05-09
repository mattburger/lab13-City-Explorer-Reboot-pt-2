import React from 'react';
import Header from './header.js'
import Main from './main'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      locations: 'Lynnwood',
    }
  }

  handleForm = (location) => {
    this.setState({ location });
  }

  render(){
    return (
      <>
        <Header />
        <Main handler = {this.handleForm} />
      </> 
    );
  }

}


export default App;
