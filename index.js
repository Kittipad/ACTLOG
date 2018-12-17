import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
// import App from './src/Student/Home'

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App);