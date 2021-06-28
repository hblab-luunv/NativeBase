import React, {memo} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import {colors, fonts, metrics} from '../../themes';
import {scaleSize} from '../../themes/mixins';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  type?: 'fill' | 'outline';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  disabled = false,
  size = 'medium',
  type = 'fill',
  color = colors.primary,
  buttonStyle,
  titleStyle,
  onClick = () => {},
}) => {
  const containerStyle = StyleSheet.flatten([
    styles(size, type, color, disabled).container,
    buttonStyle,
  ]);
  const newTitleStyle = StyleSheet.flatten([
    styles(size, type, color, disabled).title,
    titleStyle,
  ]);
  const activeOpacity = disabled ? 1 : 0.7;

  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={activeOpacity}
      onPress={() => (disabled ? {} : onClick())}>
      <Text style={newTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = (size: string, type: string, color: string, disabled: boolean) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height:
        size === 'large'
          ? scaleSize(52)
          : size === 'medium'
          ? scaleSize(44)
          : scaleSize(36),
      backgroundColor: disabled
        ? colors.bgGray
        : type === 'fill'
        ? color
        : colors.white,
      borderWidth: 1,
      borderColor: type === 'outline' ? color : 'transparent',
      borderRadius: metrics.smallRadius,
    },
    title: {
      color: disabled
        ? colors.grayText
        : type === 'fill'
        ? colors.white
        : color,
      fontSize:
        size === 'large'
          ? fonts.size.regular
          : size === 'medium'
          ? fonts.size.medium
          : fonts.size.small,
    },
  });
