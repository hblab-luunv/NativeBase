import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import storybook from './storybook'


AppRegistry.registerComponent(appName, () => storybook);


