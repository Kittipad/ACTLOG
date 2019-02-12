import React, { Component } from 'react'
import { AppRegistry, Platform } from 'react-native'
import { name as appName } from './app.json'
import App from './src/App'
import FirebaseConfig from './src/FirebaseConfig'
import firebase from 'react-native-firebase'

export default class Initial extends Component {
  componentDidMount() {
    firebase.initializeApp(
      Platform.OS === 'ios' ? FirebaseConfig.ios : FirebaseConfig.android
    )
  }

  render() {
    return (
      <App />
    )
  }
}

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => Initial)