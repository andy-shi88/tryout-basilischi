/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var Main = require('./app/components/main/Main');
var Contact = require('./app/components/main/Contact');


export default class tryout2 extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{
          id:'Main'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Main':
        return (<Main navigator={navigator} title='Main' />)
        break;
      case 'Contact':
        return (<Contact navigator={navigator} title='Contact' contact={route.contact}/>)
        break;
      default:
        break;

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tryout2', () => tryout2);
