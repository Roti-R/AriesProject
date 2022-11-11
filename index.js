/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RootApp from './RootApp';
import {name as appName} from './app.json';
import 'react-native-get-random-values';

AppRegistry.registerComponent(appName, () => RootApp);
