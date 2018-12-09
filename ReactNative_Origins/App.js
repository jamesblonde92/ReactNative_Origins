import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './Components/FetchLocation';
import NewComponent from './Components/NewComponent';
import NavComponent from './Components/NavComponent';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sample: 'hey there come stay a while...',
      navOpen: false,
    } 

  }
  
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    }, err => consol.log(err));
  }

  handleToggle = () => {
    console.log('the button was clicked... lets see what happens...');
    this.setState({
      sample: 'you clicked me!',
    })
  }

  handleNavToggle = () => {
    console.log('nav state is: ' + this.state.navOpen);
    let intermediateState = false;
    if (this.state.navOpen === true) {
      this.setState({
        navOpen: false,
      })
      intermediateState = false;
    }
    else{
      this.setState({
        navOpen: true,
      })
      intermediateState = true;
    }
    console.log('nav state is now...: ' + intermediateState);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavComponent onNavClick={this.handleNavToggle} navOpen={this.state.navOpen}/>
        <FetchLocation onGetLocation= {this.getUserLocationHandler} />
        <NewComponent toSend={this.state.sample} handleToggle={this.handleToggle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
});
