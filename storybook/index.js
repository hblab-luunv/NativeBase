import {AppRegistry} from 'react-native';
import {getStorybookUI, configure} from '@storybook/react-native';
import atomStories from '../src/components/atoms/atoms.stories';
import './rn-addons';
import moleculesStories from '../src/components/molecules/molecules.stories';

// import stories
configure(() => {
  [atomStories, moleculesStories];
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
