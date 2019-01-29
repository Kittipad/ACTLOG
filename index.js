import React, { Component } from 'react';
import { AppRegistry , Platform} from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import firebase from 'react-native-firebase'

export default class Initial extends Component {
  componentDidMount() {
    const androidConfig = {
      clientId: '550723713394-og6kc15vet3p0jjn8kt2fv3krj0iqbcs.apps.googleusercontent.com',
      appId: '1:550723713394:android:811fdcc2903439b6',
      apiKey: 'AIzaSyDZFDuxHaTCDsmsva_pnKTsK7j1G3-KIOI',
      databaseURL: 'https://actlog-912c1.firebaseio.com',
      storageBucket: 'actlog-912c1.appspot.com',
      messagingSenderId: '550723713394',
      projectId: 'actlog-912c1',
      persistence: true,
    }
    const iosConfig = {
      clientId: '550723713394-71e24irj8p8vcp3p4vc084mt1t6tllhe.apps.googleusercontent.com',
      appId: '1:550723713394:ios:9c0d881c6cd71f82',
      apiKey: 'AIzaSyASvSBKqGonAQIA8Fd6FNgtCyOBjr3eCZs',
      databaseURL: 'https://actlog-912c1.firebaseio.com',
      storageBucket: 'actlog-912c1.appspot.com',
      messagingSenderId: '550723713394',
      projectId: 'actlog-912c1',
      persistence: true,
    }
    firebase.initializeApp(Platform.OS === 'ios' ? iosConfig : androidConfig)
  }

  render() {
    return (
      <App />
    )
  }
}

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => Initial);