import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {Icon, Button} from './';
import {images, colors} from '../../themes';

const stories = storiesOf('Atoms', module);
const baseStyle = {marginTop: 10, marginLeft: 10, marginRight: 10};

stories.add('Icon', () => (
  <View>
    <Icon style={baseStyle} source={images.icUser} />
  </View>
));

stories.add('Button', () => (
  <View>
    <Button buttonStyle={baseStyle} title="Large" />
    <Button buttonStyle={baseStyle} title="Medium" size="medium" />
    <Button buttonStyle={baseStyle} title="Small" size="small" />
    <Button
      buttonStyle={baseStyle}
      title="Outline"
      type="outline"
      color={colors.danger}
    />
    <Button buttonStyle={baseStyle} title="Disable" disabled />
  </View>
));
