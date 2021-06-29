import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {images} from '../../themes';
import BadgeWithIcon from './BadgeWithIcon';

const stories = storiesOf('Molecules', module);

const baseIconStyle = {marginTop: 10, marginLeft: 10, marginRight: 10};
stories.add('BadgeIcon', () => (
  <View>
    <BadgeWithIcon
      containerStyle={baseIconStyle}
      number={10}
      icon={images.icUser}
      size={30}
    />
    <BadgeWithIcon
      containerStyle={baseIconStyle}
      number={10}
      icon={images.icUser}
      size={50}
    />
    <BadgeWithIcon
      containerStyle={baseIconStyle}
      number={10}
      icon={images.icUser}
      size={70}
    />
    <BadgeWithIcon
      containerStyle={baseIconStyle}
      number={10}
      icon={images.icUser}
      size={90}
    />
  </View>
));
