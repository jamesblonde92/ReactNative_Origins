import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './Components/FetchLocation';

export default class App extends React.Component {
  
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    }, err => consol.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation= {this.getUserLocationHandler} />
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
