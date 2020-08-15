/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
// require('react-native').unstable_enableLogBox();
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
