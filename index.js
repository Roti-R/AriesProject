/**
 * @format
 */

import AppRegistry from 'react-native';
import run from './agentSetup/getNewAgent.js';
import {name as appName} from './app.json';
import 'react-native-get-random-values';

AppRegistry.registerComponent(appName, () => run );
