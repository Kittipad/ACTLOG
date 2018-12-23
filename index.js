import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
// import App from './src/Student/Home'

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App);