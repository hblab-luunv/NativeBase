import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {Icon, Button} from './';
import {images, colors} from '../../themes';
import Badge from './Badge';
import Divider from './Divider';

const stories = storiesOf('Atoms', module);

const baseStyle = {marginTop: 10, marginLeft: 10, marginRight: 10};
stories.add('Icon', () => (
  <View>
    <Icon style={baseStyle} source={images.icUser} />
  </View>
));

stories.add('Badge', () => (
  <View>
    <Badge number={2} badgeStyle={baseStyle} />
    <Badge number={10} badgeStyle={baseStyle} />
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

stories.add('Divider', () => (
  <View>
    <Divider style={baseStyle} />
    <Divider style={baseStyle} height={5} color={colors.danger} />
    <Divider style={baseStyle} height={9} color={colors.primary} />
    <Divider style={baseStyle} height={15} color={colors.secondary} />
  </View>
));
