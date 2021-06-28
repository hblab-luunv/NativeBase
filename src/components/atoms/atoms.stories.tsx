import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import Icon from './Icon';
import {images} from '../../themes';

const stories = storiesOf('Atoms', module);
const baseStyle = {marginTop: 10, marginLeft: 10, marginRight: 10};

stories.add('Icon', () => (
  <View>
    <Icon style={baseStyle} source={images.icUser} />
  </View>
));
