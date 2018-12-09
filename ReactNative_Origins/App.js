import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './Components/FetchLocation';
import NewComponent from './Components/NewComponent';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sample: 'hey there come stay a while...',
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

  render() {
    return (
      <View style={styles.container}>
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
  },
});
