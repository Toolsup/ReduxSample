import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from './screen/FirstScreen'
import MyScreen from './screen/MyScreen'

let RootStack = createStackNavigator({
  First: FirstScreen,
  Second: MyScreen,
});

let Navigation = createAppContainer(RootStack);

class App extends React.Component{

  render() {
      return (
          <Navigation/>          
      );
  }
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
