/**
 * @format
 */
import {AppRegistry, Dimensions} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width } = Dimensions.get('window')

EStyleSheet.build({
    $rem: width/380
})

AppRegistry.registerComponent(appName, () => App);
