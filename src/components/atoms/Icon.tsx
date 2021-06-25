import React, {memo} from 'react';
import {Image, StyleSheet, ImageProps, ImageStyle} from 'react-native';
import {scaleSize} from '../../themes/mixins';

interface IconProps extends ImageProps {
  width?: number;
  height?: number;
  style?: ImageStyle;
}

const Icon: React.FC<IconProps> = ({
  width = scaleSize(24),
  height = scaleSize(24),
  style,
  ...props
}) => {
  return (
    <Image
      style={{...styles.icon, width, height, ...style}}
      resizeMode={'contain'}
      {...props}
    />
  );
};

export default memo(Icon);

const styles = StyleSheet.create({
  icon: {},
});
