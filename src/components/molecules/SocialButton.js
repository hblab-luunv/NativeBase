import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {scaleSize} from '../../themes/mixins';

const SocialButton = props => {
  const {onPress, imageSrc} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.icon} resizeMode="cover" source={imageSrc} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  icon: {
    width: scaleSize(40),
    height: scaleSize(40),
  },
});
