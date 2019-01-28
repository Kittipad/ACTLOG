import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import FirebaseConfig from './src/FirebaseConfig'

export default class Initial extends Component {
  componentDidMount() {
    new FirebaseConfig
  }

  render() {
    return (
      <App />
    )
  }
}

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => Initial);